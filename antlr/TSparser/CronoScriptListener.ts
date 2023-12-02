// Generated from CronoScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `CronoScriptParser`.
 */
export interface CronoScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CronoScriptParser.cronodile`.
	 * @param ctx the parse tree
	 */
	enterCronodile?: (ctx: CronodileContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.cronodile`.
	 * @param ctx the parse tree
	 */
	exitCronodile?: (ctx: CronodileContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.timeline`.
	 * @param ctx the parse tree
	 */
	enterTimeline?: (ctx: TimelineContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.timeline`.
	 * @param ctx the parse tree
	 */
	exitTimeline?: (ctx: TimelineContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.task`.
	 * @param ctx the parse tree
	 */
	enterTask?: (ctx: TaskContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.task`.
	 * @param ctx the parse tree
	 */
	exitTask?: (ctx: TaskContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.event`.
	 * @param ctx the parse tree
	 */
	enterEvent?: (ctx: EventContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.event`.
	 * @param ctx the parse tree
	 */
	exitEvent?: (ctx: EventContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.span`.
	 * @param ctx the parse tree
	 */
	enterSpan?: (ctx: SpanContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.span`.
	 * @param ctx the parse tree
	 */
	exitSpan?: (ctx: SpanContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.simpleDate`.
	 * @param ctx the parse tree
	 */
	enterSimpleDate?: (ctx: SimpleDateContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.simpleDate`.
	 * @param ctx the parse tree
	 */
	exitSimpleDate?: (ctx: SimpleDateContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.delayedDate`.
	 * @param ctx the parse tree
	 */
	enterDelayedDate?: (ctx: DelayedDateContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.delayedDate`.
	 * @param ctx the parse tree
	 */
	exitDelayedDate?: (ctx: DelayedDateContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.duration`.
	 * @param ctx the parse tree
	 */
	enterDuration?: (ctx: DurationContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.duration`.
	 * @param ctx the parse tree
	 */
	exitDuration?: (ctx: DurationContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.timeUnit`.
	 * @param ctx the parse tree
	 */
	enterTimeUnit?: (ctx: TimeUnitContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.timeUnit`.
	 * @param ctx the parse tree
	 */
	exitTimeUnit?: (ctx: TimeUnitContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.tag`.
	 * @param ctx the parse tree
	 */
	enterTag?: (ctx: TagContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.tag`.
	 * @param ctx the parse tree
	 */
	exitTag?: (ctx: TagContext) => void;
}

