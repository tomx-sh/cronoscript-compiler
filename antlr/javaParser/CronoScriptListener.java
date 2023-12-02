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
	 * Enter a parse tree produced by {@link CronoScriptParser#timeline}.
	 * @param ctx the parse tree
	 */
	void enterTimeline(CronoScriptParser.TimelineContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#timeline}.
	 * @param ctx the parse tree
	 */
	void exitTimeline(CronoScriptParser.TimelineContext ctx);
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
	 * Enter a parse tree produced by {@link CronoScriptParser#task}.
	 * @param ctx the parse tree
	 */
	void enterTask(CronoScriptParser.TaskContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#task}.
	 * @param ctx the parse tree
	 */
	void exitTask(CronoScriptParser.TaskContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#event}.
	 * @param ctx the parse tree
	 */
	void enterEvent(CronoScriptParser.EventContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#event}.
	 * @param ctx the parse tree
	 */
	void exitEvent(CronoScriptParser.EventContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#span}.
	 * @param ctx the parse tree
	 */
	void enterSpan(CronoScriptParser.SpanContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#span}.
	 * @param ctx the parse tree
	 */
	void exitSpan(CronoScriptParser.SpanContext ctx);
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
	 * Enter a parse tree produced by {@link CronoScriptParser#simpleDate}.
	 * @param ctx the parse tree
	 */
	void enterSimpleDate(CronoScriptParser.SimpleDateContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#simpleDate}.
	 * @param ctx the parse tree
	 */
	void exitSimpleDate(CronoScriptParser.SimpleDateContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#delayedDate}.
	 * @param ctx the parse tree
	 */
	void enterDelayedDate(CronoScriptParser.DelayedDateContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#delayedDate}.
	 * @param ctx the parse tree
	 */
	void exitDelayedDate(CronoScriptParser.DelayedDateContext ctx);
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
	 * Enter a parse tree produced by {@link CronoScriptParser#timeUnit}.
	 * @param ctx the parse tree
	 */
	void enterTimeUnit(CronoScriptParser.TimeUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#timeUnit}.
	 * @param ctx the parse tree
	 */
	void exitTimeUnit(CronoScriptParser.TimeUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(CronoScriptParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(CronoScriptParser.VariableDeclarationContext ctx);
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
	 * Enter a parse tree produced by {@link CronoScriptParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(CronoScriptParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(CronoScriptParser.StringContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptParser#option}.
	 * @param ctx the parse tree
	 */
	void enterOption(CronoScriptParser.OptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#option}.
	 * @param ctx the parse tree
	 */
	void exitOption(CronoScriptParser.OptionContext ctx);
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
}