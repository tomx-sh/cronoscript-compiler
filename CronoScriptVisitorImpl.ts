import { CronoScriptVisitor } from "./antlr/TSparser/CronoScriptVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as parser from './antlr/TSparser/CronoScriptParser';
import * as model from './models/models';
import { parseDuration } from "./models/utils";

export class CronoScriptVisitorImpl extends AbstractParseTreeVisitor<any> implements CronoScriptVisitor<any> {
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


        // Looking for lonely dates
        const dates: model.dateAtom[] = [];
        ctx.date().forEach((date, index) => {
            const dateObject = this.visitDate(date);
            if (dateObject) {
                dates.push({
                    id: `d0.${index}`,
                    order: index,
                    date: dateObject
                });
            }
        });
        cronodile.dateAtoms = dates;


        // Looking for groups
        const groups: model.Group[] = [];
        ctx.group().forEach((group, index) => {
            let groupObject = this.visitGroup(group);
            if (groupObject) {
                groupObject.id = `g0.${index}`;
                groupObject.order = index;
                groups.push(groupObject);
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
                    id: "no id", // Will be set by the caller
                    order: 0,    // Will be set by the caller
                    date: date
                    // TODO: implement delayedTo and linkedTo ? Of is it the job of the caller (element of group body) ?
                };
            }
        }
        
        return null;
    }


    visitGroup(ctx: parser.GroupContext): model.Group | null {
        const text = ctx.text;

        let result: model.Group = {
            id:     "no id", // Will be set by the caller
            order:  0,       // Will be set by the caller
            name:   "",
            // tags and childrenIds will be set later if needed
            // TODO: implement delayedTo and linkedTo ? Of is it the job of the caller (element of group body) ?
        };

        if (ctx.ID()) {
            // TODO: handle the case where the group is an ID ; browse the variable map to find the group
            console.debug(`Group ${ctx.ID()!.text} is an ID`);
            return null;
        }

        // Find name
        const name = ctx.string() ? this.visitString(ctx.string()!) : "";
        if (name) result.name = name;

        // Find tags
        const tags: model.Tag[] = [];
        ctx.tag().forEach(tag => {
            const tagObject = this.visitTag(tag);
            if (tagObject) {
                tags.push(tagObject);
            }
        });
        if (tags.length > 0) result.tags = tags;

        // Find children ids
        const groupBody = ctx.groupBody();
        if (!groupBody) {
            console.warn(`Group ${text} has no body`);
            return null;
        } else {
            const childrenIds = this.visitGroupBody(groupBody);
            if (childrenIds) {
                result.childrenIds = childrenIds;
            }
        }
        return result;
    }


    visitGroupBody(ctx: parser.GroupBodyContext): string[] | null {
        if (ctx.children?.length == 0) {
            console.warn(`Group body has no children`);
            return null;
        }

        ctx.children?.forEach((child, index) => {
            if (child instanceof parser.ElementContext) {
                const element = this.visitElement(child);
                // TODO: continue here
            }
        });
        return null;
    }


    visitElement(ctx: parser.ElementContext): model.LinkedElement | null {

        if (ctx.ID()) {
            // TODO: handle the case where the element is an ID ; browse the variable map to find the element
            console.debug(`Element ${ctx.ID()!.text} is an ID`);
            return null;
        }

        if (ctx.group()) {
            const group = this.visitGroup(ctx.group()!);
            if (group) {
                return {
                    id: "no id",  // Will be set by the caller ?
                    order: 0,     // Will be set by the caller ?
                    delayedTo: group.delayedTo,
                    linkedTo: group.linkedTo, // TODO: continue here
                };
            } else {
                return null;
            }
        }
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


    visitExpression(ctx: parser.ExpressionContext): { type: "dateAtom" | "duration" | "number", object: model.dateAtom | model.Duration | number} | null {
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


    visitOperand(ctx: parser.OperandContext): {type: "dateAtom" | "duration" | "number", object: model.dateAtom | model.Duration | number} | null {
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

}