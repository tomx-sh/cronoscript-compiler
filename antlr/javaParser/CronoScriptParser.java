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
		T__0=1, T__1=2, COMMA=3, TO=4, PLUS=5, MINUS=6, TOPLUS=7, DELAY=8, DELAYPLUS=9, 
		DELAYMINUS=10, EQUALS=11, MULT=12, DIV=13, STRING_KW=14, DATE_KW=15, GROUP_KW=16, 
		DURATION_KW=17, HASH=18, AT=19, KEY=20, DATE=21, STRING=22, DURATION=23, 
		ID=24, INT=25, COMMENT=26, WS=27;
	public static final int
		RULE_cronodile = 0, RULE_group = 1, RULE_groupBody = 2, RULE_tags = 3, 
		RULE_element = 4, RULE_separator = 5, RULE_date = 6, RULE_duration = 7, 
		RULE_variableDeclaration = 8, RULE_type = 9, RULE_expression = 10, RULE_string = 11, 
		RULE_hash = 12, RULE_at = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"cronodile", "group", "groupBody", "tags", "element", "separator", "date", 
			"duration", "variableDeclaration", "type", "expression", "string", "hash", 
			"at"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'['", "']'", "','", "'->'", "'+'", "'-'", "'->+'", "'...'", null, 
			null, "'='", "'*'", "'/'", "'string'", "'date'", "'group'", "'duration'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "COMMA", "TO", "PLUS", "MINUS", "TOPLUS", "DELAY", 
			"DELAYPLUS", "DELAYMINUS", "EQUALS", "MULT", "DIV", "STRING_KW", "DATE_KW", 
			"GROUP_KW", "DURATION_KW", "HASH", "AT", "KEY", "DATE", "STRING", "DURATION", 
			"ID", "INT", "COMMENT", "WS"
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
		public List<TagsContext> tags() {
			return getRuleContexts(TagsContext.class);
		}
		public TagsContext tags(int i) {
			return getRuleContext(TagsContext.class,i);
		}
		public List<DateContext> date() {
			return getRuleContexts(DateContext.class);
		}
		public DateContext date(int i) {
			return getRuleContext(DateContext.class,i);
		}
		public List<GroupContext> group() {
			return getRuleContexts(GroupContext.class);
		}
		public GroupContext group(int i) {
			return getRuleContext(GroupContext.class,i);
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
			setState(33);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 23855106L) != 0)) {
				{
				setState(31);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(28);
					tags();
					}
					break;
				case 2:
					{
					setState(29);
					date(0);
					}
					break;
				case 3:
					{
					setState(30);
					group();
					}
					break;
				}
				}
				setState(35);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(36);
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
	public static class GroupContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public GroupBodyContext groupBody() {
			return getRuleContext(GroupBodyContext.class,0);
		}
		public StringContext string() {
			return getRuleContext(StringContext.class,0);
		}
		public List<TagsContext> tags() {
			return getRuleContexts(TagsContext.class);
		}
		public TagsContext tags(int i) {
			return getRuleContext(TagsContext.class,i);
		}
		public GroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_group; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterGroup(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitGroup(this);
		}
	}

	public final GroupContext group() throws RecognitionException {
		GroupContext _localctx = new GroupContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_group);
		int _la;
		try {
			int _alt;
			setState(59);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STRING || _la==ID) {
					{
					setState(39);
					string();
					}
				}

				setState(42);
				groupBody();
				setState(46);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(43);
						tags();
						}
						} 
					}
					setState(48);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(49);
				groupBody();
				setState(51);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
				case 1:
					{
					setState(50);
					string();
					}
					break;
				}
				setState(56);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(53);
						tags();
						}
						} 
					}
					setState(58);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
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
	public static class GroupBodyContext extends ParserRuleContext {
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<SeparatorContext> separator() {
			return getRuleContexts(SeparatorContext.class);
		}
		public SeparatorContext separator(int i) {
			return getRuleContext(SeparatorContext.class,i);
		}
		public GroupBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupBody; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterGroupBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitGroupBody(this);
		}
	}

	public final GroupBodyContext groupBody() throws RecognitionException {
		GroupBodyContext _localctx = new GroupBodyContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_groupBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			match(T__0);
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 65011714L) != 0)) {
				{
				setState(62);
				element();
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1944L) != 0)) {
					{
					{
					setState(63);
					separator();
					setState(64);
					element();
					}
					}
					setState(70);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(73);
			match(T__1);
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
	public static class TagsContext extends ParserRuleContext {
		public HashContext hash() {
			return getRuleContext(HashContext.class,0);
		}
		public AtContext at() {
			return getRuleContext(AtContext.class,0);
		}
		public TagsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tags; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterTags(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitTags(this);
		}
	}

	public final TagsContext tags() throws RecognitionException {
		TagsContext _localctx = new TagsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_tags);
		try {
			setState(77);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case HASH:
				enterOuterAlt(_localctx, 1);
				{
				setState(75);
				hash();
				}
				break;
			case AT:
				enterOuterAlt(_localctx, 2);
				{
				setState(76);
				at();
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
	public static class ElementContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public GroupContext group() {
			return getRuleContext(GroupContext.class,0);
		}
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
		}
		public DurationContext duration() {
			return getRuleContext(DurationContext.class,0);
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
		enterRule(_localctx, 8, RULE_element);
		try {
			setState(83);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(79);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(80);
				group();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(81);
				date(0);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(82);
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
	public static class SeparatorContext extends ParserRuleContext {
		public TerminalNode COMMA() { return getToken(CronoScriptParser.COMMA, 0); }
		public TerminalNode TO() { return getToken(CronoScriptParser.TO, 0); }
		public TerminalNode TOPLUS() { return getToken(CronoScriptParser.TOPLUS, 0); }
		public TerminalNode DELAY() { return getToken(CronoScriptParser.DELAY, 0); }
		public TerminalNode DELAYPLUS() { return getToken(CronoScriptParser.DELAYPLUS, 0); }
		public TerminalNode DELAYMINUS() { return getToken(CronoScriptParser.DELAYMINUS, 0); }
		public SeparatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_separator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterSeparator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitSeparator(this);
		}
	}

	public final SeparatorContext separator() throws RecognitionException {
		SeparatorContext _localctx = new SeparatorContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_separator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1944L) != 0)) ) {
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
	public static class DateContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public TerminalNode DATE() { return getToken(CronoScriptParser.DATE, 0); }
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(CronoScriptParser.PLUS, 0); }
		public DurationContext duration() {
			return getRuleContext(DurationContext.class,0);
		}
		public TerminalNode MINUS() { return getToken(CronoScriptParser.MINUS, 0); }
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
			setState(90);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				setState(88);
				match(ID);
				}
				break;
			case DATE:
				{
				setState(89);
				match(DATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(100);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(98);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_date);
						setState(92);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(93);
						match(PLUS);
						setState(94);
						duration(0);
						}
						break;
					case 2:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_date);
						setState(95);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(96);
						match(MINUS);
						setState(97);
						duration(0);
						}
						break;
					}
					} 
				}
				setState(102);
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
	public static class DurationContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public TerminalNode DURATION() { return getToken(CronoScriptParser.DURATION, 0); }
		public TerminalNode INT() { return getToken(CronoScriptParser.INT, 0); }
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
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_duration, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(104);
				match(ID);
				}
				break;
			case 2:
				{
				setState(105);
				match(DURATION);
				}
				break;
			case 3:
				{
				setState(106);
				match(INT);
				setState(107);
				match(MULT);
				setState(108);
				duration(5);
				}
				break;
			case 4:
				{
				setState(109);
				date(0);
				setState(110);
				match(MINUS);
				setState(111);
				date(0);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(129);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(127);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
					case 1:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(115);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(116);
						match(PLUS);
						setState(117);
						duration(4);
						}
						break;
					case 2:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(118);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(119);
						match(MINUS);
						setState(120);
						duration(3);
						}
						break;
					case 3:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(121);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(122);
						match(MULT);
						setState(123);
						match(INT);
						}
						break;
					case 4:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_duration);
						setState(124);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(125);
						match(DIV);
						setState(126);
						match(INT);
						}
						break;
					}
					} 
				}
				setState(131);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
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
		enterRule(_localctx, 16, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			type();
			setState(133);
			match(ID);
			setState(134);
			match(EQUALS);
			setState(135);
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
		public TerminalNode GROUP_KW() { return getToken(CronoScriptParser.GROUP_KW, 0); }
		public TerminalNode DURATION_KW() { return getToken(CronoScriptParser.DURATION_KW, 0); }
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
		enterRule(_localctx, 18, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 245760L) != 0)) ) {
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
		public GroupContext group() {
			return getRuleContext(GroupContext.class,0);
		}
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
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
		enterRule(_localctx, 20, RULE_expression);
		try {
			setState(141);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(139);
				group();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(140);
				date(0);
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
	public static class StringContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(CronoScriptParser.ID, 0); }
		public TerminalNode STRING() { return getToken(CronoScriptParser.STRING, 0); }
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterString(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitString(this);
		}
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_string);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			_la = _input.LA(1);
			if ( !(_la==STRING || _la==ID) ) {
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
	public static class HashContext extends ParserRuleContext {
		public TerminalNode HASH() { return getToken(CronoScriptParser.HASH, 0); }
		public HashContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hash; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterHash(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitHash(this);
		}
	}

	public final HashContext hash() throws RecognitionException {
		HashContext _localctx = new HashContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_hash);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(145);
			match(HASH);
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
	public static class AtContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(CronoScriptParser.AT, 0); }
		public AtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_at; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).enterAt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CronoScriptListener ) ((CronoScriptListener)listener).exitAt(this);
		}
	}

	public final AtContext at() throws RecognitionException {
		AtContext _localctx = new AtContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_at);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			match(AT);
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
		"\u0004\u0001\u001b\u0096\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001\u0000\u0005"+
		"\u0000 \b\u0000\n\u0000\f\u0000#\t\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0003\u0001)\b\u0001\u0001\u0001\u0001\u0001\u0005"+
		"\u0001-\b\u0001\n\u0001\f\u00010\t\u0001\u0001\u0001\u0001\u0001\u0003"+
		"\u00014\b\u0001\u0001\u0001\u0005\u00017\b\u0001\n\u0001\f\u0001:\t\u0001"+
		"\u0003\u0001<\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0005\u0002C\b\u0002\n\u0002\f\u0002F\t\u0002\u0003\u0002"+
		"H\b\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0003\u0003"+
		"N\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004"+
		"T\b\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0003\u0006[\b\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0005\u0006c\b\u0006\n\u0006\f\u0006f\t\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007r\b\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0005\u0007\u0080\b\u0007\n\u0007\f\u0007\u0083\t\u0007\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0003\n\u008e"+
		"\b\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0000"+
		"\u0002\f\u000e\u000e\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014"+
		"\u0016\u0018\u001a\u0000\u0003\u0002\u0000\u0003\u0004\u0007\n\u0001\u0000"+
		"\u000e\u0011\u0002\u0000\u0016\u0016\u0018\u0018\u00a1\u0000!\u0001\u0000"+
		"\u0000\u0000\u0002;\u0001\u0000\u0000\u0000\u0004=\u0001\u0000\u0000\u0000"+
		"\u0006M\u0001\u0000\u0000\u0000\bS\u0001\u0000\u0000\u0000\nU\u0001\u0000"+
		"\u0000\u0000\fZ\u0001\u0000\u0000\u0000\u000eq\u0001\u0000\u0000\u0000"+
		"\u0010\u0084\u0001\u0000\u0000\u0000\u0012\u0089\u0001\u0000\u0000\u0000"+
		"\u0014\u008d\u0001\u0000\u0000\u0000\u0016\u008f\u0001\u0000\u0000\u0000"+
		"\u0018\u0091\u0001\u0000\u0000\u0000\u001a\u0093\u0001\u0000\u0000\u0000"+
		"\u001c \u0003\u0006\u0003\u0000\u001d \u0003\f\u0006\u0000\u001e \u0003"+
		"\u0002\u0001\u0000\u001f\u001c\u0001\u0000\u0000\u0000\u001f\u001d\u0001"+
		"\u0000\u0000\u0000\u001f\u001e\u0001\u0000\u0000\u0000 #\u0001\u0000\u0000"+
		"\u0000!\u001f\u0001\u0000\u0000\u0000!\"\u0001\u0000\u0000\u0000\"$\u0001"+
		"\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000$%\u0005\u0000\u0000\u0001"+
		"%\u0001\u0001\u0000\u0000\u0000&<\u0005\u0018\u0000\u0000\')\u0003\u0016"+
		"\u000b\u0000(\'\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000)*\u0001"+
		"\u0000\u0000\u0000*.\u0003\u0004\u0002\u0000+-\u0003\u0006\u0003\u0000"+
		",+\u0001\u0000\u0000\u0000-0\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000"+
		"\u0000./\u0001\u0000\u0000\u0000/<\u0001\u0000\u0000\u00000.\u0001\u0000"+
		"\u0000\u000013\u0003\u0004\u0002\u000024\u0003\u0016\u000b\u000032\u0001"+
		"\u0000\u0000\u000034\u0001\u0000\u0000\u000048\u0001\u0000\u0000\u0000"+
		"57\u0003\u0006\u0003\u000065\u0001\u0000\u0000\u00007:\u0001\u0000\u0000"+
		"\u000086\u0001\u0000\u0000\u000089\u0001\u0000\u0000\u00009<\u0001\u0000"+
		"\u0000\u0000:8\u0001\u0000\u0000\u0000;&\u0001\u0000\u0000\u0000;(\u0001"+
		"\u0000\u0000\u0000;1\u0001\u0000\u0000\u0000<\u0003\u0001\u0000\u0000"+
		"\u0000=G\u0005\u0001\u0000\u0000>D\u0003\b\u0004\u0000?@\u0003\n\u0005"+
		"\u0000@A\u0003\b\u0004\u0000AC\u0001\u0000\u0000\u0000B?\u0001\u0000\u0000"+
		"\u0000CF\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000DE\u0001\u0000"+
		"\u0000\u0000EH\u0001\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000G>\u0001"+
		"\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000HI\u0001\u0000\u0000\u0000"+
		"IJ\u0005\u0002\u0000\u0000J\u0005\u0001\u0000\u0000\u0000KN\u0003\u0018"+
		"\f\u0000LN\u0003\u001a\r\u0000MK\u0001\u0000\u0000\u0000ML\u0001\u0000"+
		"\u0000\u0000N\u0007\u0001\u0000\u0000\u0000OT\u0005\u0018\u0000\u0000"+
		"PT\u0003\u0002\u0001\u0000QT\u0003\f\u0006\u0000RT\u0003\u000e\u0007\u0000"+
		"SO\u0001\u0000\u0000\u0000SP\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000"+
		"\u0000SR\u0001\u0000\u0000\u0000T\t\u0001\u0000\u0000\u0000UV\u0007\u0000"+
		"\u0000\u0000V\u000b\u0001\u0000\u0000\u0000WX\u0006\u0006\uffff\uffff"+
		"\u0000X[\u0005\u0018\u0000\u0000Y[\u0005\u0015\u0000\u0000ZW\u0001\u0000"+
		"\u0000\u0000ZY\u0001\u0000\u0000\u0000[d\u0001\u0000\u0000\u0000\\]\n"+
		"\u0002\u0000\u0000]^\u0005\u0005\u0000\u0000^c\u0003\u000e\u0007\u0000"+
		"_`\n\u0001\u0000\u0000`a\u0005\u0006\u0000\u0000ac\u0003\u000e\u0007\u0000"+
		"b\\\u0001\u0000\u0000\u0000b_\u0001\u0000\u0000\u0000cf\u0001\u0000\u0000"+
		"\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000e\r\u0001\u0000"+
		"\u0000\u0000fd\u0001\u0000\u0000\u0000gh\u0006\u0007\uffff\uffff\u0000"+
		"hr\u0005\u0018\u0000\u0000ir\u0005\u0017\u0000\u0000jk\u0005\u0019\u0000"+
		"\u0000kl\u0005\f\u0000\u0000lr\u0003\u000e\u0007\u0005mn\u0003\f\u0006"+
		"\u0000no\u0005\u0006\u0000\u0000op\u0003\f\u0006\u0000pr\u0001\u0000\u0000"+
		"\u0000qg\u0001\u0000\u0000\u0000qi\u0001\u0000\u0000\u0000qj\u0001\u0000"+
		"\u0000\u0000qm\u0001\u0000\u0000\u0000r\u0081\u0001\u0000\u0000\u0000"+
		"st\n\u0003\u0000\u0000tu\u0005\u0005\u0000\u0000u\u0080\u0003\u000e\u0007"+
		"\u0004vw\n\u0002\u0000\u0000wx\u0005\u0006\u0000\u0000x\u0080\u0003\u000e"+
		"\u0007\u0003yz\n\u0006\u0000\u0000z{\u0005\f\u0000\u0000{\u0080\u0005"+
		"\u0019\u0000\u0000|}\n\u0004\u0000\u0000}~\u0005\r\u0000\u0000~\u0080"+
		"\u0005\u0019\u0000\u0000\u007fs\u0001\u0000\u0000\u0000\u007fv\u0001\u0000"+
		"\u0000\u0000\u007fy\u0001\u0000\u0000\u0000\u007f|\u0001\u0000\u0000\u0000"+
		"\u0080\u0083\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000\u0000\u0000"+
		"\u0081\u0082\u0001\u0000\u0000\u0000\u0082\u000f\u0001\u0000\u0000\u0000"+
		"\u0083\u0081\u0001\u0000\u0000\u0000\u0084\u0085\u0003\u0012\t\u0000\u0085"+
		"\u0086\u0005\u0018\u0000\u0000\u0086\u0087\u0005\u000b\u0000\u0000\u0087"+
		"\u0088\u0003\u0014\n\u0000\u0088\u0011\u0001\u0000\u0000\u0000\u0089\u008a"+
		"\u0007\u0001\u0000\u0000\u008a\u0013\u0001\u0000\u0000\u0000\u008b\u008e"+
		"\u0003\u0002\u0001\u0000\u008c\u008e\u0003\f\u0006\u0000\u008d\u008b\u0001"+
		"\u0000\u0000\u0000\u008d\u008c\u0001\u0000\u0000\u0000\u008e\u0015\u0001"+
		"\u0000\u0000\u0000\u008f\u0090\u0007\u0002\u0000\u0000\u0090\u0017\u0001"+
		"\u0000\u0000\u0000\u0091\u0092\u0005\u0012\u0000\u0000\u0092\u0019\u0001"+
		"\u0000\u0000\u0000\u0093\u0094\u0005\u0013\u0000\u0000\u0094\u001b\u0001"+
		"\u0000\u0000\u0000\u0012\u001f!(.38;DGMSZbdq\u007f\u0081\u008d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}