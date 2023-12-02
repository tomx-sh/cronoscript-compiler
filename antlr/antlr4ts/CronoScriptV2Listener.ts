// Generated from CronoScriptV2.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PlanningContext } from "./CronoScriptV2Parser";
import { LineContext } from "./CronoScriptV2Parser";
import { ElementContext } from "./CronoScriptV2Parser";
import { MilestoneContext } from "./CronoScriptV2Parser";
import { TaskContext } from "./CronoScriptV2Parser";
import { LabelContext } from "./CronoScriptV2Parser";
import { DateVariableDeclarationContext } from "./CronoScriptV2Parser";
import { SpanVariableDeclarationContext } from "./CronoScriptV2Parser";
import { TimeVariableDeclarationContext } from "./CronoScriptV2Parser";
import { SpanContext } from "./CronoScriptV2Parser";
import { DateContext } from "./CronoScriptV2Parser";
import { TimeContext } from "./CronoScriptV2Parser";
import { TimeUnitContext } from "./CronoScriptV2Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CronoScriptV2Parser`.
 */
export interface CronoScriptV2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.planning`.
	 * @param ctx the parse tree
	 */
	enterPlanning?: (ctx: PlanningContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.planning`.
	 * @param ctx the parse tree
	 */
	exitPlanning?: (ctx: PlanningContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.milestone`.
	 * @param ctx the parse tree
	 */
	enterMilestone?: (ctx: MilestoneContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.milestone`.
	 * @param ctx the parse tree
	 */
	exitMilestone?: (ctx: MilestoneContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.task`.
	 * @param ctx the parse tree
	 */
	enterTask?: (ctx: TaskContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.task`.
	 * @param ctx the parse tree
	 */
	exitTask?: (ctx: TaskContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.dateVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterDateVariableDeclaration?: (ctx: DateVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.dateVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitDateVariableDeclaration?: (ctx: DateVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.spanVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSpanVariableDeclaration?: (ctx: SpanVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.spanVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSpanVariableDeclaration?: (ctx: SpanVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.timeVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTimeVariableDeclaration?: (ctx: TimeVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.timeVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTimeVariableDeclaration?: (ctx: TimeVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.span`.
	 * @param ctx the parse tree
	 */
	enterSpan?: (ctx: SpanContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.span`.
	 * @param ctx the parse tree
	 */
	exitSpan?: (ctx: SpanContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptV2Parser.timeUnit`.
	 * @param ctx the parse tree
	 */
	enterTimeUnit?: (ctx: TimeUnitContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptV2Parser.timeUnit`.
	 * @param ctx the parse tree
	 */
	exitTimeUnit?: (ctx: TimeUnitContext) => void;
}

