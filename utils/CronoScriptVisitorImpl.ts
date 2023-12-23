import { CronoScriptVisitor } from "../antlr/TSparser/CronoScriptVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as parser from '../antlr/TSparser/CronoScriptParser';
import * as model from './models';
import { parseDuration, parseUserDate } from "./timeUtils";


/**
 * dateAtoms, durations, groups (without children) and tags
 */
type GroupChild = (
     {type: "dateAtom", object: model.dateAtom}
    |{type: "group", object: model.Group}
    |{type: "tags", object: model.Tag}
    );

/**
 * dateAtoms, durations, groups (with children), tags and separators
 */
type GroupBodyChild = (
     {type: "dateAtom",  object: model.dateAtom}
    |{type: "duration",  object: model.Duration}
    |{type: "group",     object: model.Group, children?: GroupChild[]}
    |{type: "separator", object:string}
    );



export class CronoScriptVisitorImpl extends AbstractParseTreeVisitor<any> implements CronoScriptVisitor<any> {

    private hierarchicalContext = new HierarchicalContext();
    private dateFormat = "MM/DD/yyyy";

    defaultResult() {
        console.warn("Default result called");
        return null;
    }


    visitCronodile(ctx: parser.CronodileContext): model.Cronodile {
        const cronodile: model.Cronodile = {};


        // Looking for global tags
        const tags: model.Tag[] = [];
        ctx.tag().forEach(tag => {
            const tagObject = this.visitTag(tag);
            if (tagObject) tags.push(tagObject);
            // TODO: Maybe set the parentId of the tag to the cronodile id
        });
        if (tags.length > 0) cronodile.tags = tags;

        // if dateFormat tag is present, set the locale
        const reversedTags = [...tags].reverse(); // reverse to get the last tag first
        const localeTag = reversedTags.find(tag => ( tag.symbol == "#" && tag.key == "dateFormat" && tag.value));
        if (localeTag) {
            this.dateFormat = localeTag.value!;
        }

        // Looking for lonely dates (top level)
        const dates: model.dateAtom[] = [];
        ctx.date().forEach((date, index) => {

            this.hierarchicalContext.enterGroup(index);
            const dateObject = this.visitDate(date);
            this.hierarchicalContext.leaveGroup();

            //const id = this.hierarchicalContext.getCurrentId();
            if (dateObject) {
                dates.push({...dateObject,order: index});
            }
        });
        cronodile.dateAtoms = dates;

        // Looking for groups (top level)
        // But they contain all their family (dates and groups) as children
        // We will extract them
        const groups: model.Group[] = [];
        ctx.group().forEach((group, index) => {

            this.hierarchicalContext.enterGroup(index);
            let groupObject = this.visitGroup(group);
            this.hierarchicalContext.leaveGroup();

            if (!groupObject) {
                console.warn(`Group ${group.text} is not valid`);
                return;
            }

            // Set the order of the group
            groupObject.mainGroup.order = index;

            // Put the group intself into the cronodile
            groups.push(groupObject.mainGroup);

            // Put the children of the group into the cronodile:
            // 1. Groups
            if (groupObject.children) {
                let childIndexForGroups = 0;
                groupObject.children.forEach(child => {
                    if (child.type == "group") {
                        groups.push(child.object);
                        childIndexForGroups++;
                    }
                });
            }

            // 2. dateAtoms
            if (groupObject.children) {
                groupObject.children.forEach((child) => {
                    if (child.type == "dateAtom") {
                        cronodile.dateAtoms!.push(child.object);
                    }
                });
            }

            // 3. tags
            if (groupObject.children) {
                groupObject.children.forEach((child) => {
                    if (child.type == "tags") {
                        if (!cronodile.tags) cronodile.tags = [];
                        cronodile.tags.push(child.object);
                    }
                });
            }
        });
        if (groups.length > 0) cronodile.groups = groups;
        
        // Final result
        return cronodile
    }


    visitTag(ctx: parser.TagContext): model.Tag | null{
        const tagText = ctx.text;
        const tagToken = ctx.TAG();
        if (!tagToken) {
            console.warn(`Tag ${tagText} has no children`);
            return null;
        } else {
            const parentId = this.hierarchicalContext.getCurrentId();
            const symbol =  tagToken.text[0];
            const tagContent = tagToken.text.substring(1); // substring to remove the #
            const parts = tagContent.split(":");
            const key = parts[0];
            const value = parts[1];
            console.debug(`Tag ${tagText} has key ${key} and value ${value}`);
            return {parentId, symbol, key, value};
        }
    }


