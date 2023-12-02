// Generated from ../grammar/CronoScript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CronoScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, PLUS=27, MINUS=28, TO=29, TOPLUS=30, DELAY=31, DELAYPLUS=32, 
		DELAYMINUS=33, EQUALS=34, MULT=35, DIV=36, STRING_KW=37, DATE_KW=38, SPAN_KW=39, 
		DURATION_KW=40, EVENT_KW=41, TASK_KW=42, TIMELINE_KW=43, OPTION=44, TAG=45, 
		OPTION_KEY=46, ID=47, INT=48, DATE=49, STRING=50, COMMENT=51, WS=52;
	public static final int
		RULE_cronodile = 0, RULE_timeline = 1, RULE_element = 2, RULE_task = 3, 
		RULE_event = 4, RULE_span = 5, RULE_date = 6, RULE_simpleDate = 7, RULE_delayedDate = 8, 
		RULE_duration = 9, RULE_timeUnit = 10, RULE_variableDeclaration = 11, 
		RULE_type = 12, RULE_expression = 13, RULE_label = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"cronodile", "timeline", "element", "task", "event", "span", "date", 
			"simpleDate", "delayedDate", "duration", "timeUnit", "variableDeclaration", 
			"type", "expression", "label"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'['", "','", "']'", "'('", "')'", "'s'", "'second'", "'seconds'", 
			"'min'", "'minute'", "'minutes'", "'h'", "'hour'", "'hours'", "'d'", 
			"'day'", "'days'", "'w'", "'week'", "'weeks'", "'m'", "'month'", "'months'", 
			"'y'", "'year'", "'years'", "'+'", "'-'", "'>'", "'>+'", "'...'", null, 
			null, "'='", "'*'", "'/'", "'string'", "'date'", "'span'", "'duration'", 
			"'event'", "'task'", "'timeline'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "PLUS", "MINUS", "TO", "TOPLUS", "DELAY", "DELAYPLUS", 
			"DELAYMINUS", "EQUALS", "MULT", "DIV", "STRING_KW", "DATE_KW", "SPAN_KW", 
			"DURATION_KW", "EVENT_KW", "TASK_KW", "TIMELINE_KW", "OPTION", "TAG", 
			"OPTION_KEY", "ID", "INT", "DATE", "STRING", "COMMENT", "WS"
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
	public String getGrammarFileName() { return "CronoScript.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CronoScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CronodileContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CronoScriptParser.EOF, 0); }
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public List<TimelineContext> timeline() {
			return getRuleContexts(TimelineContext.class);
		}
		public TimelineContext timeline(int i) {
			return getRuleContext(TimelineContext.class,i);
		}
		public List<TaskContext> task() {
			return getRuleContexts(TaskContext.class);
		}
		public TaskContext task(int i) {
			return getRuleContext(TaskContext.class,i);
		}
		public List<EventContext> event() {
			return getRuleContexts(EventContext.class);
		}
		public EventContext event(int i) {
			return getRuleContext(EventContext.class,i);
		}
		public CronodileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cronodile; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterCronodile(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitCronodile(this);
		}
	}

	public final CronodileContext cronodile() throws RecognitionException {
		CronodileContext _localctx = new CronodileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_cronodile);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1284092142288914L) != 0)) {
				{
				setState(34);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(30);
					variableDeclaration();
					}
					break;
				case 2:
					{
					setState(31);
					timeline();
					}
					break;
				case 3:
					{
					setState(32);
					task();
					}
					break;
				case 4:
					{
					setState(33);
					event();
					}
					break;
				}
				}
				setState(38);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(39);
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
	public static class TimelineContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<TerminalNode> OPTION() { return getTokens(CronoScriptParser.OPTION); }
		public TerminalNode OPTION(int i) {
			return getToken(CronoScriptParser.OPTION, i);
		}
		public List<TerminalNode> TAG() { return getTokens(CronoScriptParser.TAG); }
		public TerminalNode TAG(int i) {
			return getToken(CronoScriptParser.TAG, i);
		}
		public TimelineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_timeline; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterTimeline(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitTimeline(this);
		}
	}

	public final TimelineContext timeline() throws RecognitionException {
		TimelineContext _localctx = new TimelineContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_timeline);
		int _la;
		try {
			setState(63);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(41);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ID || _la==STRING) {
					{
					setState(42);
					label();
					}
				}

				setState(45);
				match(T__0);
				setState(54);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1266637395197970L) != 0)) {
					{
					setState(46);
					element();
					setState(51);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__1) {
						{
						{
						setState(47);
						match(T__1);
						setState(48);
						element();
						}
						}
						setState(53);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(56);
				match(T__2);
				setState(60);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==OPTION || _la==TAG) {
					{
					{
					setState(57);
					_la = _input.LA(1);
					if ( !(_la==OPTION || _la==TAG) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					setState(62);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
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
	public static class ElementContext extends ParserRuleContext {
		public TimelineContext timeline() {
			return getRuleContext(TimelineContext.class,0);
		}
		public TaskContext task() {
			return getRuleContext(TaskContext.class,0);
		}
		public EventContext event() {
			return getRuleContext(EventContext.class,0);
		}
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterElement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitElement(this);
		}
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_element);
		try {
			setState(68);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(65);
				timeline();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(66);
				task();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(67);
				event();
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
	public static class TaskContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public SpanContext span() {
			return getRuleContext(SpanContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public List<TerminalNode> OPTION() { return getTokens(CronoScriptParser.OPTION); }
		public TerminalNode OPTION(int i) {
			return getToken(CronoScriptParser.OPTION, i);
		}
		public List<TerminalNode> TAG() { return getTokens(CronoScriptParser.TAG); }
		public TerminalNode TAG(int i) {
			return getToken(CronoScriptParser.TAG, i);
		}
		public TaskContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_task; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterTask(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitTask(this);
		}
	}

	public final TaskContext task() throws RecognitionException {
		TaskContext _localctx = new TaskContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_task);
		int _la;
		try {
			setState(83);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(70);
				match(ID);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(71);
				match(T__3);
				setState(72);
				span();
				setState(73);
				match(T__4);
				setState(75);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
				case 1:
					{
					setState(74);
					label();
					}
					break;
				}
				setState(80);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==OPTION || _la==TAG) {
					{
					{
					setState(77);
					_la = _input.LA(1);
					if ( !(_la==OPTION || _la==TAG) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					setState(82);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class EventContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public List<TerminalNode> OPTION() { return getTokens(CronoScriptParser.OPTION); }
		public TerminalNode OPTION(int i) {
			return getToken(CronoScriptParser.OPTION, i);
		}
		public List<TerminalNode> TAG() { return getTokens(CronoScriptParser.TAG); }
		public TerminalNode TAG(int i) {
			return getToken(CronoScriptParser.TAG, i);
		}
		public EventContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_event; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterEvent(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitEvent(this);
		}
	}

	public final EventContext event() throws RecognitionException {
		EventContext _localctx = new EventContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_event);
		int _la;
		try {
			setState(98);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(85);
				match(ID);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(86);
				match(T__3);
				setState(87);
				date();
				setState(88);
				match(T__4);
				setState(90);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
				case 1:
					{
					setState(89);
					label();
					}
					break;
				}
				setState(95);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==OPTION || _la==TAG) {
					{
					{
					setState(92);
					_la = _input.LA(1);
					if ( !(_la==OPTION || _la==TAG) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					setState(97);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public List<DateContext> date() {
			return getRuleContexts(DateContext.class);
		}
		public DateContext date(int i) {
			return getRuleContext(DateContext.class,i);
		}
		public TerminalNode TO() { return getToken(CronoScriptParser.TO, 0); }
		public TerminalNode TOPLUS() { return getToken(CronoScriptParser.TOPLUS, 0); }
		public DurationContext duration() {
			return getRuleContext(DurationContext.class,0);
		}
		public SpanContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_span; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterSpan(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitSpan(this);
		}
	}

	public final SpanContext span() throws RecognitionException {
		SpanContext _localctx = new SpanContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_span);
		try {
			setState(109);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(100);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(101);
				date();
				setState(102);
				match(TO);
				setState(103);
				date();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(105);
				date();
				setState(106);
				match(TOPLUS);
				setState(107);
				duration(0);
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
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public SimpleDateContext simpleDate() {
			return getRuleContext(SimpleDateContext.class,0);
		}
		public DelayedDateContext delayedDate() {
			return getRuleContext(DelayedDateContext.class,0);
		}
		public DateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_date; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterDate(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitDate(this);
		}
	}

	public final DateContext date() throws RecognitionException {
		DateContext _localctx = new DateContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_date);
		try {
			setState(114);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(111);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(112);
				simpleDate(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(113);
				delayedDate();
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
	public static class SimpleDateContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public TerminalNode DATE() { return getToken(CronoScriptParser.DATE, 0); }
		public SimpleDateContext simpleDate() {
			return getRuleContext(SimpleDateContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(CronoScriptParser.PLUS, 0); }
		public DurationContext duration() {
			return getRuleContext(DurationContext.class,0);
		}
		public TerminalNode MINUS() { return getToken(CronoScriptParser.MINUS, 0); }
		public SimpleDateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleDate; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterSimpleDate(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitSimpleDate(this);
		}
	}

	public final SimpleDateContext simpleDate() throws RecognitionException {
		return simpleDate(0);
	}

	private SimpleDateContext simpleDate(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SimpleDateContext _localctx = new SimpleDateContext(_ctx, _parentState);
		SimpleDateContext _prevctx = _localctx;
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_simpleDate, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(117);
				match(ID);
				}
				break;
			case DATE:
				{
				setState(118);
				match(DATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(129);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(127);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
					case 1:
						{
						_localctx = new SimpleDateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_simpleDate);
						setState(121);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(122);
						match(PLUS);
						setState(123);
						duration(0);
						}
						break;
					case 2:
						{
						_localctx = new SimpleDateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_simpleDate);
						setState(124);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(125);
						match(MINUS);
						setState(126);
						duration(0);
						}
						break;
					}
					} 
				}
				setState(131);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
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
	public static class DelayedDateContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public List<SimpleDateContext> simpleDate() {
			return getRuleContexts(SimpleDateContext.class);
		}
		public SimpleDateContext simpleDate(int i) {
			return getRuleContext(SimpleDateContext.class,i);
		}
		public TerminalNode DELAY() { return getToken(CronoScriptParser.DELAY, 0); }
		public TerminalNode DELAYPLUS() { return getToken(CronoScriptParser.DELAYPLUS, 0); }
		public DurationContext duration() {
			return getRuleContext(DurationContext.class,0);
		}
		public TerminalNode DELAYMINUS() { return getToken(CronoScriptParser.DELAYMINUS, 0); }
		public DelayedDateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_delayedDate; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterDelayedDate(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitDelayedDate(this);
		}
	}

	public final DelayedDateContext delayedDate() throws RecognitionException {
		DelayedDateContext _localctx = new DelayedDateContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_delayedDate);
		try {
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(132);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(133);
				simpleDate(0);
				setState(134);
				match(DELAY);
				setState(135);
				simpleDate(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(137);
				simpleDate(0);
				setState(138);
				match(DELAYPLUS);
				setState(139);
				duration(0);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(141);
				simpleDate(0);
				setState(142);
				match(DELAYMINUS);
				setState(143);
				duration(0);
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
	public static class DurationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public TerminalNode INT() { return getToken(CronoScriptParser.INT, 0); }
		public TimeUnitContext timeUnit() {
			return getRuleContext(TimeUnitContext.class,0);
		}
		public TerminalNode MULT() { return getToken(CronoScriptParser.MULT, 0); }
		public List<DurationContext> duration() {
			return getRuleContexts(DurationContext.class);
		}
		public DurationContext duration(int i) {
			return getRuleContext(DurationContext.class,i);
		}
		public List<DateContext> date() {
			return getRuleContexts(DateContext.class);
		}
		public DateContext date(int i) {
			return getRuleContext(DateContext.class,i);
		}
		public TerminalNode MINUS() { return getToken(CronoScriptParser.MINUS, 0); }
		public TerminalNode PLUS() { return getToken(CronoScriptParser.PLUS, 0); }
		public TerminalNode DIV() { return getToken(CronoScriptParser.DIV, 0); }
		public DurationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_duration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterDuration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitDuration(this);
		}
	}

	public final DurationContext duration() throws RecognitionException {
		return duration(0);
	}

	private DurationContext duration(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		DurationContext _localctx = new DurationContext(_ctx, _parentState);
		DurationContext _prevctx = _localctx;
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_duration, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(148);
				match(ID);
				}
				break;
			case 2:
				{
				setState(149);
				match(INT);
				setState(150);
				timeUnit();
				}
				break;
			case 3:
				{
				setState(151);
				match(INT);
				setState(152);
				match(MULT);
				setState(153);
				duration(5);
				}
				break;
			case 4:
				{
				setState(154);
				date();
				setState(155);
				match(MINUS);
				setState(156);
				date();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(174);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(172);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
					case 1:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(160);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(161);
						match(PLUS);
						setState(162);
						duration(4);
						}
						break;
					case 2:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(163);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(164);
						match(MINUS);
						setState(165);
						duration(3);
						}
						break;
					case 3:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(166);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(167);
						match(MULT);
						setState(168);
						match(INT);
						}
						break;
					case 4:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(169);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(170);
						match(DIV);
						setState(171);
						match(INT);
						}
						break;
					}
					} 
				}
				setState(176);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
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
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterTimeUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitTimeUnit(this);
		}
	}

	public final TimeUnitContext timeUnit() throws RecognitionException {
		TimeUnitContext _localctx = new TimeUnitContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_timeUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(177);
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

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(CronoScriptParser.EQUALS, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterVariableDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitVariableDeclaration(this);
		}
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			type();
			setState(180);
			match(ID);
			setState(181);
			match(EQUALS);
			setState(182);
			expression();
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
	public static class TypeContext extends ParserRuleContext {
		public TerminalNode STRING_KW() { return getToken(CronoScriptParser.STRING_KW, 0); }
		public TerminalNode DATE_KW() { return getToken(CronoScriptParser.DATE_KW, 0); }
		public TerminalNode SPAN_KW() { return getToken(CronoScriptParser.SPAN_KW, 0); }
		public TerminalNode DURATION_KW() { return getToken(CronoScriptParser.DURATION_KW, 0); }
		public TerminalNode EVENT_KW() { return getToken(CronoScriptParser.EVENT_KW, 0); }
		public TerminalNode TASK_KW() { return getToken(CronoScriptParser.TASK_KW, 0); }
		public TerminalNode TIMELINE_KW() { return getToken(CronoScriptParser.TIMELINE_KW, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitType(this);
		}
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 17454747090944L) != 0)) ) {
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

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public TimelineContext timeline() {
			return getRuleContext(TimelineContext.class,0);
		}
		public TaskContext task() {
			return getRuleContext(TaskContext.class,0);
		}
		public EventContext event() {
			return getRuleContext(EventContext.class,0);
		}
		public SpanContext span() {
			return getRuleContext(SpanContext.class,0);
		}
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
		}
		public DurationContext duration() {
			return getRuleContext(DurationContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitExpression(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_expression);
		try {
			setState(193);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(186);
				timeline();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(187);
				task();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(188);
				event();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(189);
				span();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(190);
				date();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(191);
				duration(0);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(192);
				label();
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
	public static class LabelContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public TerminalNode STRING() { return getToken(CronoScriptParser.STRING, 0); }
		public LabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_label; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterLabel(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitLabel(this);
		}
	}

	public final LabelContext label() throws RecognitionException {
		LabelContext _localctx = new LabelContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_label);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==STRING) ) {
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
		case 7:
			return simpleDate_sempred((SimpleDateContext)_localctx, predIndex);
		case 9:
			return duration_sempred((DurationContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean simpleDate_sempred(SimpleDateContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 2);
		case 1:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean duration_sempred(DurationContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 3);
		case 3:
			return precpred(_ctx, 2);
		case 4:
			return precpred(_ctx, 6);
		case 5:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u00014\u00c6\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0005\u0000#\b\u0000\n\u0000\f\u0000&\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0003\u0001,\b\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u00012\b\u0001"+
		"\n\u0001\f\u00015\t\u0001\u0003\u00017\b\u0001\u0001\u0001\u0001\u0001"+
		"\u0005\u0001;\b\u0001\n\u0001\f\u0001>\t\u0001\u0003\u0001@\b\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0003\u0002E\b\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003L\b\u0003\u0001"+
		"\u0003\u0005\u0003O\b\u0003\n\u0003\f\u0003R\t\u0003\u0003\u0003T\b\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004"+
		"[\b\u0004\u0001\u0004\u0005\u0004^\b\u0004\n\u0004\f\u0004a\t\u0004\u0003"+
		"\u0004c\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005n\b"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006s\b\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0003\u0007x\b\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007\u0080"+
		"\b\u0007\n\u0007\f\u0007\u0083\t\u0007\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0003\b\u0092\b\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0003\t\u009f\b\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0005\t\u00ad\b\t\n\t\f\t\u00b0\t\t\u0001\n\u0001\n\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u00c2\b\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0000\u0002\u000e\u0012\u000f\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u0000\u0004"+
		"\u0001\u0000,-\u0001\u0000\u0006\u001a\u0001\u0000%+\u0002\u0000//22\u00de"+
		"\u0000$\u0001\u0000\u0000\u0000\u0002?\u0001\u0000\u0000\u0000\u0004D"+
		"\u0001\u0000\u0000\u0000\u0006S\u0001\u0000\u0000\u0000\bb\u0001\u0000"+
		"\u0000\u0000\nm\u0001\u0000\u0000\u0000\fr\u0001\u0000\u0000\u0000\u000e"+
		"w\u0001\u0000\u0000\u0000\u0010\u0091\u0001\u0000\u0000\u0000\u0012\u009e"+
		"\u0001\u0000\u0000\u0000\u0014\u00b1\u0001\u0000\u0000\u0000\u0016\u00b3"+
		"\u0001\u0000\u0000\u0000\u0018\u00b8\u0001\u0000\u0000\u0000\u001a\u00c1"+
		"\u0001\u0000\u0000\u0000\u001c\u00c3\u0001\u0000\u0000\u0000\u001e#\u0003"+
		"\u0016\u000b\u0000\u001f#\u0003\u0002\u0001\u0000 #\u0003\u0006\u0003"+
		"\u0000!#\u0003\b\u0004\u0000\"\u001e\u0001\u0000\u0000\u0000\"\u001f\u0001"+
		"\u0000\u0000\u0000\" \u0001\u0000\u0000\u0000\"!\u0001\u0000\u0000\u0000"+
		"#&\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000\u0000$%\u0001\u0000\u0000"+
		"\u0000%\'\u0001\u0000\u0000\u0000&$\u0001\u0000\u0000\u0000\'(\u0005\u0000"+
		"\u0000\u0001(\u0001\u0001\u0000\u0000\u0000)@\u0005/\u0000\u0000*,\u0003"+
		"\u001c\u000e\u0000+*\u0001\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000"+
		",-\u0001\u0000\u0000\u0000-6\u0005\u0001\u0000\u0000.3\u0003\u0004\u0002"+
		"\u0000/0\u0005\u0002\u0000\u000002\u0003\u0004\u0002\u00001/\u0001\u0000"+
		"\u0000\u000025\u0001\u0000\u0000\u000031\u0001\u0000\u0000\u000034\u0001"+
		"\u0000\u0000\u000047\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u0000"+
		"6.\u0001\u0000\u0000\u000067\u0001\u0000\u0000\u000078\u0001\u0000\u0000"+
		"\u00008<\u0005\u0003\u0000\u00009;\u0007\u0000\u0000\u0000:9\u0001\u0000"+
		"\u0000\u0000;>\u0001\u0000\u0000\u0000<:\u0001\u0000\u0000\u0000<=\u0001"+
		"\u0000\u0000\u0000=@\u0001\u0000\u0000\u0000><\u0001\u0000\u0000\u0000"+
		"?)\u0001\u0000\u0000\u0000?+\u0001\u0000\u0000\u0000@\u0003\u0001\u0000"+
		"\u0000\u0000AE\u0003\u0002\u0001\u0000BE\u0003\u0006\u0003\u0000CE\u0003"+
		"\b\u0004\u0000DA\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000DC\u0001"+
		"\u0000\u0000\u0000E\u0005\u0001\u0000\u0000\u0000FT\u0005/\u0000\u0000"+
		"GH\u0005\u0004\u0000\u0000HI\u0003\n\u0005\u0000IK\u0005\u0005\u0000\u0000"+
		"JL\u0003\u001c\u000e\u0000KJ\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000"+
		"\u0000LP\u0001\u0000\u0000\u0000MO\u0007\u0000\u0000\u0000NM\u0001\u0000"+
		"\u0000\u0000OR\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001"+
		"\u0000\u0000\u0000QT\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000"+
		"SF\u0001\u0000\u0000\u0000SG\u0001\u0000\u0000\u0000T\u0007\u0001\u0000"+
		"\u0000\u0000Uc\u0005/\u0000\u0000VW\u0005\u0004\u0000\u0000WX\u0003\f"+
		"\u0006\u0000XZ\u0005\u0005\u0000\u0000Y[\u0003\u001c\u000e\u0000ZY\u0001"+
		"\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000[_\u0001\u0000\u0000\u0000"+
		"\\^\u0007\u0000\u0000\u0000]\\\u0001\u0000\u0000\u0000^a\u0001\u0000\u0000"+
		"\u0000_]\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`c\u0001\u0000"+
		"\u0000\u0000a_\u0001\u0000\u0000\u0000bU\u0001\u0000\u0000\u0000bV\u0001"+
		"\u0000\u0000\u0000c\t\u0001\u0000\u0000\u0000dn\u0005/\u0000\u0000ef\u0003"+
		"\f\u0006\u0000fg\u0005\u001d\u0000\u0000gh\u0003\f\u0006\u0000hn\u0001"+
		"\u0000\u0000\u0000ij\u0003\f\u0006\u0000jk\u0005\u001e\u0000\u0000kl\u0003"+
		"\u0012\t\u0000ln\u0001\u0000\u0000\u0000md\u0001\u0000\u0000\u0000me\u0001"+
		"\u0000\u0000\u0000mi\u0001\u0000\u0000\u0000n\u000b\u0001\u0000\u0000"+
		"\u0000os\u0005/\u0000\u0000ps\u0003\u000e\u0007\u0000qs\u0003\u0010\b"+
		"\u0000ro\u0001\u0000\u0000\u0000rp\u0001\u0000\u0000\u0000rq\u0001\u0000"+
		"\u0000\u0000s\r\u0001\u0000\u0000\u0000tu\u0006\u0007\uffff\uffff\u0000"+
		"ux\u0005/\u0000\u0000vx\u00051\u0000\u0000wt\u0001\u0000\u0000\u0000w"+
		"v\u0001\u0000\u0000\u0000x\u0081\u0001\u0000\u0000\u0000yz\n\u0002\u0000"+
		"\u0000z{\u0005\u001b\u0000\u0000{\u0080\u0003\u0012\t\u0000|}\n\u0001"+
		"\u0000\u0000}~\u0005\u001c\u0000\u0000~\u0080\u0003\u0012\t\u0000\u007f"+
		"y\u0001\u0000\u0000\u0000\u007f|\u0001\u0000\u0000\u0000\u0080\u0083\u0001"+
		"\u0000\u0000\u0000\u0081\u007f\u0001\u0000\u0000\u0000\u0081\u0082\u0001"+
		"\u0000\u0000\u0000\u0082\u000f\u0001\u0000\u0000\u0000\u0083\u0081\u0001"+
		"\u0000\u0000\u0000\u0084\u0092\u0005/\u0000\u0000\u0085\u0086\u0003\u000e"+
		"\u0007\u0000\u0086\u0087\u0005\u001f\u0000\u0000\u0087\u0088\u0003\u000e"+
		"\u0007\u0000\u0088\u0092\u0001\u0000\u0000\u0000\u0089\u008a\u0003\u000e"+
		"\u0007\u0000\u008a\u008b\u0005 \u0000\u0000\u008b\u008c\u0003\u0012\t"+
		"\u0000\u008c\u0092\u0001\u0000\u0000\u0000\u008d\u008e\u0003\u000e\u0007"+
		"\u0000\u008e\u008f\u0005!\u0000\u0000\u008f\u0090\u0003\u0012\t\u0000"+
		"\u0090\u0092\u0001\u0000\u0000\u0000\u0091\u0084\u0001\u0000\u0000\u0000"+
		"\u0091\u0085\u0001\u0000\u0000\u0000\u0091\u0089\u0001\u0000\u0000\u0000"+
		"\u0091\u008d\u0001\u0000\u0000\u0000\u0092\u0011\u0001\u0000\u0000\u0000"+
		"\u0093\u0094\u0006\t\uffff\uffff\u0000\u0094\u009f\u0005/\u0000\u0000"+
		"\u0095\u0096\u00050\u0000\u0000\u0096\u009f\u0003\u0014\n\u0000\u0097"+
		"\u0098\u00050\u0000\u0000\u0098\u0099\u0005#\u0000\u0000\u0099\u009f\u0003"+
		"\u0012\t\u0005\u009a\u009b\u0003\f\u0006\u0000\u009b\u009c\u0005\u001c"+
		"\u0000\u0000\u009c\u009d\u0003\f\u0006\u0000\u009d\u009f\u0001\u0000\u0000"+
		"\u0000\u009e\u0093\u0001\u0000\u0000\u0000\u009e\u0095\u0001\u0000\u0000"+
		"\u0000\u009e\u0097\u0001\u0000\u0000\u0000\u009e\u009a\u0001\u0000\u0000"+
		"\u0000\u009f\u00ae\u0001\u0000\u0000\u0000\u00a0\u00a1\n\u0003\u0000\u0000"+
		"\u00a1\u00a2\u0005\u001b\u0000\u0000\u00a2\u00ad\u0003\u0012\t\u0004\u00a3"+
		"\u00a4\n\u0002\u0000\u0000\u00a4\u00a5\u0005\u001c\u0000\u0000\u00a5\u00ad"+
		"\u0003\u0012\t\u0003\u00a6\u00a7\n\u0006\u0000\u0000\u00a7\u00a8\u0005"+
		"#\u0000\u0000\u00a8\u00ad\u00050\u0000\u0000\u00a9\u00aa\n\u0004\u0000"+
		"\u0000\u00aa\u00ab\u0005$\u0000\u0000\u00ab\u00ad\u00050\u0000\u0000\u00ac"+
		"\u00a0\u0001\u0000\u0000\u0000\u00ac\u00a3\u0001\u0000\u0000\u0000\u00ac"+
		"\u00a6\u0001\u0000\u0000\u0000\u00ac\u00a9\u0001\u0000\u0000\u0000\u00ad"+
		"\u00b0\u0001\u0000\u0000\u0000\u00ae\u00ac\u0001\u0000\u0000\u0000\u00ae"+
		"\u00af\u0001\u0000\u0000\u0000\u00af\u0013\u0001\u0000\u0000\u0000\u00b0"+
		"\u00ae\u0001\u0000\u0000\u0000\u00b1\u00b2\u0007\u0001\u0000\u0000\u00b2"+
		"\u0015\u0001\u0000\u0000\u0000\u00b3\u00b4\u0003\u0018\f\u0000\u00b4\u00b5"+
		"\u0005/\u0000\u0000\u00b5\u00b6\u0005\"\u0000\u0000\u00b6\u00b7\u0003"+
		"\u001a\r\u0000\u00b7\u0017\u0001\u0000\u0000\u0000\u00b8\u00b9\u0007\u0002"+
		"\u0000\u0000\u00b9\u0019\u0001\u0000\u0000\u0000\u00ba\u00c2\u0003\u0002"+
		"\u0001\u0000\u00bb\u00c2\u0003\u0006\u0003\u0000\u00bc\u00c2\u0003\b\u0004"+
		"\u0000\u00bd\u00c2\u0003\n\u0005\u0000\u00be\u00c2\u0003\f\u0006\u0000"+
		"\u00bf\u00c2\u0003\u0012\t\u0000\u00c0\u00c2\u0003\u001c\u000e\u0000\u00c1"+
		"\u00ba\u0001\u0000\u0000\u0000\u00c1\u00bb\u0001\u0000\u0000\u0000\u00c1"+
		"\u00bc\u0001\u0000\u0000\u0000\u00c1\u00bd\u0001\u0000\u0000\u0000\u00c1"+
		"\u00be\u0001\u0000\u0000\u0000\u00c1\u00bf\u0001\u0000\u0000\u0000\u00c1"+
		"\u00c0\u0001\u0000\u0000\u0000\u00c2\u001b\u0001\u0000\u0000\u0000\u00c3"+
		"\u00c4\u0007\u0003\u0000\u0000\u00c4\u001d\u0001\u0000\u0000\u0000\u0018"+
		"\"$+36<?DKPSZ_bmrw\u007f\u0081\u0091\u009e\u00ac\u00ae\u00c1";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}