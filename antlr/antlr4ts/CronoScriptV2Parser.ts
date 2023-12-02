// Generated from CronoScriptV2.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { CronoScriptV2Listener } from "./CronoScriptV2Listener";

export class CronoScriptV2Parser extends Parser {
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
	public static readonly TO = 28;
	public static readonly TOPLUS = 29;
	public static readonly DELAY = 30;
	public static readonly DELAYPLUS = 31;
	public static readonly EQUALS = 32;
	public static readonly DATE = 33;
	public static readonly INT = 34;
	public static readonly ID = 35;
	public static readonly NEWLINE = 36;
	public static readonly TAB = 37;
	public static readonly LABEL = 38;
	public static readonly WS = 39;
	public static readonly RULE_planning = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_element = 2;
	public static readonly RULE_milestone = 3;
	public static readonly RULE_task = 4;
	public static readonly RULE_label = 5;
	public static readonly RULE_dateVariableDeclaration = 6;
	public static readonly RULE_spanVariableDeclaration = 7;
	public static readonly RULE_timeVariableDeclaration = 8;
	public static readonly RULE_span = 9;
	public static readonly RULE_date = 10;
	public static readonly RULE_time = 11;
	public static readonly RULE_timeUnit = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"planning", "line", "element", "milestone", "task", "label", "dateVariableDeclaration", 
		"spanVariableDeclaration", "timeVariableDeclaration", "span", "date", 
		"time", "timeUnit",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'date'", "'span'", "'time'", "'s'", "'second'", 
		"'seconds'", "'min'", "'minute'", "'minutes'", "'h'", "'hour'", "'hours'", 
		"'d'", "'day'", "'days'", "'w'", "'week'", "'weeks'", "'m'", "'month'", 
		"'months'", "'y'", "'year'", "'years'", "'+'", "'>'", "'>+'", "'...'", 
		undefined, "'='", undefined, undefined, undefined, undefined, undefined, 
		undefined, "' '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "PLUS", 
		"TO", "TOPLUS", "DELAY", "DELAYPLUS", "EQUALS", "DATE", "INT", "ID", "NEWLINE", 
		"TAB", "LABEL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CronoScriptV2Parser._LITERAL_NAMES, CronoScriptV2Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CronoScriptV2Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CronoScriptV2.g4"; }

	// @Override
	public get ruleNames(): string[] { return CronoScriptV2Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CronoScriptV2Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CronoScriptV2Parser._ATN, this);
	}
	// @RuleVersion(0)
	public planning(): PlanningContext {
		let _localctx: PlanningContext = new PlanningContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CronoScriptV2Parser.RULE_planning);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptV2Parser.T__2) | (1 << CronoScriptV2Parser.T__3) | (1 << CronoScriptV2Parser.T__4))) !== 0) || _la === CronoScriptV2Parser.LABEL) {
				{
				this.state = 30;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CronoScriptV2Parser.LABEL:
					{
					this.state = 26;
					this.line();
					}
					break;
				case CronoScriptV2Parser.T__2:
					{
					this.state = 27;
					this.dateVariableDeclaration();
					}
					break;
				case CronoScriptV2Parser.T__3:
					{
					this.state = 28;
					this.spanVariableDeclaration();
					}
					break;
				case CronoScriptV2Parser.T__4:
					{
					this.state = 29;
					this.timeVariableDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 34;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 35;
			this.match(CronoScriptV2Parser.EOF);
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CronoScriptV2Parser.RULE_line);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.label();
			this.state = 43;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 40;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CronoScriptV2Parser.NEWLINE) {
						{
						this.state = 38;
						this.match(CronoScriptV2Parser.NEWLINE);
						this.state = 39;
						this.match(CronoScriptV2Parser.TAB);
						}
					}

					this.state = 42;
					this.element();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 45;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		this.enterRule(_localctx, 4, CronoScriptV2Parser.RULE_element);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 47;
				this.milestone();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 48;
				this.task();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 49;
				this.line();
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
	public milestone(): MilestoneContext {
		let _localctx: MilestoneContext = new MilestoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CronoScriptV2Parser.RULE_milestone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(CronoScriptV2Parser.T__0);
			this.state = 53;
			this.date(0);
			this.state = 54;
			this.match(CronoScriptV2Parser.T__1);
			this.state = 55;
			this.label();
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
		this.enterRule(_localctx, 8, CronoScriptV2Parser.RULE_task);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(CronoScriptV2Parser.T__0);
			this.state = 58;
			this.span();
			this.state = 59;
			this.match(CronoScriptV2Parser.T__1);
			this.state = 60;
			this.label();
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CronoScriptV2Parser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(CronoScriptV2Parser.LABEL);
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
	public dateVariableDeclaration(): DateVariableDeclarationContext {
		let _localctx: DateVariableDeclarationContext = new DateVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CronoScriptV2Parser.RULE_dateVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(CronoScriptV2Parser.T__2);
			this.state = 65;
			this.match(CronoScriptV2Parser.ID);
			this.state = 66;
			this.match(CronoScriptV2Parser.EQUALS);
			this.state = 67;
			this.date(0);
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
	public spanVariableDeclaration(): SpanVariableDeclarationContext {
		let _localctx: SpanVariableDeclarationContext = new SpanVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CronoScriptV2Parser.RULE_spanVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(CronoScriptV2Parser.T__3);
			this.state = 70;
			this.match(CronoScriptV2Parser.ID);
			this.state = 71;
			this.match(CronoScriptV2Parser.EQUALS);
			this.state = 72;
			this.span();
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
	public timeVariableDeclaration(): TimeVariableDeclarationContext {
		let _localctx: TimeVariableDeclarationContext = new TimeVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CronoScriptV2Parser.RULE_timeVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(CronoScriptV2Parser.T__4);
			this.state = 75;
			this.match(CronoScriptV2Parser.ID);
			this.state = 76;
			this.match(CronoScriptV2Parser.EQUALS);
			this.state = 77;
			this.time(0);
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
		this.enterRule(_localctx, 18, CronoScriptV2Parser.RULE_span);
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 79;
				this.date(0);
				this.state = 80;
				this.match(CronoScriptV2Parser.TO);
				this.state = 81;
				this.date(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.date(0);
				this.state = 84;
				this.match(CronoScriptV2Parser.TOPLUS);
				this.state = 85;
				this.time(0);
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

	public date(): DateContext;
	public date(_p: number): DateContext;
	// @RuleVersion(0)
	public date(_p?: number): DateContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DateContext = new DateContext(this._ctx, _parentState);
		let _prevctx: DateContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, CronoScriptV2Parser.RULE_date, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 90;
			this.match(CronoScriptV2Parser.DATE);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 103;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 101;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CronoScriptV2Parser.RULE_date);
						this.state = 92;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 93;
						this.match(CronoScriptV2Parser.DELAY);
						this.state = 94;
						this.date(3);
						}
						break;

					case 2:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CronoScriptV2Parser.RULE_date);
						this.state = 95;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 96;
						this.match(CronoScriptV2Parser.PLUS);
						this.state = 97;
						this.time(0);
						}
						break;

					case 3:
						{
						_localctx = new DateContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, CronoScriptV2Parser.RULE_date);
						this.state = 98;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 99;
						this.match(CronoScriptV2Parser.DELAYPLUS);
						this.state = 100;
						this.time(0);
						}
						break;
					}
					}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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

	public time(): TimeContext;
	public time(_p: number): TimeContext;
	// @RuleVersion(0)
	public time(_p?: number): TimeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TimeContext = new TimeContext(this._ctx, _parentState);
		let _prevctx: TimeContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, CronoScriptV2Parser.RULE_time, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 107;
			this.match(CronoScriptV2Parser.INT);
			this.state = 108;
			this.timeUnit();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 115;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TimeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CronoScriptV2Parser.RULE_time);
					this.state = 110;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 111;
					this.match(CronoScriptV2Parser.PLUS);
					this.state = 112;
					this.time(2);
					}
					}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
		this.enterRule(_localctx, 24, CronoScriptV2Parser.RULE_timeUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptV2Parser.T__5) | (1 << CronoScriptV2Parser.T__6) | (1 << CronoScriptV2Parser.T__7) | (1 << CronoScriptV2Parser.T__8) | (1 << CronoScriptV2Parser.T__9) | (1 << CronoScriptV2Parser.T__10) | (1 << CronoScriptV2Parser.T__11) | (1 << CronoScriptV2Parser.T__12) | (1 << CronoScriptV2Parser.T__13) | (1 << CronoScriptV2Parser.T__14) | (1 << CronoScriptV2Parser.T__15) | (1 << CronoScriptV2Parser.T__16) | (1 << CronoScriptV2Parser.T__17) | (1 << CronoScriptV2Parser.T__18) | (1 << CronoScriptV2Parser.T__19) | (1 << CronoScriptV2Parser.T__20) | (1 << CronoScriptV2Parser.T__21) | (1 << CronoScriptV2Parser.T__22) | (1 << CronoScriptV2Parser.T__23) | (1 << CronoScriptV2Parser.T__24) | (1 << CronoScriptV2Parser.T__25))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.date_sempred(_localctx as DateContext, predIndex);

		case 11:
			return this.time_sempred(_localctx as TimeContext, predIndex);
		}
		return true;
	}
	private date_sempred(_localctx: DateContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private time_sempred(_localctx: TimeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03){\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E\t" +
		"\x0E\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02!\n\x02\f\x02\x0E\x02$\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03+\n\x03\x03\x03\x06\x03" +
		".\n\x03\r\x03\x0E\x03/\x03\x04\x03\x04\x03\x04\x05\x045\n\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\vZ\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x07\fh\n\f\f\f\x0E\fk\v\f\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x07\rt\n\r\f\r\x0E\rw\v\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x02\x02\x04\x16\x18\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x03\x03\x02" +
		"\b\x1C\x02z\x02\"\x03\x02\x02\x02\x04\'\x03\x02\x02\x02\x064\x03\x02\x02" +
		"\x02\b6\x03\x02\x02\x02\n;\x03\x02\x02\x02\f@\x03\x02\x02\x02\x0EB\x03" +
		"\x02\x02\x02\x10G\x03\x02\x02\x02\x12L\x03\x02\x02\x02\x14Y\x03\x02\x02" +
		"\x02\x16[\x03\x02\x02\x02\x18l\x03\x02\x02\x02\x1Ax\x03\x02\x02\x02\x1C" +
		"!\x05\x04\x03\x02\x1D!\x05\x0E\b\x02\x1E!\x05\x10\t\x02\x1F!\x05\x12\n" +
		"\x02 \x1C\x03\x02\x02\x02 \x1D\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 \x1F" +
		"\x03\x02\x02\x02!$\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02\x02\x02" +
		"#%\x03\x02\x02\x02$\"\x03\x02\x02\x02%&\x07\x02\x02\x03&\x03\x03\x02\x02" +
		"\x02\'-\x05\f\x07\x02()\x07&\x02\x02)+\x07\'\x02\x02*(\x03\x02\x02\x02" +
		"*+\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x05\x06\x04\x02-*\x03\x02\x02\x02" +
		"./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020\x05\x03\x02\x02" +
		"\x0215\x05\b\x05\x0225\x05\n\x06\x0235\x05\x04\x03\x0241\x03\x02\x02\x02" +
		"42\x03\x02\x02\x0243\x03\x02\x02\x025\x07\x03\x02\x02\x0267\x07\x03\x02" +
		"\x0278\x05\x16\f\x0289\x07\x04\x02\x029:\x05\f\x07\x02:\t\x03\x02\x02" +
		"\x02;<\x07\x03\x02\x02<=\x05\x14\v\x02=>\x07\x04\x02\x02>?\x05\f\x07\x02" +
		"?\v\x03\x02\x02\x02@A\x07(\x02\x02A\r\x03\x02\x02\x02BC\x07\x05\x02\x02" +
		"CD\x07%\x02\x02DE\x07\"\x02\x02EF\x05\x16\f\x02F\x0F\x03\x02\x02\x02G" +
		"H\x07\x06\x02\x02HI\x07%\x02\x02IJ\x07\"\x02\x02JK\x05\x14\v\x02K\x11" +
		"\x03\x02\x02\x02LM\x07\x07\x02\x02MN\x07%\x02\x02NO\x07\"\x02\x02OP\x05" +
		"\x18\r\x02P\x13\x03\x02\x02\x02QR\x05\x16\f\x02RS\x07\x1E\x02\x02ST\x05" +
		"\x16\f\x02TZ\x03\x02\x02\x02UV\x05\x16\f\x02VW\x07\x1F\x02\x02WX\x05\x18" +
		"\r\x02XZ\x03\x02\x02\x02YQ\x03\x02\x02\x02YU\x03\x02\x02\x02Z\x15\x03" +
		"\x02\x02\x02[\\\b\f\x01\x02\\]\x07#\x02\x02]i\x03\x02\x02\x02^_\f\x04" +
		"\x02\x02_`\x07 \x02\x02`h\x05\x16\f\x05ab\f\x05\x02\x02bc\x07\x1D\x02" +
		"\x02ch\x05\x18\r\x02de\f\x03\x02\x02ef\x07!\x02\x02fh\x05\x18\r\x02g^" +
		"\x03\x02\x02\x02ga\x03\x02\x02\x02gd\x03\x02\x02\x02hk\x03\x02\x02\x02" +
		"ig\x03\x02\x02\x02ij\x03\x02\x02\x02j\x17\x03\x02\x02\x02ki\x03\x02\x02" +
		"\x02lm\b\r\x01\x02mn\x07$\x02\x02no\x05\x1A\x0E\x02ou\x03\x02\x02\x02" +
		"pq\f\x03\x02\x02qr\x07\x1D\x02\x02rt\x05\x18\r\x04sp\x03\x02\x02\x02t" +
		"w\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02v\x19\x03\x02\x02" +
		"\x02wu\x03\x02\x02\x02xy\t\x02\x02\x02y\x1B\x03\x02\x02\x02\v \"*/4Yg" +
		"iu";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CronoScriptV2Parser.__ATN) {
			CronoScriptV2Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CronoScriptV2Parser._serializedATN));
		}

		return CronoScriptV2Parser.__ATN;
	}

}

