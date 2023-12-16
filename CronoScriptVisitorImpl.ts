import { CronoScriptVisitor } from "./antlr/TSparser/CronoScriptVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as parser from './antlr/TSparser/CronoScriptParser';
import * as model from './models/models';
import { parseDuration } from "./models/utils";

export class CronoScriptVisitorImpl extends AbstractParseTreeVisitor<any> implements CronoScriptVisitor<any> {

    private hierarchicalContext = new HierarchicalContext();

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
        });
        if (tags.length > 0) cronodile.tags = tags;


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
            const symbol =  tagToken.text[0];
            const tagContent = tagToken.text.substring(1); // substring to remove the #
            const parts = tagContent.split(":");
            const key = parts[0];
            const value = parts[1] || null;
            console.debug(`Tag ${tagText} has key ${key} and value ${value}`);
            if (!value) {
                return {symbol, key};
            } else {
                return {symbol, key, value};
            }
        }
    }


    visitDate(ctx: parser.DateContext): model.dateAtom | null {
        const dateText = ctx.text;
        console.debug(`Computing date: ${dateText}`);

        if (ctx.ID()) {
            console.debug(`Date ${dateText} is an ID`);
            // TODO: handle the case where the date is an ID ; browse the variable map to find the date
            return null;
        }
        
        if (ctx.DATE()) {
            console.debug(`Date ${dateText} is a literal date`);
            const dateContent = dateText.substring(1, dateText.length - 1); // substring to remove the single quotes
            const date = new Date(dateContent); // TODO: implement a better date parser

            if (isNaN(date.getTime())) {
                console.warn(`Date ${dateText} is not valid`);
                return null;
            } else {
                return {
                    id: this.hierarchicalContext.getCurrentId(),
                    order: 0,    // Will be set by the caller
                    date: date
                };
            }
        }
        
        return null;
    }

    visitGroup(ctx: parser.GroupContext)
        :{
            mainGroup: model.Group,
            children?: ({type: "dateAtom", object: model.dateAtom} | {type: "group", object: model.Group})[]
         }
        | null 
    {
        const text = ctx.text;

        let mainGroup: model.Group = {
            id:     this.hierarchicalContext.getCurrentId(),
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
        const tags: model.Tag[] = [];
        ctx.tag().forEach(tag => {
            const tagObject = this.visitTag(tag);
            if (tagObject) {
                tags.push(tagObject);
            }
        });
        if (tags.length > 0) mainGroup.tags = tags;


        // Process direct children

        const groupBody = ctx.groupBody();
        if (!groupBody) {
            console.warn(`Group ${text} has no body`);
            return {mainGroup, children: undefined};
        }

        let children = this.visitGroupBody(groupBody); // We will modify this
        if (!children) {
            console.warn(`Group ${text} has no valid children`);
            return {mainGroup, children: undefined};
        }

        // Set `delayedTo` when there's a DELAY `...` separator
        children.forEach((child, index) => {
            if (child.type == "separator" && child.object == "DELAY") {
                const left =  children![index - 1];
                const right = children![index + 1];
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
        children.forEach((child, index) => {
            if (child.type == "separator" && (child.object == "DELAYPLUS" || child.object == "DELAYMINUS")) {
                const left =  children![index - 1];
                const right = children![index + 1];
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

                    this.hierarchicalContext.enterGroup(index);
                    const dateAtom: model.dateAtom = {
                        //id: (left.object as model.dateAtom | model.Group).id + ".delay",
                        id: this.hierarchicalContext.getCurrentId(),
                        order: 0,           // Will be set later
                        date: delayDate
                    };
                    this.hierarchicalContext.leaveGroup();

                    // Replace the duration by the dateAtom
                    children![index + 1] = {type: "dateAtom", object: dateAtom};

                    // Set the delayedTo property
                    (left.object as model.dateAtom | model.Group).delayedTo = dateAtom.id;
                } else {
                    console.warn(`Group ${text} has a separator '...+' or '...-' at an invalid position`);
                }
            }
        });

        // Set `linkedTo` when there's a TO `->` separator
        children.forEach((child, index) => {
            if (child.type == "separator" && child.object == "TO") {
                const left = children![index - 1];
                const right = children![index + 1];
                const compatibleObjects = ["dateAtom", "group"];
                if (left && right && compatibleObjects.includes(left.type) && compatibleObjects.includes(right.type)) {
                    const leftObject =  left.object as model.dateAtom | model.Group;
                    const rightObject = right.object as model.dateAtom | model.Group;
                    leftObject.linkedTo = rightObject.id;
                } else {
                    console.warn(`Group ${text} has a separator '->' at an invalid position`);
                }
            }
        });

        // Set `linkedTo` when there's a TOPLUS `->+` or separator (there's no `->-` separator)
        children.forEach((child, index) => {
            if (child.type == "separator" && child.object == "TOPLUS") {
                const left = children![index - 1];
                const right = children![index + 1];
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
                        id: this.hierarchicalContext.getCurrentId(),
                        order: 0,           // Will be set later
                        date: linkedDate
                    };
                    this.hierarchicalContext.leaveGroup();

                    // Replace the duration by the dateAtom
                    children![index + 1] = {type: "dateAtom", object: dateAtom};

                    // Set the linkedTo property
                    (left.object as model.dateAtom | model.Group).linkedTo = dateAtom.id;
                }
            }
        });


        // Remove separators
        children = children.filter(child => child.type != "separator");

        // Set childrenIds
        const childrenIds = children.map(child => (child.object as model.dateAtom | model.Group).id);
        mainGroup.childrenIds = childrenIds;

        // Set orders
        children.forEach((child, index) => {
            (child.object as model.dateAtom | model.Group).order = index;
        });

        // Flatten the children array
        // Get grandchildren
        const grandchildren: ({type: "dateAtom", object: model.dateAtom} | {type: "group", object: model.Group})[] = [];
        children.forEach(child => {
            if (child.type == "group" && child.children) {
                child.children.forEach(grandchild => {
                    grandchildren.push(grandchild);
                });
            }
        });
        // Append grandchildren to children
        children = children.concat(grandchildren);

        // Parse children to the right return type
        const childrenResult = children.map(child => {
            if (child.type == "dateAtom") {
                return {type: "dateAtom", object: child.object as model.dateAtom};
            } else if (child.type == "group") {
                return {type: "group", object: child.object as model.Group};
            } else {
                console.warn(`Child ${child} is not valid`);
                return null;
            }
        }).filter(child => child != null) as ({type: "dateAtom", object: model.dateAtom} | {type: "group", object: model.Group})[];

        return {mainGroup, children: childrenResult};
    }





    visitGroupBody(ctx: parser.GroupBodyContext)
        : ({type: "dateAtom",  object: model.dateAtom}
        |  {type: "duration",  object: model.Duration}
        |  {type: "group",     object: model.Group, children?: ({type: "dateAtom", object: model.dateAtom} | {type: "group", object: model.Group})[]}
        |  {type: "separator", object:string})[]
        | null
    {
        if (ctx.children?.length == 0) {
            console.warn(`Group body has no children`);
            return null;
        }

        // This array will contain the children of the group and will be returned
        const children: ({type: "dateAtom",  object: model.dateAtom}
                        |{type: "group",     object: model.Group, children?: ({type: "dateAtom", object: model.dateAtom} | {type: "group", object: model.Group})[]}
                        |{type: "duration",  object: model.Duration}
                        |{type: "separator", object:string})[] = [];

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

                if (element) {

                    if (element.type == "group") {
                        const group = element.object;
                        group.order = indexWithoutSeparators;
                        const groupChildren = element.children;
                        children.push({type: "group", object: group, children: groupChildren});
                        indexWithoutSeparators++;

                    } else if (element.type == "dateAtom") {
                        const dateAtom = element.object;
                        dateAtom.order = indexWithoutSeparators;
                        children.push({type: "dateAtom", object: dateAtom});
                        indexWithoutSeparators++;

                    } else if (element.type == "duration") {
                        const duration = element.object;
                        children.push({type: "duration", object: duration});

                    } else if (element.type == "number") {
                        console.warn(`Number ${child.text} is not valid inside a group`);

                    } else {
                        console.warn(`Element ${child.text} is not valid`);
                    }
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
        : {type: "group", object: model.Group, children?: ({type: "dateAtom", object: model.dateAtom} | {type: "group", object: model.Group})[]}
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

        if (ctx.operand()) {
            const operand = this.visitOperand(ctx.operand()!);
            if (operand) {
                return operand;
            } else {
                return null;
            }
        }

        if (ctx.operator()) {
            const operator = this.visitOperator(ctx.operator()!);
            if (!operator) {
                console.warn(`Operator ${ctx.operator()!.text} is not valid`);
                return null;
            }
            const left =  this.visitExpression(ctx.expression(0)!);
            const right = this.visitExpression(ctx.expression(1)!);

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
                const leftObject = left.object as model.dateAtom;
                const leftDate = leftObject.date;
                const rightObject = right.object as model.Duration;
                const rightNumber = rightObject.millis;
                let result: model.dateAtom = {
                    id: "no id",        // Will be set by the caller
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
}
