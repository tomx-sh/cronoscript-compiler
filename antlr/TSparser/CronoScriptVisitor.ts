// Generated from CronoScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CronodileContext } from "./CronoScriptParser";
import { GroupContext } from "./CronoScriptParser";
import { GroupBodyContext } from "./CronoScriptParser";
import { TagContext } from "./CronoScriptParser";
import { ElementContext } from "./CronoScriptParser";
import { SeparatorContext } from "./CronoScriptParser";
import { DateContext } from "./CronoScriptParser";
import { DurationContext } from "./CronoScriptParser";
import { OperatorContext } from "./CronoScriptParser";
import { OperandContext } from "./CronoScriptParser";
import { ExpressionContext } from "./CronoScriptParser";
import { VarDecContext } from "./CronoScriptParser";
import { TypeContext } from "./CronoScriptParser";
import { StringContext } from "./CronoScriptParser";


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
	 * Visit a parse tree produced by `CronoScriptParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.groupBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupBody?: (ctx: GroupBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.separator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeparator?: (ctx: SeparatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDuration?: (ctx: DurationContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperand?: (ctx: OperandContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.varDec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDec?: (ctx: VarDecContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CronoScriptParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
}

