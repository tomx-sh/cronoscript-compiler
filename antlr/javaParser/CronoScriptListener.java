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
	 * Enter a parse tree produced by {@link CronoScriptParser#milestone}.
	 * @param ctx the parse tree
	 */
	void enterMilestone(CronoScriptParser.MilestoneContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#milestone}.
	 * @param ctx the parse tree
	 */
	void exitMilestone(CronoScriptParser.MilestoneContext ctx);
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
	 * Enter a parse tree produced by {@link CronoScriptParser#label}.
	 * @param ctx the parse tree
	 */
	void enterLabel(CronoScriptParser.LabelContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptParser#label}.
	 * @param ctx the parse tree
	 */
	void exitLabel(CronoScriptParser.LabelContext ctx);
}