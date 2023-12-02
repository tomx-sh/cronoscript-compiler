// Generated from CronoScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CronodileContext } from "./CronoScriptParser";
import { TimelineContext } from "./CronoScriptParser";
import { ElementContext } from "./CronoScriptParser";
import { TaskContext } from "./CronoScriptParser";
import { EventContext } from "./CronoScriptParser";
import { SpanContext } from "./CronoScriptParser";
import { DateContext } from "./CronoScriptParser";
import { SimpleDateContext } from "./CronoScriptParser";
import { DelayedDateContext } from "./CronoScriptParser";
import { DurationContext } from "./CronoScriptParser";
import { TimeUnitContext } from "./CronoScriptParser";
import { VariableDeclarationContext } from "./CronoScriptParser";
import { TypeContext } from "./CronoScriptParser";
import { ExpressionContext } from "./CronoScriptParser";
import { StringContext } from "./CronoScriptParser";
import { OptionContext } from "./CronoScriptParser";
import { TagContext } from "./CronoScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CronoScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CronoScriptVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CronoScriptParser.cronodile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCronodile?: (ctx: CronodileContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.timeline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeline?: (ctx: TimelineContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.task`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTask?: (ctx: TaskContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.event`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent?: (ctx: EventContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.span`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpan?: (ctx: SpanContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.simpleDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleDate?: (ctx: SimpleDateContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.delayedDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelayedDate?: (ctx: DelayedDateContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDuration?: (ctx: DurationContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.timeUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeUnit?: (ctx: TimeUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption?: (ctx: OptionContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;
}