export class PlanningContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CronoScriptV2Parser.EOF, 0); }
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	public dateVariableDeclaration(): DateVariableDeclarationContext[];
	public dateVariableDeclaration(i: number): DateVariableDeclarationContext;
	public dateVariableDeclaration(i?: number): DateVariableDeclarationContext | DateVariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateVariableDeclarationContext);
		} else {
			return this.getRuleContext(i, DateVariableDeclarationContext);
		}
	}
	public spanVariableDeclaration(): SpanVariableDeclarationContext[];
	public spanVariableDeclaration(i: number): SpanVariableDeclarationContext;
	public spanVariableDeclaration(i?: number): SpanVariableDeclarationContext | SpanVariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpanVariableDeclarationContext);
		} else {
			return this.getRuleContext(i, SpanVariableDeclarationContext);
		}
	}
	public timeVariableDeclaration(): TimeVariableDeclarationContext[];
	public timeVariableDeclaration(i: number): TimeVariableDeclarationContext;
	public timeVariableDeclaration(i?: number): TimeVariableDeclarationContext | TimeVariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeVariableDeclarationContext);
		} else {
			return this.getRuleContext(i, TimeVariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_planning; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterPlanning) {
			listener.enterPlanning(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitPlanning) {
			listener.exitPlanning(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
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
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CronoScriptV2Parser.NEWLINE);
		} else {
			return this.getToken(CronoScriptV2Parser.NEWLINE, i);
		}
	}
	public TAB(): TerminalNode[];
	public TAB(i: number): TerminalNode;
	public TAB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CronoScriptV2Parser.TAB);
		} else {
			return this.getToken(CronoScriptV2Parser.TAB, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_line; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public milestone(): MilestoneContext | undefined {
		return this.tryGetRuleContext(0, MilestoneContext);
	}
	public task(): TaskContext | undefined {
		return this.tryGetRuleContext(0, TaskContext);
	}
	public line(): LineContext | undefined {
		return this.tryGetRuleContext(0, LineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_element; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class MilestoneContext extends ParserRuleContext {
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_milestone; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterMilestone) {
			listener.enterMilestone(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitMilestone) {
			listener.exitMilestone(this);
		}
	}
}


export class TaskContext extends ParserRuleContext {
	public span(): SpanContext {
		return this.getRuleContext(0, SpanContext);
	}
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_task; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterTask) {
			listener.enterTask(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitTask) {
			listener.exitTask(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public LABEL(): TerminalNode { return this.getToken(CronoScriptV2Parser.LABEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_label; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class DateVariableDeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(CronoScriptV2Parser.ID, 0); }
	public EQUALS(): TerminalNode { return this.getToken(CronoScriptV2Parser.EQUALS, 0); }
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_dateVariableDeclaration; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterDateVariableDeclaration) {
			listener.enterDateVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitDateVariableDeclaration) {
			listener.exitDateVariableDeclaration(this);
		}
	}
}


export class SpanVariableDeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(CronoScriptV2Parser.ID, 0); }
	public EQUALS(): TerminalNode { return this.getToken(CronoScriptV2Parser.EQUALS, 0); }
	public span(): SpanContext {
		return this.getRuleContext(0, SpanContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_spanVariableDeclaration; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterSpanVariableDeclaration) {
			listener.enterSpanVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitSpanVariableDeclaration) {
			listener.exitSpanVariableDeclaration(this);
		}
	}
}


export class TimeVariableDeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(CronoScriptV2Parser.ID, 0); }
	public EQUALS(): TerminalNode { return this.getToken(CronoScriptV2Parser.EQUALS, 0); }
	public time(): TimeContext {
		return this.getRuleContext(0, TimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_timeVariableDeclaration; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterTimeVariableDeclaration) {
			listener.enterTimeVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitTimeVariableDeclaration) {
			listener.exitTimeVariableDeclaration(this);
		}
	}
}