    visitDate(ctx: parser.DateContext): model.dateAtom | null {
        const dateText = ctx.text;

        if (ctx.ID()) {
            console.debug(`Date ${dateText} is an ID`);
            // TODO: handle the case where the date is an ID ; browse the variable map to find the date
            return null;
        }
        
        if (ctx.DATE()) {
            const dateContent = dateText.substring(1, dateText.length - 1); // substring to remove the single quotes
            const date = parseUserDate(dateContent, this.dateFormat);
            if (date) {
                return {
                    id:       this.hierarchicalContext.getCurrentId(),
                    parentId: this.hierarchicalContext.getParentId(),
                    order: 0,    // Will be set by the caller
                    date: date
                };
            } else {
                console.warn(`Date ${dateText} is not valid`);
                return null;
            }
        }
        
        return null;
    }


    visitGroup(ctx: parser.GroupContext):{ mainGroup: model.Group, children?: GroupChild[]} | null 
    {
        const text = ctx.text;

        let mainGroup: model.Group = {
            id:       this.hierarchicalContext.getCurrentId(),
            parentId: this.hierarchicalContext.getParentId(),
            order:  0,       // Will be set by the caller
            name:   "",
            // tags and childrenIds will be set below
        };

        // Process main group
        if (ctx.ID()) {
            // TODO: handle the case where the group is an ID ; browse the variable map to find the group
            console.debug(`Group ${ctx.ID()!.text} is an ID`);
            return null;
        }

        // Find name
        const name = ctx.string() ? this.visitString(ctx.string()!) : "";
        if (name) mainGroup.name = name;

        // Find tags
        const tags: {type: "tags", object: model.Tag}[] = [];
        ctx.tag().forEach(tag => {
            const tagObject = this.visitTag(tag);
            if (tagObject) {
                tags.push({type: "tags", object: tagObject});
            }
        });
        // We will put the tags in the children array later


        // Get the content of the group body
        let groupBodyChildren: GroupBodyChild[] | null = [];
        const groupBody = ctx.groupBody();
        if (groupBody) {
            const groupBodyResult = this.visitGroupBody(groupBody);
            if (groupBodyResult) {
                groupBodyChildren = groupBodyResult;
            } else {
                console.warn(`Group ${text} has no valid body`);
            }
        }


        // Set `delayedTo` when there's a DELAY `...` separator
        groupBodyChildren.forEach((child, index) => {
            if (child.type == "separator" && child.object == "DELAY") {
                const left =  groupBodyChildren![index - 1];
                const right = groupBodyChildren![index + 1];
                const compatibleObjects = ["dateAtom", "group"];
                if (left && right && compatibleObjects.includes(left.type) && compatibleObjects.includes(right.type)) {
                    const leftObject =  left.object as model.dateAtom | model.Group;
                    const rightObject = right.object as model.dateAtom | model.Group;
                    leftObject.delayedTo = rightObject.id;
                } else {
                    console.warn(`Group ${text} has a separator '...' at an invalid position`);
                }
            }
        });

        // Set `delayedTo` when there's a DELAYPLUS `...+` or DELAYMINUS `...-` separator
        groupBodyChildren.forEach((child, index) => {
            if (child.type == "separator" && (child.object == "DELAYPLUS" || child.object == "DELAYMINUS")) {
                const left =  groupBodyChildren![index - 1];
                const right = groupBodyChildren![index + 1];
                const compatibleLeft = ["dateAtom", "group"];
                const compatibleRight = ["duration"];
                if (left && right && compatibleLeft.includes(left.type) && compatibleRight.includes(right.type)) {

                    // Replace the duration by a computed dateAtom
                    const duration = (right.object as model.Duration).millis;
                    let leftDate: Date | undefined = undefined;
                    
                    if (left.type == "dateAtom") {
                        leftDate = left.object.date;

                    } else if (left.type == "group") {
                        // TODO: handle the case where the left object is a group
                        console.warn(`Cannot infer delayed date with the '...+' or '...-' separator for group ${text}`);
                    }

                    if (!leftDate) {
                        console.warn(`Group ${text} has a separator '...+' or '...-' at an invalid position`);
                        return;
                    }


                    let delayDate: Date;
                    if (child.object == "DELAYPLUS") {
                        delayDate = new Date(leftDate.getTime() + duration);
                    } else {
                        delayDate = new Date(leftDate.getTime() - duration);
                    }

                    // The duration will be replaced by a dateAtom
                    this.hierarchicalContext.enterGroup(index); 
                    const dateAtom: model.dateAtom = {
                        //id: (left.object as model.dateAtom | model.Group).id + ".delay",
                        id:       this.hierarchicalContext.getCurrentId(),
                        parentId: this.hierarchicalContext.getParentId(),
                        order: 0,           // Will be set later
                        date: delayDate
                    };
                    this.hierarchicalContext.leaveGroup();

                    // Replace the duration by the dateAtom
                    groupBodyChildren![index + 1] = {type: "dateAtom", object: dateAtom};

                    // Set the delayedTo property
                    (left.object as model.dateAtom | model.Group).delayedTo = dateAtom.id;
                } else {
                    console.warn(`Group ${text} has a separator '...+' or '...-' at an invalid position`);
                }
            }
        });

        // Set `linkedTo` when there's a TO `->` separator
        groupBodyChildren.forEach((child, index) => {
            if (child.type == "separator" && child.object == "TO") {
                const left =  groupBodyChildren![index - 1];
                const right = groupBodyChildren![index + 1];
                const compatibleObjects = ["dateAtom", "group"];
                if (left && right && compatibleObjects.includes(left.type) && compatibleObjects.includes(right.type)) {
                    const leftObject =    left.object as model.dateAtom | model.Group;
                    const rightObject =   right.object as model.dateAtom | model.Group;
                    leftObject.linkedTo = rightObject.id;
                } else {
                    console.warn(`Group ${text} has a separator '->' at an invalid position`);
                }
            }
        });

        // Set `linkedTo` when there's a TOPLUS `->+` or separator (there's no `->-` separator)
        groupBodyChildren.forEach((child, index) => {
            if (child.type == "separator" && child.object == "TOPLUS") {
                const left = groupBodyChildren![index - 1];
                const right = groupBodyChildren![index + 1];
                const compatibleLeft = ["dateAtom", "group"];
                const compatibleRight = ["duration"];
                if (left && right && compatibleLeft.includes(left.type) && compatibleRight.includes(right.type)) {

                    // Replace the duration by a computed dateAtom
                    const duration = (right.object as model.Duration).millis;
                    let leftDate: Date | undefined = undefined;
                    
                    if (left.type == "dateAtom") {
                        leftDate = left.object.date;

                    } else if (left.type == "group") {
                        // TODO: handle the case where the left object is a group
                        console.warn(`Cannot infer linked date with the '->+' separator for group ${text}`);
                    }

                    if (!leftDate) {
                        console.warn(`Group ${text} has a separator '->+' at an invalid position`);
                        return;
                    }

                    let linkedDate: Date;
                    linkedDate = new Date(leftDate.getTime() + duration);

                    this.hierarchicalContext.enterGroup(index);
                    const dateAtom: model.dateAtom = {
                        //id: (left.object as model.dateAtom | model.Group).id + ".link",
                        id:       this.hierarchicalContext.getCurrentId(),
                        parentId: this.hierarchicalContext.getParentId(),
                        order: 0,           // Will be set later
                        date: linkedDate
                    };
                    this.hierarchicalContext.leaveGroup();

                    // Replace the duration by the dateAtom
                    groupBodyChildren![index + 1] = {type: "dateAtom", object: dateAtom};

                    // Set the linkedTo property
                    (left.object as model.dateAtom | model.Group).linkedTo = dateAtom.id;
                }
            }
        });

        // groupBodyChildren now contains only separators, dateAtoms, groups (that contain children)
        // Durations have been replaced by dateAtoms just above, but the type still contains "duration".

        // Let's extract the grandchildren from the groups to process them later
        const grandchildren: GroupChild[] = [];
        groupBodyChildren.forEach(child => {
            if (child.type == "group" && child.children) {
                child.children.forEach(grandchild => {
                    grandchildren.push(grandchild);
                });
            }
        });

        // Let's create the result object
        const childrenResult: GroupChild[] = [];
        // And extract dateAtoms and groups from the groupBodyChildren array
        // We will ditch:
        // - durations (normaly they have been replaced by dateAtoms just above)
        // - separators (don't need them anymore)
        // - grandchildren (we already extracted them for later processing)
        groupBodyChildren.forEach(child => {
            if (child.type == "dateAtom") {
                childrenResult.push({type: "dateAtom", object: child.object});
            } else if (child.type == "group") {
                childrenResult.push({type: "group", object: child.object}); // Notice how we ignored the children property of the child
            }
        });

        // Let's set the order of the dateAtoms and groups
        childrenResult.forEach((child, index) => {
            if (child.type == "dateAtom" || child.type == "group") {
                (child.object as model.dateAtom | model.Group).order = index;
            }
        });

        // Let's append the grandchildren
        childrenResult.push(...grandchildren);

        // Let's append the tags found earlier
        childrenResult.push(...tags);

        return {mainGroup, children: childrenResult};
    }



    
    visitGroupBody(ctx: parser.GroupBodyContext): GroupBodyChild[] | null {
        if (ctx.children?.length == 0) {
            console.warn(`Group body has no children`);
            return null;
        }

        // This array will contain the children of the group and will be returned
        const children: GroupBodyChild[] = [];

        // Let's browse the children of the group and put them in the children array

        // Used to set the `order` property of dateAtoms and groups :
        let indexWithoutSeparators = 0;
        // The order is a different information than the content of the id
        // The id only counts the same type of elements (dateAtoms or groups)
        // The order counts all the elements (dateAtoms and groups)

        ctx.children?.forEach(child => {

            // Elements other than separators
            if (child instanceof parser.ElementContext) {

                this.hierarchicalContext.enterGroup(indexWithoutSeparators);
                const element = this.visitElement(child);
                this.hierarchicalContext.leaveGroup();

                switch (element?.type) {

                    case "group":
                        const group = element.object;
                        group.order = indexWithoutSeparators;
                        const groupChildren = element.children;
                        children.push({type: "group", object: group, children: groupChildren});
                        indexWithoutSeparators++;
                        break;

                    case "dateAtom":
                        const dateAtom = element.object;
                        dateAtom.order = indexWithoutSeparators;
                        children.push({type: "dateAtom", object: dateAtom});
                        indexWithoutSeparators++;
                        break;

                    case "duration":
                        const duration = element.object;
                        children.push({type: "duration", object: duration});
                        indexWithoutSeparators++;
                        break;

                    case "number":
                        console.warn(`Number ${child.text} is not valid inside a group`);
                        break;

                    default:
                        console.warn(`Element ${child.text} is not valid`);
                        break;

                }


            // Separators
            } else if (child instanceof parser.SeparatorContext) {
                const separator = this.visitSeparator(child);
                if (separator) {
                    children.push({type: "separator", object: separator});
                } else {
                    console.warn(`Separator ${child.text} is not valid`);
                }
            }

        });

        if (children.length == 0) {
            console.warn(`Group body has no valid children`);
            return null;
        }
        return children;
    }


