import { CronoScriptVisitor } from "./antlr/TSparser/CronoScriptVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as parser from './antlr/TSparser/CronoScriptParser';
import * as model from './models/models';

export class CronoScriptVisitorImpl extends AbstractParseTreeVisitor<any> implements CronoScriptVisitor<any> {
    defaultResult() {
        console.warn("Default result called");
        return null;
    }

    visitCronodile(ctx: parser.CronodileContext): model.Cronodile {
        const cronodile: model.Cronodile = {};

        // Looking for global options
        const options: model.Option[] = [];
        ctx.option().forEach(option => {
            const optionObject = this.visitOption(option);
            if (optionObject) {
                options.push(optionObject);
            }
        });
        if (options.length > 0) {
            cronodile.options = options;
        }

        // Looking for global tags
        const tags: model.Tag[] = [];
        ctx.tag().forEach(tag => {
            const tagObject = this.visitTag(tag);
            if (tagObject) {
                tags.push(tagObject);
            }
        });
        if (tags.length > 0) {
            cronodile.tags = tags;
        }

        // Looking for events
        const events: model.Event[] = [];
        ctx.event().forEach(event => {
            const eventObject = this.visitEvent(event);
            if (eventObject) {
                events.push(eventObject);
            }
        });
        if (events.length > 0) {
            cronodile.events = events;
        }


        // Final result
        return cronodile
    }

    visitOption(ctx: parser.OptionContext): model.Option | null{
        const optionText = ctx.text;
        const optionToken = ctx.OPTION();
        if (!optionToken) {
            console.warn(`Option ${optionText} has no children`);
            return null;
        } else {
            const optionContent = optionToken.text.substring(1); // substring to remove the #
            // Unfortunatelly, ANTLR cannot access tokens nested inside a lexer rule
            // You have to manually split the text
            const parts = optionContent.split(":");
            const key = parts[0];
            const value = parts[1] || null;
            console.debug(`Option ${optionText} has key ${key} and value ${value}`);
            if (!value) {
                return {key};
            } else {
                return {key, value};
            }
        }
    }


    visitTag(ctx: parser.TagContext): model.Tag | null {
        const tagText = ctx.text;
        const tagToken = ctx.TAG();
        if (!tagToken) {
            console.warn(`Tag ${tagText} has no children`);
            return null;
        } else {
            const tagContent = tagToken.text.substring(1); // substring to remove the @
            console.debug(`Tag ${tagText} has content ${tagContent}`);
            return {value: tagContent};
        }
    }


    visitEvent(ctx: parser.EventContext): model.Event | null {
        
        // TODO: handle the case where the date is an ID ; browse the variable map to find the date
        if (ctx.ID()) {
            console.log("This date is an ID: " + ctx.ID()!.text);
            //return ctx.ID()!.text;
        }

        const dateContext = ctx.date();
        if (!dateContext) {
            console.warn("Event has no date");
            return null;
        } 
        const date = this.visitDate(dateContext);
        if (!date) {
            console.warn("Event has no date");
            return null;
        }

        const event: model.Event = {date};

        const label = ctx.string() ? this.visitString(ctx.string()!) : null;

        if (label) {
            event.label = label;
        }

        const options: model.Option[] = [];
        ctx.option().forEach(option => {
            const optionObject = this.visitOption(option);
            if (optionObject) {
                options.push(optionObject);
            }
        });

        if (options.length > 0) {
            event.options = options;
        }

        const tags: model.Tag[] = [];
        ctx.tag().forEach(tag => {
            const tagObject = this.visitTag(tag);
            if (tagObject) {
                tags.push(tagObject);
            }
        });

        if (tags.length > 0) {
            event.tags = tags;
        }

        return event;
    }


    visitDate(ctx: parser.DateContext): string | null {
        if (ctx.ID()) {
            return ctx.ID()!.text;
        } else if (ctx.simpleDate()) {
            return this.visitSimpleDate(ctx.simpleDate()!);
        } else if (ctx.delayedDate()) {
            return this.visitDelayedDate(ctx.delayedDate()!);
        }
        return null;
    }

    visitSimpleDate(ctx: parser.SimpleDateContext): string | null {
        return ctx.text;
    }

    visitDelayedDate(ctx: parser.DelayedDateContext): string | null {
        return ctx.text;
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










    /*
    visitDate(ctx: parser.DateContext) {

        if (ctx.ID()) {
            console.log("This date is an ID: " + ctx.ID()!.text);
            return ctx.ID()!.text;

        } else if (ctx.simpleDate()) {
            console.log("This date is a simple date: " + ctx.simpleDate()!.text);
            return this.visitSimpleDate(ctx.simpleDate()!);

        } else if (ctx.delayedDate()) {
            console.log("This date is a delayed date: " + ctx.delayedDate()!.text);
            return this.visitDelayedDate(ctx.delayedDate()!);
        }

        return this.visitChildren(ctx);
    }

    visitDelayedDate(ctx: parser.DelayedDateContext) {
        console.log("Visiting delayed date: " + ctx.text);
        return ctx.text;
    }

    visitSimpleDate(ctx: parser.SimpleDateContext) {
        console.log("Visiting simple date: " + ctx.text);
        return ctx.text;
    }
    */

}