export class SpanContext extends ParserRuleContext {
	public date(): DateContext[];
	public date(i: number): DateContext;
	public date(i?: number): DateContext | DateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateContext);
		} else {
			return this.getRuleContext(i, DateContext);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(CronoScriptV2Parser.TO, 0); }
	public TOPLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptV2Parser.TOPLUS, 0); }
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_span; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterSpan) {
			listener.enterSpan(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitSpan) {
			listener.exitSpan(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public DATE(): TerminalNode | undefined { return this.tryGetToken(CronoScriptV2Parser.DATE, 0); }
	public date(): DateContext[];
	public date(i: number): DateContext;
	public date(i?: number): DateContext | DateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateContext);
		} else {
			return this.getRuleContext(i, DateContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptV2Parser.PLUS, 0); }
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	public DELAY(): TerminalNode | undefined { return this.tryGetToken(CronoScriptV2Parser.DELAY, 0); }
	public DELAYPLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptV2Parser.DELAYPLUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_date; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(CronoScriptV2Parser.INT, 0); }
	public timeUnit(): TimeUnitContext | undefined {
		return this.tryGetRuleContext(0, TimeUnitContext);
	}
	public time(): TimeContext[];
	public time(i: number): TimeContext;
	public time(i?: number): TimeContext | TimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeContext);
		} else {
			return this.getRuleContext(i, TimeContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptV2Parser.PLUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_time; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
}


export class TimeUnitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptV2Parser.RULE_timeUnit; }
	// @Override
	public enterRule(listener: CronoScriptV2Listener): void {
		if (listener.enterTimeUnit) {
			listener.enterTimeUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptV2Listener): void {
		if (listener.exitTimeUnit) {
			listener.exitTimeUnit(this);
		}
	}
}