    visitElement(ctx: parser.ElementContext)
        : {type: "group", object: model.Group, children?: GroupChild[]}
        | {type: "dateAtom", object: model.dateAtom}
        | {type: "duration", object: model.Duration}
        | {type: "number", object: number}
        | null
    {
        if (ctx.ID()) {
            // TODO: handle the case where the element is an ID ; browse the variable map to find the element
            console.debug(`Element ${ctx.ID()!.text} is an ID`);
            return null;
        }

        if (ctx.group()) {
            const group = this.visitGroup(ctx.group()!);
            if (group) {
                return {type: "group", object: group.mainGroup, children: group.children};
            } else {
                console.warn(`Group ${ctx.group()!.text} is not valid`);
                return null;
            }
        }

        if (ctx.date()) {
            const date = this.visitDate(ctx.date()!);
            if (date) {
                return {type: "dateAtom", object: date};
            } else {
                console.warn(`Date ${ctx.date()!.text} is not valid`);
                return null;
            }
        }

        if (ctx.duration()) {
            const duration = this.visitDuration(ctx.duration()!);
            if (duration) {
                return {type: "duration", object: duration};
            } else {
                console.warn(`Duration ${ctx.duration()!.text} is not valid`);
                return null;
            }
        }

        if (ctx.expression()) {
            const expression = this.visitExpression(ctx.expression()!);
            if (expression) {
                if (expression.type == "dateAtom") {
                    return {type: "dateAtom", object: expression.object};
                } else if (expression.type == "duration") {
                    return {type: "duration", object: expression.object};
                } else if (expression.type == "number") {
                    return {type: "number", object: expression.object};
                } else {
                    console.warn(`Expression ${ctx.expression()!.text} is not valid`);
                    return null;
                }
            } else {
                console.warn(`Expression ${ctx.expression()!.text} is not valid`);
                return null;
            }
        }
        console.warn(`Element ${ctx.text} is not valid`);
        return null;
    }


