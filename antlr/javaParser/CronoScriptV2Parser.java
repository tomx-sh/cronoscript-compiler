// Generated from ../grammar/CronoScriptV2.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CronoScriptV2Parser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, PLUS=27, TO=28, TOPLUS=29, DELAY=30, DELAYPLUS=31, 
		EQUALS=32, DATE=33, INT=34, ID=35, NEWLINE=36, TAB=37, LABEL=38, WS=39;
	public static final int
		RULE_planning = 0, RULE_line = 1, RULE_element = 2, RULE_milestone = 3, 
		RULE_task = 4, RULE_label = 5, RULE_dateVariableDeclaration = 6, RULE_spanVariableDeclaration = 7, 
		RULE_timeVariableDeclaration = 8, RULE_span = 9, RULE_date = 10, RULE_time = 11, 
		RULE_timeUnit = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"planning", "line", "element", "milestone", "task", "label", "dateVariableDeclaration", 
			"spanVariableDeclaration", "timeVariableDeclaration", "span", "date", 
			"time", "timeUnit"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'date'", "'span'", "'time'", "'s'", "'second'", 
			"'seconds'", "'min'", "'minute'", "'minutes'", "'h'", "'hour'", "'hours'", 
			"'d'", "'day'", "'days'", "'w'", "'week'", "'weeks'", "'m'", "'month'", 
			"'months'", "'y'", "'year'", "'years'", "'+'", "'>'", "'>+'", "'...'", 
			null, "'='", null, null, null, null, null, null, "' '"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "PLUS", "TO", "TOPLUS", "DELAY", "DELAYPLUS", "EQUALS", 
			"DATE", "INT", "ID", "NEWLINE", "TAB", "LABEL", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "CronoScriptV2.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CronoScriptV2Parser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PlanningContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CronoScriptV2Parser.EOF, 0); }
		public List<LineContext> line() {
			return getRuleContexts(LineContext.class);
		}
		public LineContext line(int i) {
			return getRuleContext(LineContext.class,i);
		}
		public List<DateVariableDeclarationContext> dateVariableDeclaration() {
			return getRuleContexts(DateVariableDeclarationContext.class);
		}
		public DateVariableDeclarationContext dateVariableDeclaration(int i) {
			return getRuleContext(DateVariableDeclarationContext.class,i);
		}
		public List<SpanVariableDeclarationContext> spanVariableDeclaration() {
			return getRuleContexts(SpanVariableDeclarationContext.class);
		}
		public SpanVariableDeclarationContext spanVariableDeclaration(int i) {
			return getRuleContext(SpanVariableDeclarationContext.class,i);
		}
		public List<TimeVariableDeclarationContext> timeVariableDeclaration() {
			return getRuleContexts(TimeVariableDeclarationContext.class);
		}
		public TimeVariableDeclarationContext timeVariableDeclaration(int i) {
			return getRuleContext(TimeVariableDeclarationContext.class,i);
		}
		public PlanningContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_planning; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterPlanning(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitPlanning(this);
		}
	}

	public final PlanningContext planning() throws RecognitionException {
		PlanningContext _localctx = new PlanningContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_planning);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274877907000L) != 0)) {
				{
				setState(30);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LABEL:
					{
					setState(26);
					line();
					}
					break;
				case T__2:
					{
					setState(27);
					dateVariableDeclaration();
					}
					break;
				case T__3:
					{
					setState(28);
					spanVariableDeclaration();
					}
					break;
				case T__4:
					{
					setState(29);
					timeVariableDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(34);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(35);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LineContext extends ParserRuleContext {
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(CronoScriptV2Parser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(CronoScriptV2Parser.NEWLINE, i);
		}
		public List<TerminalNode> TAB() { return getTokens(CronoScriptV2Parser.TAB); }
		public TerminalNode TAB(int i) {
			return getToken(CronoScriptV2Parser.TAB, i);
		}
		public LineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_line; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterLine(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitLine(this);
		}
	}

	public final LineContext line() throws RecognitionException {
		LineContext _localctx = new LineContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_line);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			label();
			setState(43); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(40);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==NEWLINE) {
						{
						setState(38);
						match(NEWLINE);
						setState(39);
						match(TAB);
						}
					}

					setState(42);
					element();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(45); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElementContext extends ParserRuleContext {
		public MilestoneContext milestone() {
			return getRuleContext(MilestoneContext.class,0);
		}
		public TaskContext task() {
			return getRuleContext(TaskContext.class,0);
		}
		public LineContext line() {
			return getRuleContext(LineContext.class,0);
		}
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterElement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitElement(this);
		}
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_element);
		try {
			setState(50);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				milestone();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(48);
				task();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(49);
				line();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MilestoneContext extends ParserRuleContext {
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public MilestoneContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_milestone; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterMilestone(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitMilestone(this);
		}
	}

	public final MilestoneContext milestone() throws RecognitionException {
		MilestoneContext _localctx = new MilestoneContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_milestone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(T__0);
			setState(53);
			date(0);
			setState(54);
			match(T__1);
			setState(55);
			label();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TaskContext extends ParserRuleContext {
		public SpanContext span() {
			return getRuleContext(SpanContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public TaskContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_task; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterTask(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitTask(this);
		}
	}

	public final TaskContext task() throws RecognitionException {
		TaskContext _localctx = new TaskContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_task);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			match(T__0);
			setState(58);
			span();
			setState(59);
			match(T__1);
			setState(60);
			label();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LabelContext extends ParserRuleContext {
		public TerminalNode LABEL() { return getToken(CronoScriptV2Parser.LABEL, 0); }
		public LabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_label; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterLabel(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitLabel(this);
		}
	}

	public final LabelContext label() throws RecognitionException {
		LabelContext _localctx = new LabelContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_label);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(LABEL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DateVariableDeclarationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptV2Parser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(CronoScriptV2Parser.EQUALS, 0); }
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
		}
		public DateVariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dateVariableDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterDateVariableDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitDateVariableDeclaration(this);
		}
	}

	public final DateVariableDeclarationContext dateVariableDeclaration() throws RecognitionException {
		DateVariableDeclarationContext _localctx = new DateVariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_dateVariableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			match(T__2);
			setState(65);
			match(ID);
			setState(66);
			match(EQUALS);
			setState(67);
			date(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SpanVariableDeclarationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptV2Parser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(CronoScriptV2Parser.EQUALS, 0); }
		public SpanContext span() {
			return getRuleContext(SpanContext.class,0);
		}
		public SpanVariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_spanVariableDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterSpanVariableDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitSpanVariableDeclaration(this);
		}
	}

	public final SpanVariableDeclarationContext spanVariableDeclaration() throws RecognitionException {
		SpanVariableDeclarationContext _localctx = new SpanVariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_spanVariableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(T__3);
			setState(70);
			match(ID);
			setState(71);
			match(EQUALS);
			setState(72);
			span();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TimeVariableDeclarationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptV2Parser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(CronoScriptV2Parser.EQUALS, 0); }
		public TimeContext time() {
			return getRuleContext(TimeContext.class,0);
		}
		public TimeVariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timeVariableDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterTimeVariableDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitTimeVariableDeclaration(this);
		}
	}

	public final TimeVariableDeclarationContext timeVariableDeclaration() throws RecognitionException {
		TimeVariableDeclarationContext _localctx = new TimeVariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_timeVariableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(T__4);
			setState(75);
			match(ID);
			setState(76);
			match(EQUALS);
			setState(77);
			time(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SpanContext extends ParserRuleContext {
		public List<DateContext> date() {
			return getRuleContexts(DateContext.class);
		}
		public DateContext date(int i) {
			return getRuleContext(DateContext.class,i);
		}
		public TerminalNode TO() { return getToken(CronoScriptV2Parser.TO, 0); }
		public TerminalNode TOPLUS() { return getToken(CronoScriptV2Parser.TOPLUS, 0); }
		public TimeContext time() {
			return getRuleContext(TimeContext.class,0);
		}
		public SpanContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_span; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterSpan(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitSpan(this);
		}
	}

	public final SpanContext span() throws RecognitionException {
		SpanContext _localctx = new SpanContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_span);
		try {
			setState(87);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(79);
				date(0);
				setState(80);
				match(TO);
				setState(81);
				date(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(83);
				date(0);
				setState(84);
				match(TOPLUS);
				setState(85);
				time(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DateContext extends ParserRuleContext {
		public TerminalNode DATE() { return getToken(CronoScriptV2Parser.DATE, 0); }
		public List<DateContext> date() {
			return getRuleContexts(DateContext.class);
		}
		public DateContext date(int i) {
			return getRuleContext(DateContext.class,i);
		}
		public TerminalNode DELAY() { return getToken(CronoScriptV2Parser.DELAY, 0); }
		public TerminalNode PLUS() { return getToken(CronoScriptV2Parser.PLUS, 0); }
		public TimeContext time() {
			return getRuleContext(TimeContext.class,0);
		}
		public TerminalNode DELAYPLUS() { return getToken(CronoScriptV2Parser.DELAYPLUS, 0); }
		public DateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_date; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterDate(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitDate(this);
		}
	}

	public final DateContext date() throws RecognitionException {
		return date(0);
	}

	private DateContext date(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		DateContext _localctx = new DateContext(_ctx, _parentState);
		DateContext _prevctx = _localctx;
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_date, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(90);
			match(DATE);
			}
			_ctx.stop = _input.LT(-1);
			setState(103);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(101);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
					case 1:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_date);
						setState(92);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(93);
						match(DELAY);
						setState(94);
						date(3);
						}
						break;
					case 2:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_date);
						setState(95);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(96);
						match(PLUS);
						setState(97);
						time(0);
						}
						break;
					case 3:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_date);
						setState(98);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(99);
						match(DELAYPLUS);
						setState(100);
						time(0);
						}
						break;
					}
					} 
				}
				setState(105);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TimeContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(CronoScriptV2Parser.INT, 0); }
		public TimeUnitContext timeUnit() {
			return getRuleContext(TimeUnitContext.class,0);
		}
		public List<TimeContext> time() {
			return getRuleContexts(TimeContext.class);
		}
		public TimeContext time(int i) {
			return getRuleContext(TimeContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(CronoScriptV2Parser.PLUS, 0); }
		public TimeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_time; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterTime(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitTime(this);
		}
	}

	public final TimeContext time() throws RecognitionException {
		return time(0);
	}

	private TimeContext time(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TimeContext _localctx = new TimeContext(_ctx, _parentState);
		TimeContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_time, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(107);
			match(INT);
			setState(108);
			timeUnit();
			}
			_ctx.stop = _input.LT(-1);
			setState(115);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TimeContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_time);
					setState(110);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(111);
					match(PLUS);
					setState(112);
					time(2);
					}
					} 
				}
				setState(117);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TimeUnitContext extends ParserRuleContext {
		public TimeUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timeUnit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).enterTimeUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptV2Listener ) ((CronoScriptV2Listener)listener).exitTimeUnit(this);
		}
	}

	public final TimeUnitContext timeUnit() throws RecognitionException {
		TimeUnitContext _localctx = new TimeUnitContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_timeUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 134217664L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 10:
			return date_sempred((DateContext)_localctx, predIndex);
		case 11:
			return time_sempred((TimeContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean date_sempred(DateContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 2);
		case 1:
			return precpred(_ctx, 3);
		case 2:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean time_sempred(TimeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\'y\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0005\u0000"+
		"\u001f\b\u0000\n\u0000\f\u0000\"\t\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0003\u0001)\b\u0001\u0001\u0001\u0004"+
		"\u0001,\b\u0001\u000b\u0001\f\u0001-\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0003\u00023\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003\tX\b\t\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0005\nf\b\n\n\n\f\ni\t\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0005\u000br\b\u000b\n\u000b"+
		"\f\u000bu\t\u000b\u0001\f\u0001\f\u0001\f\u0000\u0002\u0014\u0016\r\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0000\u0001"+
		"\u0001\u0000\u0006\u001ax\u0000 \u0001\u0000\u0000\u0000\u0002%\u0001"+
		"\u0000\u0000\u0000\u00042\u0001\u0000\u0000\u0000\u00064\u0001\u0000\u0000"+
		"\u0000\b9\u0001\u0000\u0000\u0000\n>\u0001\u0000\u0000\u0000\f@\u0001"+
		"\u0000\u0000\u0000\u000eE\u0001\u0000\u0000\u0000\u0010J\u0001\u0000\u0000"+
		"\u0000\u0012W\u0001\u0000\u0000\u0000\u0014Y\u0001\u0000\u0000\u0000\u0016"+
		"j\u0001\u0000\u0000\u0000\u0018v\u0001\u0000\u0000\u0000\u001a\u001f\u0003"+
		"\u0002\u0001\u0000\u001b\u001f\u0003\f\u0006\u0000\u001c\u001f\u0003\u000e"+
		"\u0007\u0000\u001d\u001f\u0003\u0010\b\u0000\u001e\u001a\u0001\u0000\u0000"+
		"\u0000\u001e\u001b\u0001\u0000\u0000\u0000\u001e\u001c\u0001\u0000\u0000"+
		"\u0000\u001e\u001d\u0001\u0000\u0000\u0000\u001f\"\u0001\u0000\u0000\u0000"+
		" \u001e\u0001\u0000\u0000\u0000 !\u0001\u0000\u0000\u0000!#\u0001\u0000"+
		"\u0000\u0000\" \u0001\u0000\u0000\u0000#$\u0005\u0000\u0000\u0001$\u0001"+
		"\u0001\u0000\u0000\u0000%+\u0003\n\u0005\u0000&\'\u0005$\u0000\u0000\'"+
		")\u0005%\u0000\u0000(&\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000"+
		")*\u0001\u0000\u0000\u0000*,\u0003\u0004\u0002\u0000+(\u0001\u0000\u0000"+
		"\u0000,-\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000-.\u0001\u0000"+
		"\u0000\u0000.\u0003\u0001\u0000\u0000\u0000/3\u0003\u0006\u0003\u0000"+
		"03\u0003\b\u0004\u000013\u0003\u0002\u0001\u00002/\u0001\u0000\u0000\u0000"+
		"20\u0001\u0000\u0000\u000021\u0001\u0000\u0000\u00003\u0005\u0001\u0000"+
		"\u0000\u000045\u0005\u0001\u0000\u000056\u0003\u0014\n\u000067\u0005\u0002"+
		"\u0000\u000078\u0003\n\u0005\u00008\u0007\u0001\u0000\u0000\u00009:\u0005"+
		"\u0001\u0000\u0000:;\u0003\u0012\t\u0000;<\u0005\u0002\u0000\u0000<=\u0003"+
		"\n\u0005\u0000=\t\u0001\u0000\u0000\u0000>?\u0005&\u0000\u0000?\u000b"+
		"\u0001\u0000\u0000\u0000@A\u0005\u0003\u0000\u0000AB\u0005#\u0000\u0000"+
		"BC\u0005 \u0000\u0000CD\u0003\u0014\n\u0000D\r\u0001\u0000\u0000\u0000"+
		"EF\u0005\u0004\u0000\u0000FG\u0005#\u0000\u0000GH\u0005 \u0000\u0000H"+
		"I\u0003\u0012\t\u0000I\u000f\u0001\u0000\u0000\u0000JK\u0005\u0005\u0000"+
		"\u0000KL\u0005#\u0000\u0000LM\u0005 \u0000\u0000MN\u0003\u0016\u000b\u0000"+
		"N\u0011\u0001\u0000\u0000\u0000OP\u0003\u0014\n\u0000PQ\u0005\u001c\u0000"+
		"\u0000QR\u0003\u0014\n\u0000RX\u0001\u0000\u0000\u0000ST\u0003\u0014\n"+
		"\u0000TU\u0005\u001d\u0000\u0000UV\u0003\u0016\u000b\u0000VX\u0001\u0000"+
		"\u0000\u0000WO\u0001\u0000\u0000\u0000WS\u0001\u0000\u0000\u0000X\u0013"+
		"\u0001\u0000\u0000\u0000YZ\u0006\n\uffff\uffff\u0000Z[\u0005!\u0000\u0000"+
		"[g\u0001\u0000\u0000\u0000\\]\n\u0002\u0000\u0000]^\u0005\u001e\u0000"+
		"\u0000^f\u0003\u0014\n\u0003_`\n\u0003\u0000\u0000`a\u0005\u001b\u0000"+
		"\u0000af\u0003\u0016\u000b\u0000bc\n\u0001\u0000\u0000cd\u0005\u001f\u0000"+
		"\u0000df\u0003\u0016\u000b\u0000e\\\u0001\u0000\u0000\u0000e_\u0001\u0000"+
		"\u0000\u0000eb\u0001\u0000\u0000\u0000fi\u0001\u0000\u0000\u0000ge\u0001"+
		"\u0000\u0000\u0000gh\u0001\u0000\u0000\u0000h\u0015\u0001\u0000\u0000"+
		"\u0000ig\u0001\u0000\u0000\u0000jk\u0006\u000b\uffff\uffff\u0000kl\u0005"+
		"\"\u0000\u0000lm\u0003\u0018\f\u0000ms\u0001\u0000\u0000\u0000no\n\u0001"+
		"\u0000\u0000op\u0005\u001b\u0000\u0000pr\u0003\u0016\u000b\u0002qn\u0001"+
		"\u0000\u0000\u0000ru\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000"+
		"st\u0001\u0000\u0000\u0000t\u0017\u0001\u0000\u0000\u0000us\u0001\u0000"+
		"\u0000\u0000vw\u0007\u0000\u0000\u0000w\u0019\u0001\u0000\u0000\u0000"+
		"\t\u001e (-2Wegs";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}