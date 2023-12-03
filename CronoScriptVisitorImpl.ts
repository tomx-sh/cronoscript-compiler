import { CronoScriptVisitor } from "./antlr/TSparser/CronoScriptVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as parser from './antlr/TSparser/CronoScriptParser';
import * as model from './models/models';

export class CronoScriptVisitorImpl extends AbstractParseTreeVisitor<any> implements CronoScriptVisitor<any> {
    defaultResult() {
        console.warn("Default result called");
        return null;
    }

    visitCronodile(ctx: parser.CronodileContext): model.Cronodile | null {
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