    visitString(ctx: parser.StringContext): string | null {
        const string = ctx.text;
        const stringContent = string.substring(1, string.length - 1); // substring to remove the quotes
        if (stringContent == "") {
            console.warn("String is empty");
            return null;
        } else {
            return stringContent;
        }
    }


    visitType(ctx: parser.TypeContext): string | null {
        const type = ctx.text;
        if (type == "") {
            console.warn("Type is empty");
            return null;
        } else {
            return type;
        }
    }


    visitDuration(ctx: parser.DurationContext): model.Duration | null {
        const duration = ctx.text;
        if (duration == "") {
            console.warn("Duration is empty");
            return null;
        }

        const parts = duration.split("_");
        const value = parts[0];
        const unit = parts[1];
        if (!value || !unit) {
            console.warn(`Duration ${duration} is not valid`);
            return null;
        }

        const valueNumber = parseInt(value);
        if (isNaN(valueNumber)) {
            console.warn(`Duration ${duration} is not valid`);
            return null;
        }

        return {millis: parseDuration(valueNumber, unit)};
    }


    visitExpression(ctx: parser.ExpressionContext)
        : {type: "dateAtom", object: model.dateAtom}
        | {type: "duration", object: model.Duration}
        | {type: "number", object: number}
        | null
    {
        const rawText = ctx.text;
        if (rawText == "") {
            console.warn("Expression is empty");
            return null;
        }

        // operand
        if (ctx.operand()) {
            const operand = this.visitOperand(ctx.operand()!);
            if (operand) {
                return operand;
            } else {
                return null;
            }
        }

        // '(' expression ')'
        if (ctx.expression(0) && !ctx.operator() && !ctx.expression(1)) {
            const expression = this.visitExpression(ctx.expression(0)!);
            if (expression) {
                return expression;
            } else {
                return null;
            }
        }

        // expression operator expression
        if (ctx.expression(0) && ctx.operator() && ctx.expression(1)) {
            const operator = this.visitOperator(ctx.operator()!);
            if (!operator) {
                console.warn(`Operator ${ctx.operator()!.text} is not valid`);
                return null;
            }

            const left =  this.visitExpression(ctx.expression(0));
            const right = this.visitExpression(ctx.expression(1));

            if (!left || !right) {
                console.warn(`Expression ${rawText} is not valid`);
                return null;
            }

            if (left.type == "number" && right.type == "number") {
                const leftNumber = left.object as number;
                const rightNumber = right.object as number;
                switch (operator) {
                    case "+": return {type: "number", object: leftNumber + rightNumber};
                    case "-": return {type: "number", object: leftNumber - rightNumber};
                    case "*": return {type: "number", object: leftNumber * rightNumber};
                    case "/": return {type: "number", object: leftNumber / rightNumber};
                    default: return null;
                }
            }

            if (left.type == "number" && right.type == "duration") {
                const leftNumber  =  left.object as number;
                const rightObject = right.object as model.Duration;
                const rightNumber = rightObject.millis;
                switch (operator) {
                    case "+": return {type: "duration", object: {millis: leftNumber + rightNumber}};
                    case "-": return {type: "duration", object: {millis: leftNumber - rightNumber}};
                    case "*": return {type: "duration", object: {millis: leftNumber * rightNumber}};
                    case "/": return {type: "duration", object: {millis: leftNumber / rightNumber}};
                    default: return null;
                }
            }

            if (left.type == "duration" && right.type == "number") {
                const leftObject = left.object as model.Duration;
                const leftNumber = leftObject.millis;
                const rightNumber = right.object as number;
                switch (operator) {
                    case "+": return {type: "duration", object: {millis: leftNumber + rightNumber}};
                    case "-": return {type: "duration", object: {millis: leftNumber - rightNumber}};
                    case "*": return {type: "duration", object: {millis: leftNumber * rightNumber}};
                    case "/": return {type: "duration", object: {millis: leftNumber / rightNumber}};
                    default: return null; // TODO: handle error
                }
            }

            if (left.type == "duration" && right.type == "duration") {
                const leftObject = left.object as model.Duration;
                const leftNumber = leftObject.millis;
                const rightObject = right.object as model.Duration;
                const rightNumber = rightObject.millis;
                switch (operator) {
                    case "+": return {type: "duration", object: {millis: leftNumber + rightNumber}};
                    case "-": return {type: "duration", object: {millis: leftNumber - rightNumber}};
                    case "/": return {type: "duration", object: {millis: leftNumber / rightNumber}};
                    default: return null; // TODO: handle error
                }
            }

            if (left.type == "dateAtom" && right.type == "duration") {
                console.log("left is dateAtom and right is duration");
                const leftObject = left.object as model.dateAtom;
                const leftDate = leftObject.date;
                console.log("leftDate", leftDate);
                const rightObject = right.object as model.Duration;
                const rightNumber = rightObject.millis;
                let result: model.dateAtom = {
                    id:       this.hierarchicalContext.getCurrentId(),
                    parentId: this.hierarchicalContext.getParentId(),
                    order: 0,           // Will be set by the caller
                    date: new Date(0)   // Will be set later
                };
                switch (operator) {
                    case "+": return {type: "dateAtom", object: {...result, date: new Date(leftDate.getTime() + rightNumber)}};
                    case "-": return {type: "dateAtom", object: {...result, date: new Date(leftDate.getTime() - rightNumber)}};
                    default: return null; // TODO: handle error
                }
            }
            console.warn(`Expression ${rawText} is not valid`);
            return null;
        }
        return null
    }


