// Generated from CronoScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CronodileContext } from "./CronoScriptParser";
import { GroupContext } from "./CronoScriptParser";
import { GroupBodyContext } from "./CronoScriptParser";
import { TagsContext } from "./CronoScriptParser";
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
import { HashContext } from "./CronoScriptParser";
import { AtContext } from "./CronoScriptParser";


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
	 * Enter a parse tree produced by `CronoScriptParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.groupBody`.
	 * @param ctx the parse tree
	 */
	enterGroupBody?: (ctx: GroupBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.groupBody`.
	 * @param ctx the parse tree
	 */
	exitGroupBody?: (ctx: GroupBodyContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.tags`.
	 * @param ctx the parse tree
	 */
	enterTags?: (ctx: TagsContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.tags`.
	 * @param ctx the parse tree
	 */
	exitTags?: (ctx: TagsContext) => void;

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
	 * Enter a parse tree produced by `CronoScriptParser.separator`.
	 * @param ctx the parse tree
	 */
	enterSeparator?: (ctx: SeparatorContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.separator`.
	 * @param ctx the parse tree
	 */
	exitSeparator?: (ctx: SeparatorContext) => void;

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
	 * Enter a parse tree produced by `CronoScriptParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;

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
	 * Enter a parse tree produced by `CronoScriptParser.varDec`.
	 * @param ctx the parse tree
	 */
	enterVarDec?: (ctx: VarDecContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.varDec`.
	 * @param ctx the parse tree
	 */
	exitVarDec?: (ctx: VarDecContext) => void;

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
	 * Enter a parse tree produced by `CronoScriptParser.hash`.
	 * @param ctx the parse tree
	 */
	enterHash?: (ctx: HashContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.hash`.
	 * @param ctx the parse tree
	 */
	exitHash?: (ctx: HashContext) => void;

	/**
	 * Enter a parse tree produced by `CronoScriptParser.at`.
	 * @param ctx the parse tree
	 */
	enterAt?: (ctx: AtContext) => void;
	/**
	 * Exit a parse tree produced by `CronoScriptParser.at`.
	 * @param ctx the parse tree
	 */
	exitAt?: (ctx: AtContext) => void;
}

