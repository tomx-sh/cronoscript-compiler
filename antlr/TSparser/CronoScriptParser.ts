// Generated from CronoScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CronoScriptListener } from "./CronoScriptListener";
import { CronoScriptVisitor } from "./CronoScriptVisitor";


export class CronoScriptParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly PLUS = 27;
	public static readonly MINUS = 28;
	public static readonly TO = 29;
	public static readonly TOPLUS = 30;
	public static readonly DELAY = 31;
	public static readonly DELAYPLUS = 32;
	public static readonly DELAYMINUS = 33;
	public static readonly EQUALS = 34;
	public static readonly MULT = 35;
	public static readonly DIV = 36;
	public static readonly STRING_KW = 37;
	public static readonly DATE_KW = 38;
	public static readonly SPAN_KW = 39;
	public static readonly DURATION_KW = 40;
	public static readonly EVENT_KW = 41;
	public static readonly TASK_KW = 42;
	public static readonly TIMELINE_KW = 43;
	public static readonly DATE = 44;
	public static readonly OPTION = 45;
	public static readonly TAG = 46;
	public static readonly OPTION_KEY = 47;
	public static readonly ID = 48;
	public static readonly INT = 49;
	public static readonly STRING = 50;
	public static readonly COMMENT = 51;
	public static readonly WS = 52;
	public static readonly RULE_cronodile = 0;
	public static readonly RULE_timeline = 1;
	public static readonly RULE_element = 2;
	public static readonly RULE_task = 3;
	public static readonly RULE_event = 4;
	public static readonly RULE_span = 5;
	public static readonly RULE_date = 6;
	public static readonly RULE_simpleDate = 7;
	public static readonly RULE_delayedDate = 8;
	public static readonly RULE_duration = 9;
	public static readonly RULE_timeUnit = 10;
	public static readonly RULE_variableDeclaration = 11;
	public static readonly RULE_type = 12;
	public static readonly RULE_expression = 13;
	public static readonly RULE_string = 14;
	public static readonly RULE_option = 15;
	public static readonly RULE_tag = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"cronodile", "timeline", "element", "task", "event", "span", "date", "simpleDate", 
		"delayedDate", "duration", "timeUnit", "variableDeclaration", "type", 
		"expression", "string", "option", "tag",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "','", "']'", "'('", "')'", "'s'", "'second'", "'seconds'", 
		"'min'", "'minute'", "'minutes'", "'h'", "'hour'", "'hours'", "'d'", "'day'", 
		"'days'", "'w'", "'week'", "'weeks'", "'m'", "'month'", "'months'", "'y'", 
		"'year'", "'years'", "'+'", "'-'", "'>'", "'>+'", "'...'", undefined, 
		undefined, "'='", "'*'", "'/'", "'string'", "'date'", "'span'", "'duration'", 
		"'event'", "'task'", "'timeline'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "PLUS", 
		"MINUS", "TO", "TOPLUS", "DELAY", "DELAYPLUS", "DELAYMINUS", "EQUALS", 
		"MULT", "DIV", "STRING_KW", "DATE_KW", "SPAN_KW", "DURATION_KW", "EVENT_KW", 
		"TASK_KW", "TIMELINE_KW", "DATE", "OPTION", "TAG", "OPTION_KEY", "ID", 
		"INT", "STRING", "COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CronoScriptParser._LITERAL_NAMES, CronoScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CronoScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CronoScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return CronoScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CronoScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CronoScriptParser._ATN, this);
	}
	// @RuleVersion(0)
	public cronodile(): CronodileContext {
		let _localctx: CronodileContext = new CronodileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CronoScriptParser.RULE_cronodile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CronoScriptParser.OPTION || _la === CronoScriptParser.TAG) {
				{
				this.state = 36;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CronoScriptParser.OPTION:
					{
					this.state = 34;
					this.option();
					}
					break;
				case CronoScriptParser.TAG:
					{
					this.state = 35;
					this.tag();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CronoScriptParser.T__0 || _la === CronoScriptParser.T__3 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (CronoScriptParser.STRING_KW - 37)) | (1 << (CronoScriptParser.DATE_KW - 37)) | (1 << (CronoScriptParser.SPAN_KW - 37)) | (1 << (CronoScriptParser.DURATION_KW - 37)) | (1 << (CronoScriptParser.EVENT_KW - 37)) | (1 << (CronoScriptParser.TASK_KW - 37)) | (1 << (CronoScriptParser.TIMELINE_KW - 37)) | (1 << (CronoScriptParser.ID - 37)) | (1 << (CronoScriptParser.STRING - 37)))) !== 0)) {
				{
				this.state = 45;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 41;
					this.variableDeclaration();
					}
					break;

				case 2:
					{
					this.state = 42;
					this.timeline();
					}
					break;

				case 3:
					{
					this.state = 43;
					this.task();
					}
					break;

				case 4:
					{
					this.state = 44;
					this.event();
					}
					break;
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
			this.match(CronoScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeline(): TimelineContext {
		let _localctx: TimelineContext = new TimelineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CronoScriptParser.RULE_timeline);
		let _la: number;
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CronoScriptParser.ID || _la === CronoScriptParser.STRING) {
					{
					this.state = 53;
					this.string();
					}
				}

				this.state = 56;
				this.match(CronoScriptParser.T__0);
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CronoScriptParser.T__0 || _la === CronoScriptParser.T__3 || _la === CronoScriptParser.ID || _la === CronoScriptParser.STRING) {
					{
					this.state = 57;
					this.element();
					this.state = 62;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CronoScriptParser.T__1) {
						{
						{
						this.state = 58;
						this.match(CronoScriptParser.T__1);
						this.state = 59;
						this.element();
						}
						}
						this.state = 64;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 67;
				this.match(CronoScriptParser.T__2);
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CronoScriptParser.OPTION || _la === CronoScriptParser.TAG) {
					{
					this.state = 70;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CronoScriptParser.OPTION:
						{
						this.state = 68;
						this.option();
						}
						break;
					case CronoScriptParser.TAG:
						{
						this.state = 69;
						this.tag();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 74;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CronoScriptParser.RULE_element);
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 77;
				this.timeline();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 78;
				this.task();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 79;
				this.event();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public task(): TaskContext {
		let _localctx: TaskContext = new TaskContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CronoScriptParser.RULE_task);
		let _la: number;
		try {
			this.state = 96;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CronoScriptParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.match(CronoScriptParser.ID);
				}
				break;
			case CronoScriptParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.match(CronoScriptParser.T__3);
				this.state = 84;
				this.span();
				this.state = 85;
				this.match(CronoScriptParser.T__4);
				this.state = 87;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 86;
					this.string();
					}
					break;
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CronoScriptParser.OPTION || _la === CronoScriptParser.TAG) {
					{
					this.state = 91;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CronoScriptParser.OPTION:
						{
						this.state = 89;
						this.option();
						}
						break;
					case CronoScriptParser.TAG:
						{
						this.state = 90;
						this.tag();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 95;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event(): EventContext {
		let _localctx: EventContext = new EventContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CronoScriptParser.RULE_event);
		let _la: number;
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CronoScriptParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 98;
				this.match(CronoScriptParser.ID);
				}
				break;
			case CronoScriptParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 99;
				this.match(CronoScriptParser.T__3);
				this.state = 100;
				this.date();
				this.state = 101;
				this.match(CronoScriptParser.T__4);
				this.state = 103;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 102;
					this.string();
					}
					break;
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CronoScriptParser.OPTION || _la === CronoScriptParser.TAG) {
					{
					this.state = 107;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CronoScriptParser.OPTION:
						{
						this.state = 105;
						this.option();
						}
						break;
					case CronoScriptParser.TAG:
						{
						this.state = 106;
						this.tag();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public span(): SpanContext {
		let _localctx: SpanContext = new SpanContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CronoScriptParser.RULE_span);
		try {
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 114;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 115;
				this.date();
				this.state = 116;
				this.match(CronoScriptParser.TO);
				this.state = 117;
				this.date();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 119;
				this.date();
				this.state = 120;
				this.match(CronoScriptParser.TOPLUS);
				this.state = 121;
				this.duration(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CronoScriptParser.RULE_date);
		try {
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 126;
				this.simpleDate(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 127;
				this.delayedDate();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public simpleDate(): SimpleDateContext;
	public simpleDate(_p: number): SimpleDateContext;
	// @RuleVersion(0)
	public simpleDate(_p?: number): SimpleDateContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SimpleDateContext = new SimpleDateContext(this._ctx, _parentState);
		let _prevctx: SimpleDateContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, CronoScriptParser.RULE_simpleDate, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CronoScriptParser.ID:
				{
				this.state = 131;
				this.match(CronoScriptParser.ID);
				}
				break;
			case CronoScriptParser.DATE:
				{
				this.state = 132;
				this.match(CronoScriptParser.DATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 143;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 141;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						_localctx = new SimpleDateContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CronoScriptParser.RULE_simpleDate);
						this.state = 135;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 136;
						this.match(CronoScriptParser.PLUS);
						this.state = 137;
						this.duration(0);
						}
						break;

					case 2:
						{
						_localctx = new SimpleDateContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CronoScriptParser.RULE_simpleDate);
						this.state = 138;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 139;
						this.match(CronoScriptParser.MINUS);
						this.state = 140;
						this.duration(0);
						}
						break;
					}
					}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delayedDate(): DelayedDateContext {
		let _localctx: DelayedDateContext = new DelayedDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CronoScriptParser.RULE_delayedDate);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 147;
				this.simpleDate(0);
				this.state = 148;
				this.match(CronoScriptParser.DELAY);
				this.state = 149;
				this.simpleDate(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 151;
				this.simpleDate(0);
				this.state = 152;
				this.match(CronoScriptParser.DELAYPLUS);
				this.state = 153;
				this.duration(0);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 155;
				this.simpleDate(0);
				this.state = 156;
				this.match(CronoScriptParser.DELAYMINUS);
				this.state = 157;
				this.duration(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public duration(): DurationContext;
	public duration(_p: number): DurationContext;
	// @RuleVersion(0)
	public duration(_p?: number): DurationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DurationContext = new DurationContext(this._ctx, _parentState);
		let _prevctx: DurationContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, CronoScriptParser.RULE_duration, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 162;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				{
				this.state = 163;
				this.match(CronoScriptParser.INT);
				this.state = 164;
				this.timeUnit();
				}
				break;

			case 3:
				{
				this.state = 165;
				this.match(CronoScriptParser.INT);
				this.state = 166;
				this.match(CronoScriptParser.MULT);
				this.state = 167;
				this.duration(5);
				}
				break;

			case 4:
				{
				this.state = 168;
				this.date();
				this.state = 169;
				this.match(CronoScriptParser.MINUS);
				this.state = 170;
				this.date();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 188;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 186;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
					case 1:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CronoScriptParser.RULE_duration);
						this.state = 174;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 175;
						this.match(CronoScriptParser.PLUS);
						this.state = 176;
						this.duration(4);
						}
						break;

					case 2:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CronoScriptParser.RULE_duration);
						this.state = 177;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 178;
						this.match(CronoScriptParser.MINUS);
						this.state = 179;
						this.duration(3);
						}
						break;

					case 3:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CronoScriptParser.RULE_duration);
						this.state = 180;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 181;
						this.match(CronoScriptParser.MULT);
						this.state = 182;
						this.match(CronoScriptParser.INT);
						}
						break;

					case 4:
						{
						_localctx = new DurationContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CronoScriptParser.RULE_duration);
						this.state = 183;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 184;
						this.match(CronoScriptParser.DIV);
						this.state = 185;
						this.match(CronoScriptParser.INT);
						}
						break;
					}
					}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeUnit(): TimeUnitContext {
		let _localctx: TimeUnitContext = new TimeUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CronoScriptParser.RULE_timeUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.T__5) | (1 << CronoScriptParser.T__6) | (1 << CronoScriptParser.T__7) | (1 << CronoScriptParser.T__8) | (1 << CronoScriptParser.T__9) | (1 << CronoScriptParser.T__10) | (1 << CronoScriptParser.T__11) | (1 << CronoScriptParser.T__12) | (1 << CronoScriptParser.T__13) | (1 << CronoScriptParser.T__14) | (1 << CronoScriptParser.T__15) | (1 << CronoScriptParser.T__16) | (1 << CronoScriptParser.T__17) | (1 << CronoScriptParser.T__18) | (1 << CronoScriptParser.T__19) | (1 << CronoScriptParser.T__20) | (1 << CronoScriptParser.T__21) | (1 << CronoScriptParser.T__22) | (1 << CronoScriptParser.T__23) | (1 << CronoScriptParser.T__24) | (1 << CronoScriptParser.T__25))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CronoScriptParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.type();
			this.state = 194;
			this.match(CronoScriptParser.ID);
			this.state = 195;
			this.match(CronoScriptParser.EQUALS);
			this.state = 196;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CronoScriptParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			_la = this._input.LA(1);
			if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (CronoScriptParser.STRING_KW - 37)) | (1 << (CronoScriptParser.DATE_KW - 37)) | (1 << (CronoScriptParser.SPAN_KW - 37)) | (1 << (CronoScriptParser.DURATION_KW - 37)) | (1 << (CronoScriptParser.EVENT_KW - 37)) | (1 << (CronoScriptParser.TASK_KW - 37)) | (1 << (CronoScriptParser.TIMELINE_KW - 37)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CronoScriptParser.RULE_expression);
		try {
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 200;
				this.timeline();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 201;
				this.task();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 202;
				this.event();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 203;
				this.span();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 204;
				this.date();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 205;
				this.duration(0);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 206;
				this.string();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CronoScriptParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			_la = this._input.LA(1);
			if (!(_la === CronoScriptParser.ID || _la === CronoScriptParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public option(): OptionContext {
		let _localctx: OptionContext = new OptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CronoScriptParser.RULE_option);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(CronoScriptParser.OPTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CronoScriptParser.RULE_tag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(CronoScriptParser.TAG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 7:
			return this.simpleDate_sempred(_localctx as SimpleDateContext, predIndex);

		case 9:
			return this.duration_sempred(_localctx as DurationContext, predIndex);
		}
		return true;
	}
	private simpleDate_sempred(_localctx: SimpleDateContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private duration_sempred(_localctx: DurationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 6);

		case 5:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x036\xDA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x03\x02\x07\x02\'\n\x02\f\x02\x0E\x02*\v\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x05\x039\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03?\n\x03" +
		"\f\x03\x0E\x03B\v\x03\x05\x03D\n\x03\x03\x03\x03\x03\x03\x03\x07\x03I" +
		"\n\x03\f\x03\x0E\x03L\v\x03\x05\x03N\n\x03\x03\x04\x03\x04\x03\x04\x05" +
		"\x04S\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05Z\n\x05\x03" +
		"\x05\x03\x05\x07\x05^\n\x05\f\x05\x0E\x05a\v\x05\x05\x05c\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06j\n\x06\x03\x06\x03\x06\x07\x06" +
		"n\n\x06\f\x06\x0E\x06q\v\x06\x05\x06s\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07~\n\x07\x03\b\x03" +
		"\b\x03\b\x05\b\x83\n\b\x03\t\x03\t\x03\t\x05\t\x88\n\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x07\t\x90\n\t\f\t\x0E\t\x93\v\t\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA2" +
		"\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x05\v\xAF\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x07\v\xBD\n\v\f\v\x0E\v\xC0\v\v\x03\f\x03\f\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\xD2\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x02\x02\x04\x10\x14\x13\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x05\x03\x02\b\x1C\x03\x02\'-\x04\x02" +
		"2244\x02\xF5\x02(\x03\x02\x02\x02\x04M\x03\x02\x02\x02\x06R\x03\x02\x02" +
		"\x02\bb\x03\x02\x02\x02\nr\x03\x02\x02\x02\f}\x03\x02\x02\x02\x0E\x82" +
		"\x03\x02\x02\x02\x10\x87\x03\x02\x02\x02\x12\xA1\x03\x02\x02\x02\x14\xAE" +
		"\x03\x02\x02\x02\x16\xC1\x03\x02\x02\x02\x18\xC3\x03\x02\x02\x02\x1A\xC8" +
		"\x03\x02\x02\x02\x1C\xD1\x03\x02\x02\x02\x1E\xD3\x03\x02\x02\x02 \xD5" +
		"\x03\x02\x02\x02\"\xD7\x03\x02\x02\x02$\'\x05 \x11\x02%\'\x05\"\x12\x02" +
		"&$\x03\x02\x02\x02&%\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02" +
		"\x02()\x03\x02\x02\x02)1\x03\x02\x02\x02*(\x03\x02\x02\x02+0\x05\x18\r" +
		"\x02,0\x05\x04\x03\x02-0\x05\b\x05\x02.0\x05\n\x06\x02/+\x03\x02\x02\x02" +
		"/,\x03\x02\x02\x02/-\x03\x02\x02\x02/.\x03\x02\x02\x0203\x03\x02\x02\x02" +
		"1/\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0231\x03\x02\x02\x02" +
		"45\x07\x02\x02\x035\x03\x03\x02\x02\x026N\x072\x02\x0279\x05\x1E\x10\x02" +
		"87\x03\x02\x02\x0289\x03\x02\x02\x029:\x03\x02\x02\x02:C\x07\x03\x02\x02" +
		";@\x05\x06\x04\x02<=\x07\x04\x02\x02=?\x05\x06\x04\x02><\x03\x02\x02\x02" +
		"?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AD\x03\x02\x02\x02" +
		"B@\x03\x02\x02\x02C;\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02\x02" +
		"EJ\x07\x05\x02\x02FI\x05 \x11\x02GI\x05\"\x12\x02HF\x03\x02\x02\x02HG" +
		"\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"KN\x03\x02\x02\x02LJ\x03\x02\x02\x02M6\x03\x02\x02\x02M8\x03\x02\x02\x02" +
		"N\x05\x03\x02\x02\x02OS\x05\x04\x03\x02PS\x05\b\x05\x02QS\x05\n\x06\x02" +
		"RO\x03\x02\x02\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02S\x07\x03\x02\x02" +
		"\x02Tc\x072\x02\x02UV\x07\x06\x02\x02VW\x05\f\x07\x02WY\x07\x07\x02\x02" +
		"XZ\x05\x1E\x10\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z_\x03\x02\x02\x02" +
		"[^\x05 \x11\x02\\^\x05\"\x12\x02][\x03\x02\x02\x02]\\\x03\x02\x02\x02" +
		"^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`c\x03\x02\x02\x02" +
		"a_\x03\x02\x02\x02bT\x03\x02\x02\x02bU\x03\x02\x02\x02c\t\x03\x02\x02" +
		"\x02ds\x072\x02\x02ef\x07\x06\x02\x02fg\x05\x0E\b\x02gi\x07\x07\x02\x02" +
		"hj\x05\x1E\x10\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02jo\x03\x02\x02\x02" +
		"kn\x05 \x11\x02ln\x05\"\x12\x02mk\x03\x02\x02\x02ml\x03\x02\x02\x02nq" +
		"\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02ps\x03\x02\x02\x02" +
		"qo\x03\x02\x02\x02rd\x03\x02\x02\x02re\x03\x02\x02\x02s\v\x03\x02\x02" +
		"\x02t~\x072\x02\x02uv\x05\x0E\b\x02vw\x07\x1F\x02\x02wx\x05\x0E\b\x02" +
		"x~\x03\x02\x02\x02yz\x05\x0E\b\x02z{\x07 \x02\x02{|\x05\x14\v\x02|~\x03" +
		"\x02\x02\x02}t\x03\x02\x02\x02}u\x03\x02\x02\x02}y\x03\x02\x02\x02~\r" +
		"\x03\x02\x02\x02\x7F\x83\x072\x02\x02\x80\x83\x05\x10\t\x02\x81\x83\x05" +
		"\x12\n\x02\x82\x7F\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82\x81\x03" +
		"\x02\x02\x02\x83\x0F\x03\x02\x02\x02\x84\x85\b\t\x01\x02\x85\x88\x072" +
		"\x02\x02\x86\x88\x07.\x02\x02\x87\x84\x03\x02\x02\x02\x87\x86\x03\x02" +
		"\x02\x02\x88\x91\x03\x02\x02\x02\x89\x8A\f\x04\x02\x02\x8A\x8B\x07\x1D" +
		"\x02\x02\x8B\x90\x05\x14\v\x02\x8C\x8D\f\x03\x02\x02\x8D\x8E\x07\x1E\x02" +
		"\x02\x8E\x90\x05\x14\v\x02\x8F\x89\x03\x02\x02\x02\x8F\x8C\x03\x02\x02" +
		"\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02" +
		"\x02\x92\x11\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\xA2\x072\x02" +
		"\x02\x95\x96\x05\x10\t\x02\x96\x97\x07!\x02\x02\x97\x98\x05\x10\t\x02" +
		"\x98\xA2\x03\x02\x02\x02\x99\x9A\x05\x10\t\x02\x9A\x9B\x07\"\x02\x02\x9B" +
		"\x9C\x05\x14\v\x02\x9C\xA2\x03\x02\x02\x02\x9D\x9E\x05\x10\t\x02\x9E\x9F" +
		"\x07#\x02\x02\x9F\xA0\x05\x14\v\x02\xA0\xA2\x03\x02\x02\x02\xA1\x94\x03" +
		"\x02\x02\x02\xA1\x95\x03\x02\x02\x02\xA1\x99\x03\x02\x02\x02\xA1\x9D\x03" +
		"\x02\x02\x02\xA2\x13\x03\x02\x02\x02\xA3\xA4\b\v\x01\x02\xA4\xAF\x072" +
		"\x02\x02\xA5\xA6\x073\x02\x02\xA6\xAF\x05\x16\f\x02\xA7\xA8\x073\x02\x02" +
		"\xA8\xA9\x07%\x02\x02\xA9\xAF\x05\x14\v\x07\xAA\xAB\x05\x0E\b\x02\xAB" +
		"\xAC\x07\x1E\x02\x02\xAC\xAD\x05\x0E\b\x02\xAD\xAF\x03\x02\x02\x02\xAE" +
		"\xA3\x03\x02\x02\x02\xAE\xA5\x03\x02\x02\x02\xAE\xA7\x03\x02\x02\x02\xAE" +
		"\xAA\x03\x02\x02\x02\xAF\xBE\x03\x02\x02\x02\xB0\xB1\f\x05\x02\x02\xB1" +
		"\xB2\x07\x1D\x02\x02\xB2\xBD\x05\x14\v\x06\xB3\xB4\f\x04\x02\x02\xB4\xB5" +
		"\x07\x1E\x02\x02\xB5\xBD\x05\x14\v\x05\xB6\xB7\f\b\x02\x02\xB7\xB8\x07" +
		"%\x02\x02\xB8\xBD\x073\x02\x02\xB9\xBA\f\x06\x02\x02\xBA\xBB\x07&\x02" +
		"\x02\xBB\xBD\x073\x02\x02\xBC\xB0\x03\x02\x02\x02\xBC\xB3\x03\x02\x02" +
		"\x02\xBC\xB6\x03\x02\x02\x02\xBC\xB9\x03\x02\x02\x02\xBD\xC0\x03\x02\x02" +
		"\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\x15\x03\x02\x02" +
		"\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\t\x02\x02\x02\xC2\x17\x03\x02\x02" +
		"\x02\xC3\xC4\x05\x1A\x0E\x02\xC4\xC5\x072\x02\x02\xC5\xC6\x07$\x02\x02" +
		"\xC6\xC7\x05\x1C\x0F\x02\xC7\x19\x03\x02\x02\x02\xC8\xC9\t\x03\x02\x02" +
		"\xC9\x1B\x03\x02\x02\x02\xCA\xD2\x05\x04\x03\x02\xCB\xD2\x05\b\x05\x02" +
		"\xCC\xD2\x05\n\x06\x02\xCD\xD2\x05\f\x07\x02\xCE\xD2\x05\x0E\b\x02\xCF" +
		"\xD2\x05\x14\v\x02\xD0\xD2\x05\x1E\x10\x02\xD1\xCA\x03\x02\x02\x02\xD1" +
		"\xCB\x03\x02\x02\x02\xD1\xCC\x03\x02\x02\x02\xD1\xCD\x03\x02\x02\x02\xD1" +
		"\xCE\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2" +
		"\x1D\x03\x02\x02\x02\xD3\xD4\t\x04\x02\x02\xD4\x1F\x03\x02\x02\x02\xD5" +
		"\xD6\x07/\x02\x02\xD6!\x03\x02\x02\x02\xD7\xD8\x070\x02\x02\xD8#\x03\x02" +
		"\x02\x02\x1F&(/18@CHJMRY]_bimor}\x82\x87\x8F\x91\xA1\xAE\xBC\xBE\xD1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CronoScriptParser.__ATN) {
			CronoScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CronoScriptParser._serializedATN));
		}

		return CronoScriptParser.__ATN;
	}

}

