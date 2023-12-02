import { CronoScriptVisitor } from "./antlr/TSparser/CronoScriptVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as parser from './antlr/TSparser/CronoScriptParser';

export class CronoScriptVisitorImpl extends AbstractParseTreeVisitor<any> implements CronoScriptVisitor<any> {
    defaultResult() {
        return null;
    }

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

}