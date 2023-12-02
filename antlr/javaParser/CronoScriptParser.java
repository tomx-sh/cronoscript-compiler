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
		DELAYMINUS=33, EQUALS=34, ID=35, INT=36, DATE=37, STRING=38, WS=39, TOMINUS=40;
	public static final int
		RULE_cronodile = 0, RULE_timeline = 1, RULE_element = 2, RULE_task = 3, 
		RULE_milestone = 4, RULE_span = 5, RULE_date = 6, RULE_duration = 7, RULE_timeUnit = 8, 
		RULE_label = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"cronodile", "timeline", "element", "task", "milestone", "span", "date", 
			"duration", "timeUnit", "label"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'['", "','", "']'", "'('", "')'", "'s'", "'second'", "'seconds'", 
			"'min'", "'minute'", "'minutes'", "'h'", "'hour'", "'hours'", "'d'", 
			"'day'", "'days'", "'w'", "'week'", "'weeks'", "'m'", "'month'", "'months'", 
			"'y'", "'year'", "'years'", "'+'", "'-'", "'>'", "'>+'", "'...'", null, 
			null, "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "PLUS", "MINUS", "TO", "TOPLUS", "DELAY", "DELAYPLUS", 
			"DELAYMINUS", "EQUALS", "ID", "INT", "DATE", "STRING", "WS", "TOMINUS"
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
		public List<MilestoneContext> milestone() {
			return getRuleContexts(MilestoneContext.class);
		}
		public MilestoneContext milestone(int i) {
			return getRuleContext(MilestoneContext.class,i);
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
			setState(25);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274877906962L) != 0)) {
				{
				setState(23);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(20);
					timeline();
					}
					break;
				case 2:
					{
					setState(21);
					task();
					}
					break;
				case 3:
					{
					setState(22);
					milestone();
					}
					break;
				}
				}
				setState(27);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(28);
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
			setState(31);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STRING) {
				{
				setState(30);
				label();
				}
			}

			setState(33);
			match(T__0);
			setState(42);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274877906962L) != 0)) {
				{
				setState(34);
				element();
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__1) {
					{
					{
					setState(35);
					match(T__1);
					setState(36);
					element();
					}
					}
					setState(41);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(44);
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
		public MilestoneContext milestone() {
			return getRuleContext(MilestoneContext.class,0);
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
			setState(49);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(46);
				timeline();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(47);
				task();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(48);
				milestone();
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
			setState(51);
			match(T__3);
			setState(52);
			span();
			setState(53);
			match(T__4);
			setState(55);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(54);
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
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterMilestone(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitMilestone(this);
		}
	}

	public final MilestoneContext milestone() throws RecognitionException {
		MilestoneContext _localctx = new MilestoneContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_milestone);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			match(T__3);
			setState(58);
			date(0);
			setState(59);
			match(T__4);
			setState(61);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(60);
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
		public TerminalNode TOMINUS() { return getToken(CronoScriptParser.TOMINUS, 0); }
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
			setState(75);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(63);
				date(0);
				setState(64);
				match(TO);
				setState(65);
				date(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(67);
				date(0);
				setState(68);
				match(TOPLUS);
				setState(69);
				duration(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(71);
				date(0);
				setState(72);
				match(TOMINUS);
				setState(73);
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
		public TerminalNode DATE() { return getToken(CronoScriptParser.DATE, 0); }
		public List<DateContext> date() {
			return getRuleContexts(DateContext.class);
		}
		public DateContext date(int i) {
			return getRuleContext(DateContext.class,i);
		}
		public TerminalNode DELAY() { return getToken(CronoScriptParser.DELAY, 0); }
		public TerminalNode PLUS() { return getToken(CronoScriptParser.PLUS, 0); }
		public DurationContext duration() {
			return getRuleContext(DurationContext.class,0);
		}
		public TerminalNode DELAYPLUS() { return getToken(CronoScriptParser.DELAYPLUS, 0); }
		public TerminalNode DELAYMINUS() { return getToken(CronoScriptParser.DELAYMINUS, 0); }
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
		return date(0);
	}

	private DateContext date(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		DateContext _localctx = new DateContext(_ctx, _parentState);
		DateContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_date, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(78);
			match(DATE);
			}
			_ctx.stop = _input.LT(-1);
			setState(94);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(92);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_date);
						setState(80);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(81);
						match(DELAY);
						setState(82);
						date(4);
						}
						break;
					case 2:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_date);
						setState(83);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(84);
						match(PLUS);
						setState(85);
						duration(0);
						}
						break;
					case 3:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_date);
						setState(86);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(87);
						match(DELAYPLUS);
						setState(88);
						duration(0);
						}
						break;
					case 4:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_date);
						setState(89);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(90);
						match(DELAYMINUS);
						setState(91);
						duration(0);
						}
						break;
					}
					} 
				}
				setState(96);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
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
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_duration, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(104);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				{
				setState(98);
				match(INT);
				setState(99);
				timeUnit();
				}
				break;
			case DATE:
				{
				setState(100);
				date(0);
				setState(101);
				match(MINUS);
				setState(102);
				date(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(114);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(112);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(106);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(107);
						match(PLUS);
						setState(108);
						duration(4);
						}
						break;
					case 2:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(109);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(110);
						match(MINUS);
						setState(111);
						duration(3);
						}
						break;
					}
					} 
				}
				setState(116);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
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
		enterRule(_localctx, 16, RULE_timeUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(117);
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
		enterRule(_localctx, 18, RULE_label);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
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
		case 6:
			return date_sempred((DateContext)_localctx, predIndex);
		case 7:
			return duration_sempred((DurationContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean date_sempred(DateContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		case 1:
			return precpred(_ctx, 4);
		case 2:
			return precpred(_ctx, 2);
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean duration_sempred(DurationContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 3);
		case 5:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001(z\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002\u0002"+
		"\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002\u0005"+
		"\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007"+
		"\b\u0002\t\u0007\t\u0001\u0000\u0001\u0000\u0001\u0000\u0005\u0000\u0018"+
		"\b\u0000\n\u0000\f\u0000\u001b\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0003\u0001 \b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0005\u0001&\b\u0001\n\u0001\f\u0001)\t\u0001\u0003\u0001+\b\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u00022\b"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00038\b"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004>\b"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0003\u0005L\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005"+
		"\u0006]\b\u0006\n\u0006\f\u0006`\t\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007i\b"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0005\u0007q\b\u0007\n\u0007\f\u0007t\t\u0007\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0000\u0002\f\u000e\n\u0000\u0002\u0004\u0006\b\n\f"+
		"\u000e\u0010\u0012\u0000\u0001\u0001\u0000\u0006\u001a\u0082\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0002\u001f\u0001\u0000\u0000\u0000\u00041\u0001"+
		"\u0000\u0000\u0000\u00063\u0001\u0000\u0000\u0000\b9\u0001\u0000\u0000"+
		"\u0000\nK\u0001\u0000\u0000\u0000\fM\u0001\u0000\u0000\u0000\u000eh\u0001"+
		"\u0000\u0000\u0000\u0010u\u0001\u0000\u0000\u0000\u0012w\u0001\u0000\u0000"+
		"\u0000\u0014\u0018\u0003\u0002\u0001\u0000\u0015\u0018\u0003\u0006\u0003"+
		"\u0000\u0016\u0018\u0003\b\u0004\u0000\u0017\u0014\u0001\u0000\u0000\u0000"+
		"\u0017\u0015\u0001\u0000\u0000\u0000\u0017\u0016\u0001\u0000\u0000\u0000"+
		"\u0018\u001b\u0001\u0000\u0000\u0000\u0019\u0017\u0001\u0000\u0000\u0000"+
		"\u0019\u001a\u0001\u0000\u0000\u0000\u001a\u001c\u0001\u0000\u0000\u0000"+
		"\u001b\u0019\u0001\u0000\u0000\u0000\u001c\u001d\u0005\u0000\u0000\u0001"+
		"\u001d\u0001\u0001\u0000\u0000\u0000\u001e \u0003\u0012\t\u0000\u001f"+
		"\u001e\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000\u0000 !\u0001"+
		"\u0000\u0000\u0000!*\u0005\u0001\u0000\u0000\"\'\u0003\u0004\u0002\u0000"+
		"#$\u0005\u0002\u0000\u0000$&\u0003\u0004\u0002\u0000%#\u0001\u0000\u0000"+
		"\u0000&)\u0001\u0000\u0000\u0000\'%\u0001\u0000\u0000\u0000\'(\u0001\u0000"+
		"\u0000\u0000(+\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000*\"\u0001"+
		"\u0000\u0000\u0000*+\u0001\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000"+
		",-\u0005\u0003\u0000\u0000-\u0003\u0001\u0000\u0000\u0000.2\u0003\u0002"+
		"\u0001\u0000/2\u0003\u0006\u0003\u000002\u0003\b\u0004\u00001.\u0001\u0000"+
		"\u0000\u00001/\u0001\u0000\u0000\u000010\u0001\u0000\u0000\u00002\u0005"+
		"\u0001\u0000\u0000\u000034\u0005\u0004\u0000\u000045\u0003\n\u0005\u0000"+
		"57\u0005\u0005\u0000\u000068\u0003\u0012\t\u000076\u0001\u0000\u0000\u0000"+
		"78\u0001\u0000\u0000\u00008\u0007\u0001\u0000\u0000\u00009:\u0005\u0004"+
		"\u0000\u0000:;\u0003\f\u0006\u0000;=\u0005\u0005\u0000\u0000<>\u0003\u0012"+
		"\t\u0000=<\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>\t\u0001"+
		"\u0000\u0000\u0000?@\u0003\f\u0006\u0000@A\u0005\u001d\u0000\u0000AB\u0003"+
		"\f\u0006\u0000BL\u0001\u0000\u0000\u0000CD\u0003\f\u0006\u0000DE\u0005"+
		"\u001e\u0000\u0000EF\u0003\u000e\u0007\u0000FL\u0001\u0000\u0000\u0000"+
		"GH\u0003\f\u0006\u0000HI\u0005(\u0000\u0000IJ\u0003\u000e\u0007\u0000"+
		"JL\u0001\u0000\u0000\u0000K?\u0001\u0000\u0000\u0000KC\u0001\u0000\u0000"+
		"\u0000KG\u0001\u0000\u0000\u0000L\u000b\u0001\u0000\u0000\u0000MN\u0006"+
		"\u0006\uffff\uffff\u0000NO\u0005%\u0000\u0000O^\u0001\u0000\u0000\u0000"+
		"PQ\n\u0003\u0000\u0000QR\u0005\u001f\u0000\u0000R]\u0003\f\u0006\u0004"+
		"ST\n\u0004\u0000\u0000TU\u0005\u001b\u0000\u0000U]\u0003\u000e\u0007\u0000"+
		"VW\n\u0002\u0000\u0000WX\u0005 \u0000\u0000X]\u0003\u000e\u0007\u0000"+
		"YZ\n\u0001\u0000\u0000Z[\u0005!\u0000\u0000[]\u0003\u000e\u0007\u0000"+
		"\\P\u0001\u0000\u0000\u0000\\S\u0001\u0000\u0000\u0000\\V\u0001\u0000"+
		"\u0000\u0000\\Y\u0001\u0000\u0000\u0000]`\u0001\u0000\u0000\u0000^\\\u0001"+
		"\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_\r\u0001\u0000\u0000\u0000"+
		"`^\u0001\u0000\u0000\u0000ab\u0006\u0007\uffff\uffff\u0000bc\u0005$\u0000"+
		"\u0000ci\u0003\u0010\b\u0000de\u0003\f\u0006\u0000ef\u0005\u001c\u0000"+
		"\u0000fg\u0003\f\u0006\u0000gi\u0001\u0000\u0000\u0000ha\u0001\u0000\u0000"+
		"\u0000hd\u0001\u0000\u0000\u0000ir\u0001\u0000\u0000\u0000jk\n\u0003\u0000"+
		"\u0000kl\u0005\u001b\u0000\u0000lq\u0003\u000e\u0007\u0004mn\n\u0002\u0000"+
		"\u0000no\u0005\u001c\u0000\u0000oq\u0003\u000e\u0007\u0003pj\u0001\u0000"+
		"\u0000\u0000pm\u0001\u0000\u0000\u0000qt\u0001\u0000\u0000\u0000rp\u0001"+
		"\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000s\u000f\u0001\u0000\u0000"+
		"\u0000tr\u0001\u0000\u0000\u0000uv\u0007\u0000\u0000\u0000v\u0011\u0001"+
		"\u0000\u0000\u0000wx\u0005&\u0000\u0000x\u0013\u0001\u0000\u0000\u0000"+
		"\u000e\u0017\u0019\u001f\'*17=K\\^hpr";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}