export class CronodileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CronoScriptParser.EOF, 0); }
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public timeline(): TimelineContext[];
	public timeline(i: number): TimelineContext;
	public timeline(i?: number): TimelineContext | TimelineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimelineContext);
		} else {
			return this.getRuleContext(i, TimelineContext);
		}
	}
	public task(): TaskContext[];
	public task(i: number): TaskContext;
	public task(i?: number): TaskContext | TaskContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TaskContext);
		} else {
			return this.getRuleContext(i, TaskContext);
		}
	}
	public event(): EventContext[];
	public event(i: number): EventContext;
	public event(i?: number): EventContext | EventContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventContext);
		} else {
			return this.getRuleContext(i, EventContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_cronodile; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterCronodile) {
			listener.enterCronodile(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitCronodile) {
			listener.exitCronodile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitCronodile) {
			return visitor.visitCronodile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimelineContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_timeline; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterTimeline) {
			listener.enterTimeline(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitTimeline) {
			listener.exitTimeline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitTimeline) {
			return visitor.visitTimeline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public timeline(): TimelineContext | undefined {
		return this.tryGetRuleContext(0, TimelineContext);
	}
	public task(): TaskContext | undefined {
		return this.tryGetRuleContext(0, TaskContext);
	}
	public event(): EventContext | undefined {
		return this.tryGetRuleContext(0, EventContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_element; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public span(): SpanContext | undefined {
		return this.tryGetRuleContext(0, SpanContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_task; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterTask) {
			listener.enterTask(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitTask) {
			listener.exitTask(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitTask) {
			return visitor.visitTask(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_event; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterEvent) {
			listener.enterEvent(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitEvent) {
			listener.exitEvent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitEvent) {
			return visitor.visitEvent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpanContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public date(): DateContext[];
	public date(i: number): DateContext;
	public date(i?: number): DateContext | DateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateContext);
		} else {
			return this.getRuleContext(i, DateContext);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.TO, 0); }
	public TOPLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.TOPLUS, 0); }
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_span; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterSpan) {
			listener.enterSpan(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitSpan) {
			listener.exitSpan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitSpan) {
			return visitor.visitSpan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public simpleDate(): SimpleDateContext | undefined {
		return this.tryGetRuleContext(0, SimpleDateContext);
	}
	public delayedDate(): DelayedDateContext | undefined {
		return this.tryGetRuleContext(0, DelayedDateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_date; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitDate) {
			return visitor.visitDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleDateContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DATE, 0); }
	public simpleDate(): SimpleDateContext | undefined {
		return this.tryGetRuleContext(0, SimpleDateContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.PLUS, 0); }
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_simpleDate; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterSimpleDate) {
			listener.enterSimpleDate(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitSimpleDate) {
			listener.exitSimpleDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitSimpleDate) {
			return visitor.visitSimpleDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelayedDateContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public simpleDate(): SimpleDateContext[];
	public simpleDate(i: number): SimpleDateContext;
	public simpleDate(i?: number): SimpleDateContext | SimpleDateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleDateContext);
		} else {
			return this.getRuleContext(i, SimpleDateContext);
		}
	}
	public DELAY(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DELAY, 0); }
	public DELAYPLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DELAYPLUS, 0); }
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public DELAYMINUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DELAYMINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_delayedDate; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterDelayedDate) {
			listener.enterDelayedDate(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitDelayedDate) {
			listener.exitDelayedDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitDelayedDate) {
			return visitor.visitDelayedDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DurationContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.INT, 0); }
	public timeUnit(): TimeUnitContext | undefined {
		return this.tryGetRuleContext(0, TimeUnitContext);
	}
	public duration(): DurationContext[];
	public duration(i: number): DurationContext;
	public duration(i?: number): DurationContext | DurationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DurationContext);
		} else {
			return this.getRuleContext(i, DurationContext);
		}
	}
	public MULT(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DIV, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.MINUS, 0); }
	public date(): DateContext[];
	public date(i: number): DateContext;
	public date(i?: number): DateContext | DateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateContext);
		} else {
			return this.getRuleContext(i, DateContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_duration; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterDuration) {
			listener.enterDuration(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitDuration) {
			listener.exitDuration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitDuration) {
			return visitor.visitDuration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeUnitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_timeUnit; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterTimeUnit) {
			listener.enterTimeUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitTimeUnit) {
			listener.exitTimeUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitTimeUnit) {
			return visitor.visitTimeUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(CronoScriptParser.ID, 0); }
	public EQUALS(): TerminalNode { return this.getToken(CronoScriptParser.EQUALS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public STRING_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.STRING_KW, 0); }
	public DATE_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DATE_KW, 0); }
	public SPAN_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.SPAN_KW, 0); }
	public DURATION_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DURATION_KW, 0); }
	public EVENT_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.EVENT_KW, 0); }
	public TASK_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.TASK_KW, 0); }
	public TIMELINE_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.TIMELINE_KW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_type; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public timeline(): TimelineContext | undefined {
		return this.tryGetRuleContext(0, TimelineContext);
	}
	public task(): TaskContext | undefined {
		return this.tryGetRuleContext(0, TaskContext);
	}
	public event(): EventContext | undefined {
		return this.tryGetRuleContext(0, EventContext);
	}
	public span(): SpanContext | undefined {
		return this.tryGetRuleContext(0, SpanContext);
	}
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_expression; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_string; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public OPTION(): TerminalNode { return this.getToken(CronoScriptParser.OPTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_option; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterOption) {
			listener.enterOption(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitOption) {
			listener.exitOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitOption) {
			return visitor.visitOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	public TAG(): TerminalNode { return this.getToken(CronoScriptParser.TAG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_tag; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterTag) {
			listener.enterTag(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitTag) {
			listener.exitTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitTag) {
			return visitor.visitTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


