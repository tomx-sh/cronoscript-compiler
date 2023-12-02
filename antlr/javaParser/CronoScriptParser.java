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
		DELAYMINUS=33, EQUALS=34, STRING_KW=35, DATE_KW=36, SPAN_KW=37, DURATION_KW=38, 
		EVENT_KW=39, TASK_KW=40, TIMELINE_KW=41, ID=42, INT=43, DATE=44, STRING=45, 
		WS=46;
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
			null, "'='", "'string'", "'date'", "'span'", "'duration'", "'event'", 
			"'task'", "'timeline'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "PLUS", "MINUS", "TO", "TOPLUS", "DELAY", "DELAYPLUS", 
			"DELAYMINUS", "EQUALS", "STRING_KW", "DATE_KW", "SPAN_KW", "DURATION_KW", 
			"EVENT_KW", "TASK_KW", "TIMELINE_KW", "ID", "INT", "DATE", "STRING", 
			"WS"
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
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 39548058861586L) != 0)) {
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
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
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
			enterOuterAlt(_localctx, 1);
			{
			setState(42);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STRING) {
				{
				setState(41);
				label();
				}
			}

			setState(44);
			match(T__0);
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 35184372088850L) != 0)) {
				{
				setState(45);
				element();
				setState(50);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__1) {
					{
					{
					setState(46);
					match(T__1);
					setState(47);
					element();
					}
					}
					setState(52);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(55);
			match(T__2);
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
			setState(60);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(57);
				timeline();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(58);
				task();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(59);
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
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(T__3);
			setState(63);
			span();
			setState(64);
			match(T__4);
			setState(66);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(65);
				label();
				}
				break;
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
	public static class EventContext extends ParserRuleContext {
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
		}
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
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
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			match(T__3);
			setState(69);
			date();
			setState(70);
			match(T__4);
			setState(72);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(71);
				label();
				}
				break;
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
	public static class SpanContext extends ParserRuleContext {
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
			setState(82);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(74);
				date();
				setState(75);
				match(TO);
				setState(76);
				date();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(78);
				date();
				setState(79);
				match(TOPLUS);
				setState(80);
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
			setState(86);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(84);
				simpleDate(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(85);
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
			{
			setState(89);
			match(DATE);
			}
			_ctx.stop = _input.LT(-1);
			setState(99);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(97);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new SimpleDateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_simpleDate);
						setState(91);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(92);
						match(PLUS);
						setState(93);
						duration(0);
						}
						break;
					case 2:
						{
						_localctx = new SimpleDateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_simpleDate);
						setState(94);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(95);
						match(MINUS);
						setState(96);
						duration(0);
						}
						break;
					}
					} 
				}
				setState(101);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
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
			setState(114);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(102);
				simpleDate(0);
				setState(103);
				match(DELAY);
				setState(104);
				simpleDate(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(106);
				simpleDate(0);
				setState(107);
				match(DELAYPLUS);
				setState(108);
				duration(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(110);
				simpleDate(0);
				setState(111);
				match(DELAYMINUS);
				setState(112);
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
		public TerminalNode INT() { return getToken(CronoScriptParser.INT, 0); }
		public TimeUnitContext timeUnit() {
			return getRuleContext(TimeUnitContext.class,0);
		}
		public List<DateContext> date() {
			return getRuleContexts(DateContext.class);
		}
		public DateContext date(int i) {
			return getRuleContext(DateContext.class,i);
		}
		public TerminalNode MINUS() { return getToken(CronoScriptParser.MINUS, 0); }
		public List<DurationContext> duration() {
			return getRuleContexts(DurationContext.class);
		}
		public DurationContext duration(int i) {
			return getRuleContext(DurationContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(CronoScriptParser.PLUS, 0); }
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
			setState(123);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				{
				setState(117);
				match(INT);
				setState(118);
				timeUnit();
				}
				break;
			case DATE:
				{
				setState(119);
				date();
				setState(120);
				match(MINUS);
				setState(121);
				date();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(133);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(131);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
					case 1:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(125);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(126);
						match(PLUS);
						setState(127);
						duration(4);
						}
						break;
					case 2:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(128);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(129);
						match(MINUS);
						setState(130);
						duration(3);
						}
						break;
					}
					} 
				}
				setState(135);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
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
			setState(136);
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
			setState(138);
			type();
			setState(139);
			match(ID);
			setState(140);
			match(EQUALS);
			setState(141);
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
			setState(143);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4363686772736L) != 0)) ) {
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
		public LabelContext label() {
			return getRuleContext(LabelContext.class,0);
		}
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
		}
		public SpanContext span() {
			return getRuleContext(SpanContext.class,0);
		}
		public DurationContext duration() {
			return getRuleContext(DurationContext.class,0);
		}
		public EventContext event() {
			return getRuleContext(EventContext.class,0);
		}
		public TaskContext task() {
			return getRuleContext(TaskContext.class,0);
		}
		public TimelineContext timeline() {
			return getRuleContext(TimelineContext.class,0);
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
			setState(152);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(145);
				label();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(146);
				date();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(147);
				span();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(148);
				duration(0);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(149);
				event();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(150);
				task();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(151);
				timeline();
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
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			match(STRING);
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
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001.\u009d\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0005\u0000#\b\u0000\n\u0000\f\u0000&\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0003\u0001+\b\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u00011\b\u0001\n\u0001\f\u0001"+
		"4\t\u0001\u0003\u00016\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0003\u0002=\b\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0003\u0003C\b\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004I\b\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003"+
		"\u0005S\b\u0005\u0001\u0006\u0001\u0006\u0003\u0006W\b\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0005\u0007b\b\u0007\n\u0007\f\u0007e\t\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0003\bs\b\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0003\t|\b\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0005\t\u0084\b\t\n\t\f\t\u0087\t\t\u0001\n\u0001\n"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u0099"+
		"\b\r\u0001\u000e\u0001\u000e\u0001\u000e\u0000\u0002\u000e\u0012\u000f"+
		"\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a"+
		"\u001c\u0000\u0002\u0001\u0000\u0006\u001a\u0001\u0000#)\u00a7\u0000$"+
		"\u0001\u0000\u0000\u0000\u0002*\u0001\u0000\u0000\u0000\u0004<\u0001\u0000"+
		"\u0000\u0000\u0006>\u0001\u0000\u0000\u0000\bD\u0001\u0000\u0000\u0000"+
		"\nR\u0001\u0000\u0000\u0000\fV\u0001\u0000\u0000\u0000\u000eX\u0001\u0000"+
		"\u0000\u0000\u0010r\u0001\u0000\u0000\u0000\u0012{\u0001\u0000\u0000\u0000"+
		"\u0014\u0088\u0001\u0000\u0000\u0000\u0016\u008a\u0001\u0000\u0000\u0000"+
		"\u0018\u008f\u0001\u0000\u0000\u0000\u001a\u0098\u0001\u0000\u0000\u0000"+
		"\u001c\u009a\u0001\u0000\u0000\u0000\u001e#\u0003\u0016\u000b\u0000\u001f"+
		"#\u0003\u0002\u0001\u0000 #\u0003\u0006\u0003\u0000!#\u0003\b\u0004\u0000"+
		"\"\u001e\u0001\u0000\u0000\u0000\"\u001f\u0001\u0000\u0000\u0000\" \u0001"+
		"\u0000\u0000\u0000\"!\u0001\u0000\u0000\u0000#&\u0001\u0000\u0000\u0000"+
		"$\"\u0001\u0000\u0000\u0000$%\u0001\u0000\u0000\u0000%\'\u0001\u0000\u0000"+
		"\u0000&$\u0001\u0000\u0000\u0000\'(\u0005\u0000\u0000\u0001(\u0001\u0001"+
		"\u0000\u0000\u0000)+\u0003\u001c\u000e\u0000*)\u0001\u0000\u0000\u0000"+
		"*+\u0001\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000,5\u0005\u0001\u0000"+
		"\u0000-2\u0003\u0004\u0002\u0000./\u0005\u0002\u0000\u0000/1\u0003\u0004"+
		"\u0002\u00000.\u0001\u0000\u0000\u000014\u0001\u0000\u0000\u000020\u0001"+
		"\u0000\u0000\u000023\u0001\u0000\u0000\u000036\u0001\u0000\u0000\u0000"+
		"42\u0001\u0000\u0000\u00005-\u0001\u0000\u0000\u000056\u0001\u0000\u0000"+
		"\u000067\u0001\u0000\u0000\u000078\u0005\u0003\u0000\u00008\u0003\u0001"+
		"\u0000\u0000\u00009=\u0003\u0002\u0001\u0000:=\u0003\u0006\u0003\u0000"+
		";=\u0003\b\u0004\u0000<9\u0001\u0000\u0000\u0000<:\u0001\u0000\u0000\u0000"+
		"<;\u0001\u0000\u0000\u0000=\u0005\u0001\u0000\u0000\u0000>?\u0005\u0004"+
		"\u0000\u0000?@\u0003\n\u0005\u0000@B\u0005\u0005\u0000\u0000AC\u0003\u001c"+
		"\u000e\u0000BA\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000C\u0007"+
		"\u0001\u0000\u0000\u0000DE\u0005\u0004\u0000\u0000EF\u0003\f\u0006\u0000"+
		"FH\u0005\u0005\u0000\u0000GI\u0003\u001c\u000e\u0000HG\u0001\u0000\u0000"+
		"\u0000HI\u0001\u0000\u0000\u0000I\t\u0001\u0000\u0000\u0000JK\u0003\f"+
		"\u0006\u0000KL\u0005\u001d\u0000\u0000LM\u0003\f\u0006\u0000MS\u0001\u0000"+
		"\u0000\u0000NO\u0003\f\u0006\u0000OP\u0005\u001e\u0000\u0000PQ\u0003\u0012"+
		"\t\u0000QS\u0001\u0000\u0000\u0000RJ\u0001\u0000\u0000\u0000RN\u0001\u0000"+
		"\u0000\u0000S\u000b\u0001\u0000\u0000\u0000TW\u0003\u000e\u0007\u0000"+
		"UW\u0003\u0010\b\u0000VT\u0001\u0000\u0000\u0000VU\u0001\u0000\u0000\u0000"+
		"W\r\u0001\u0000\u0000\u0000XY\u0006\u0007\uffff\uffff\u0000YZ\u0005,\u0000"+
		"\u0000Zc\u0001\u0000\u0000\u0000[\\\n\u0002\u0000\u0000\\]\u0005\u001b"+
		"\u0000\u0000]b\u0003\u0012\t\u0000^_\n\u0001\u0000\u0000_`\u0005\u001c"+
		"\u0000\u0000`b\u0003\u0012\t\u0000a[\u0001\u0000\u0000\u0000a^\u0001\u0000"+
		"\u0000\u0000be\u0001\u0000\u0000\u0000ca\u0001\u0000\u0000\u0000cd\u0001"+
		"\u0000\u0000\u0000d\u000f\u0001\u0000\u0000\u0000ec\u0001\u0000\u0000"+
		"\u0000fg\u0003\u000e\u0007\u0000gh\u0005\u001f\u0000\u0000hi\u0003\u000e"+
		"\u0007\u0000is\u0001\u0000\u0000\u0000jk\u0003\u000e\u0007\u0000kl\u0005"+
		" \u0000\u0000lm\u0003\u0012\t\u0000ms\u0001\u0000\u0000\u0000no\u0003"+
		"\u000e\u0007\u0000op\u0005!\u0000\u0000pq\u0003\u0012\t\u0000qs\u0001"+
		"\u0000\u0000\u0000rf\u0001\u0000\u0000\u0000rj\u0001\u0000\u0000\u0000"+
		"rn\u0001\u0000\u0000\u0000s\u0011\u0001\u0000\u0000\u0000tu\u0006\t\uffff"+
		"\uffff\u0000uv\u0005+\u0000\u0000v|\u0003\u0014\n\u0000wx\u0003\f\u0006"+
		"\u0000xy\u0005\u001c\u0000\u0000yz\u0003\f\u0006\u0000z|\u0001\u0000\u0000"+
		"\u0000{t\u0001\u0000\u0000\u0000{w\u0001\u0000\u0000\u0000|\u0085\u0001"+
		"\u0000\u0000\u0000}~\n\u0003\u0000\u0000~\u007f\u0005\u001b\u0000\u0000"+
		"\u007f\u0084\u0003\u0012\t\u0004\u0080\u0081\n\u0002\u0000\u0000\u0081"+
		"\u0082\u0005\u001c\u0000\u0000\u0082\u0084\u0003\u0012\t\u0003\u0083}"+
		"\u0001\u0000\u0000\u0000\u0083\u0080\u0001\u0000\u0000\u0000\u0084\u0087"+
		"\u0001\u0000\u0000\u0000\u0085\u0083\u0001\u0000\u0000\u0000\u0085\u0086"+
		"\u0001\u0000\u0000\u0000\u0086\u0013\u0001\u0000\u0000\u0000\u0087\u0085"+
		"\u0001\u0000\u0000\u0000\u0088\u0089\u0007\u0000\u0000\u0000\u0089\u0015"+
		"\u0001\u0000\u0000\u0000\u008a\u008b\u0003\u0018\f\u0000\u008b\u008c\u0005"+
		"*\u0000\u0000\u008c\u008d\u0005\"\u0000\u0000\u008d\u008e\u0003\u001a"+
		"\r\u0000\u008e\u0017\u0001\u0000\u0000\u0000\u008f\u0090\u0007\u0001\u0000"+
		"\u0000\u0090\u0019\u0001\u0000\u0000\u0000\u0091\u0099\u0003\u001c\u000e"+
		"\u0000\u0092\u0099\u0003\f\u0006\u0000\u0093\u0099\u0003\n\u0005\u0000"+
		"\u0094\u0099\u0003\u0012\t\u0000\u0095\u0099\u0003\b\u0004\u0000\u0096"+
		"\u0099\u0003\u0006\u0003\u0000\u0097\u0099\u0003\u0002\u0001\u0000\u0098"+
		"\u0091\u0001\u0000\u0000\u0000\u0098\u0092\u0001\u0000\u0000\u0000\u0098"+
		"\u0093\u0001\u0000\u0000\u0000\u0098\u0094\u0001\u0000\u0000\u0000\u0098"+
		"\u0095\u0001\u0000\u0000\u0000\u0098\u0096\u0001\u0000\u0000\u0000\u0098"+
		"\u0097\u0001\u0000\u0000\u0000\u0099\u001b\u0001\u0000\u0000\u0000\u009a"+
		"\u009b\u0005-\u0000\u0000\u009b\u001d\u0001\u0000\u0000\u0000\u0011\""+
		"$*25<BHRVacr{\u0083\u0085\u0098";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}