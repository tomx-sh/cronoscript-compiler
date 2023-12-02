// Generated from ../grammar/CronoScriptV2.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CronoScriptV2Parser}.
 */
public interface CronoScriptV2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#planning}.
	 * @param ctx the parse tree
	 */
	void enterPlanning(CronoScriptV2Parser.PlanningContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#planning}.
	 * @param ctx the parse tree
	 */
	void exitPlanning(CronoScriptV2Parser.PlanningContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#line}.
	 * @param ctx the parse tree
	 */
	void enterLine(CronoScriptV2Parser.LineContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#line}.
	 * @param ctx the parse tree
	 */
	void exitLine(CronoScriptV2Parser.LineContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#element}.
	 * @param ctx the parse tree
	 */
	void enterElement(CronoScriptV2Parser.ElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#element}.
	 * @param ctx the parse tree
	 */
	void exitElement(CronoScriptV2Parser.ElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#milestone}.
	 * @param ctx the parse tree
	 */
	void enterMilestone(CronoScriptV2Parser.MilestoneContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#milestone}.
	 * @param ctx the parse tree
	 */
	void exitMilestone(CronoScriptV2Parser.MilestoneContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#task}.
	 * @param ctx the parse tree
	 */
	void enterTask(CronoScriptV2Parser.TaskContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#task}.
	 * @param ctx the parse tree
	 */
	void exitTask(CronoScriptV2Parser.TaskContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#label}.
	 * @param ctx the parse tree
	 */
	void enterLabel(CronoScriptV2Parser.LabelContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#label}.
	 * @param ctx the parse tree
	 */
	void exitLabel(CronoScriptV2Parser.LabelContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#dateVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterDateVariableDeclaration(CronoScriptV2Parser.DateVariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#dateVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitDateVariableDeclaration(CronoScriptV2Parser.DateVariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#spanVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterSpanVariableDeclaration(CronoScriptV2Parser.SpanVariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#spanVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitSpanVariableDeclaration(CronoScriptV2Parser.SpanVariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#timeVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterTimeVariableDeclaration(CronoScriptV2Parser.TimeVariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#timeVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitTimeVariableDeclaration(CronoScriptV2Parser.TimeVariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#span}.
	 * @param ctx the parse tree
	 */
	void enterSpan(CronoScriptV2Parser.SpanContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#span}.
	 * @param ctx the parse tree
	 */
	void exitSpan(CronoScriptV2Parser.SpanContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#date}.
	 * @param ctx the parse tree
	 */
	void enterDate(CronoScriptV2Parser.DateContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#date}.
	 * @param ctx the parse tree
	 */
	void exitDate(CronoScriptV2Parser.DateContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#time}.
	 * @param ctx the parse tree
	 */
	void enterTime(CronoScriptV2Parser.TimeContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#time}.
	 * @param ctx the parse tree
	 */
	void exitTime(CronoScriptV2Parser.TimeContext ctx);
	/**
	 * Enter a parse tree produced by {@link CronoScriptV2Parser#timeUnit}.
	 * @param ctx the parse tree
	 */
	void enterTimeUnit(CronoScriptV2Parser.TimeUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link CronoScriptV2Parser#timeUnit}.
	 * @param ctx the parse tree
	 */
	void exitTimeUnit(CronoScriptV2Parser.TimeUnitContext ctx);
}