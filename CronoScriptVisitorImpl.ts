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

        // Find date
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

        // Initialize event
        const event: model.Event = {date};

        // Find label
        const label = ctx.string() ? this.visitString(ctx.string()!) : null;
        if (label) {
            event.label = label;
        }

        // Find options
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

        // Find tags
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


    visitDate(ctx: parser.DateContext): model.Date | null {
        if (ctx.ID()) {
            // TODO: handle the case where the date is an ID ; browse the variable map to find the date
            return null;
        } else if (ctx.simpleDate()) {
            return this.visitSimpleDate(ctx.simpleDate()!);
        } else if (ctx.delayedDate()) {
            return this.visitDelayedDate(ctx.delayedDate()!);
        }
        return null;
    }

    visitSimpleDate(ctx: parser.SimpleDateContext): model.Date | null {
        const dateString = ctx.text;
        if (dateString == "") {
            console.warn("Date is empty");
            return null;
        }
        
        // TODO: handle the case where the date is an ID ; browse the variable map to find the date
        if (ctx.ID()) {
            return null;
        }

        // Case where the date is of form 01/01/2023
        if (ctx.DATE()) {
            const dateText = ctx.DATE()!.text;
            const dateContent = dateText.substring(1, dateText.length - 1); // substring to remove the parenthesis
            return {originalDate: dateContent};
        }

        // TODO: handle dates operations
        /*
        // Case where the date is of form 01/01/2023 + 1 month or 01/01/2023 - 1 month
        if (ctx.DATE() && ctx.duration()) {

            // Case addition
            if (ctx.PLUS()) {
                const duration = this.visitDuration(ctx.duration()!);
                if (duration) {
                    return {originalDate: dateString, delayedDate: `${dateString} + ${duration}`};
                } else {
                    return null;
                }
            }
        }
        */

        return null;
    }

    visitDelayedDate(ctx: parser.DelayedDateContext): model.Date | null {
        // TODO: handle the case where the date is an ID ; browse the variable map to find the date
        const dateString = ctx.text;
        if (dateString == "") {
            console.warn("Date is empty");
            return null;
        }
        
        // Case where the date is of form simpleDate...simpleDate
        if (ctx.simpleDate().length == 2) {
            const startDate = this.visitSimpleDate(ctx.simpleDate(0)!);
            const endDate = this.visitSimpleDate(ctx.simpleDate(1)!);
            if (startDate && endDate) {
                return {originalDate: startDate.originalDate, delayedDate: endDate.originalDate};
            } else {
                return null;
            }
        }

        // Case where the date is of form simpleDate...+duration or simpleDate...-duration
        if (ctx.simpleDate().length == 1 && ctx.duration()) {
            const startDate = this.visitSimpleDate(ctx.simpleDate(0)!);
            const duration = this.visitDuration(ctx.duration()!);
            if (startDate && duration) {
                // TODO: handle dates operations
                if (ctx.DELAYPLUS()) {
                    return {originalDate: startDate.originalDate, delayedDate: `${startDate.originalDate} + ${duration}`};
                } else if (ctx.DELAYMINUS()) {
                    return {originalDate: startDate.originalDate, delayedDate: `${startDate.originalDate} - ${duration}`};
                }
            } else {
                return null;
            }
        }

        return null;
    }

    visitDuration(ctx: parser.DurationContext): string | null {
        const durationString = ctx.text;
        if (durationString == "") {
            console.warn("Duration is empty");
            return null;
        }
        // TODO: handle the case where the duration is an ID ; browse the variable map to find the duration
        // TODO: handle the times units
        return durationString;
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


}