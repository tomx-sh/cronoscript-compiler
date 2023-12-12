// Generated from ../grammar/CronoScript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CronoScriptParser}.
 */
public interface CronoScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#cronodile}.
	 * @param ctx the parse tree
	 */
	void enterCronodile(CronoScriptParser.CronodileContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#cronodile}.
	 * @param ctx the parse tree
	 */
	void exitCronodile(CronoScriptParser.CronodileContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#group}.
	 * @param ctx the parse tree
	 */
	void enterGroup(CronoScriptParser.GroupContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#group}.
	 * @param ctx the parse tree
	 */
	void exitGroup(CronoScriptParser.GroupContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#groupBody}.
	 * @param ctx the parse tree
	 */
	void enterGroupBody(CronoScriptParser.GroupBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#groupBody}.
	 * @param ctx the parse tree
	 */
	void exitGroupBody(CronoScriptParser.GroupBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#tag}.
	 * @param ctx the parse tree
	 */
	void enterTag(CronoScriptParser.TagContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#tag}.
	 * @param ctx the parse tree
	 */
	void exitTag(CronoScriptParser.TagContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#element}.
	 * @param ctx the parse tree
	 */
	void enterElement(CronoScriptParser.ElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#element}.
	 * @param ctx the parse tree
	 */
	void exitElement(CronoScriptParser.ElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#separator}.
	 * @param ctx the parse tree
	 */
	void enterSeparator(CronoScriptParser.SeparatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#separator}.
	 * @param ctx the parse tree
	 */
	void exitSeparator(CronoScriptParser.SeparatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#date}.
	 * @param ctx the parse tree
	 */
	void enterDate(CronoScriptParser.DateContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#date}.
	 * @param ctx the parse tree
	 */
	void exitDate(CronoScriptParser.DateContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#duration}.
	 * @param ctx the parse tree
	 */
	void enterDuration(CronoScriptParser.DurationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#duration}.
	 * @param ctx the parse tree
	 */
	void exitDuration(CronoScriptParser.DurationContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#operator}.
	 * @param ctx the parse tree
	 */
	void enterOperator(CronoScriptParser.OperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#operator}.
	 * @param ctx the parse tree
	 */
	void exitOperator(CronoScriptParser.OperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#operand}.
	 * @param ctx the parse tree
	 */
	void enterOperand(CronoScriptParser.OperandContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#operand}.
	 * @param ctx the parse tree
	 */
	void exitOperand(CronoScriptParser.OperandContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(CronoScriptParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(CronoScriptParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#varDec}.
	 * @param ctx the parse tree
	 */
	void enterVarDec(CronoScriptParser.VarDecContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#varDec}.
	 * @param ctx the parse tree
	 */
	void exitVarDec(CronoScriptParser.VarDecContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(CronoScriptParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(CronoScriptParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(CronoScriptParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(CronoScriptParser.StringContext ctx);
}