    visitOperand(ctx: parser.OperandContext)
        : {type: "dateAtom", object: model.dateAtom}
        | {type: "duration", object: model.Duration}
        | {type: "number", object: number}
        | null
    {
        const rawText = ctx.text;
        if (rawText == "") {
            console.warn("Operand is empty");
            return null;
        }

        if (ctx.date()) {
            const date = this.visitDate(ctx.date()!);
            if (date) {
                return {type: "dateAtom", object: date};
            } else {
                return null;
            }
        }

        if (ctx.duration()) {
            const duration = this.visitDuration(ctx.duration()!);
            if (duration) {
                return {type: "duration", object: duration};
            } else {
                return null;
            }
        }

        if (ctx.INT()) {
            const number = parseInt(ctx.INT()!.text);
            if (isNaN(number)) {
                console.warn(`Number ${ctx.INT()!.text} is not valid`);
                return null;
            } else {
                return {type: "number", object: number};
            }
        }

        return null;
    }


    visitOperator(ctx: parser.OperatorContext): string | null {
        const rawText = ctx.text;
        if (rawText == "") {
            console.warn("Operator is empty");
            return null;
        }

        if (ctx.PLUS() || ctx.MINUS() || ctx.STAR() || ctx.SLASH()) {
            return rawText;
        }
        return null;
    }


    visitSeparator(ctx: parser.SeparatorContext): string | null {
        const rawText = ctx.text;
        if (rawText == "") {
            console.warn("Separator is empty");
            return null;
        }

        if (ctx.COMMA()) {
            return "COMMA";
        }

        if (ctx.TO()) {
            return "TO";
        }

        if (ctx.TOPLUS()) {
            return "TOPLUS";
        }

        if (ctx.DELAY()) {
            return "DELAY";
        }

        if (ctx.DELAYPLUS()) {
            return "DELAYPLUS";
        }

        if (ctx.DELAYMINUS()) {
            return "DELAYMINUS";
        }
        return null;
    }
}


/**
 * This class is used to keep track of the current path in the tree
 * It is used to compute the id of each element
 */
class HierarchicalContext {
    private path: number[] = [];

    enterGroup(index: number) {
        this.path.push(index);
    }

    leaveGroup() {
        this.path.pop();
    }

    getCurrentId(): string {
        return this.path.join('.');
    }

    getParentId(): string {
        return this.path.slice(0, this.path.length - 1).join('.');
    }
}
