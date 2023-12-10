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
	public static readonly COMMA = 6;
	public static readonly TO = 7;
	public static readonly TOPLUS = 8;
	public static readonly DELAY = 9;
	public static readonly DELAYPLUS = 10;
	public static readonly DELAYMINUS = 11;
	public static readonly PLUS = 12;
	public static readonly MINUS = 13;
	public static readonly STAR = 14;
	public static readonly SLASH = 15;
	public static readonly EQUALS = 16;
	public static readonly STRING_KW = 17;
	public static readonly DATE_KW = 18;
	public static readonly GROUP_KW = 19;
	public static readonly DURATION_KW = 20;
	public static readonly VAR = 21;
	public static readonly DATE = 22;
	public static readonly STRING = 23;
	public static readonly DURATION = 24;
	public static readonly TAG = 25;
	public static readonly ID = 26;
	public static readonly INT = 27;
	public static readonly COMMENT = 28;
	public static readonly WS = 29;
	public static readonly RULE_cronodile = 0;
	public static readonly RULE_group = 1;
	public static readonly RULE_groupBody = 2;
	public static readonly RULE_tag = 3;
	public static readonly RULE_element = 4;
	public static readonly RULE_separator = 5;
	public static readonly RULE_date = 6;
	public static readonly RULE_duration = 7;
	public static readonly RULE_operator = 8;
	public static readonly RULE_operand = 9;
	public static readonly RULE_expression = 10;
	public static readonly RULE_varDec = 11;
	public static readonly RULE_type = 12;
	public static readonly RULE_string = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"cronodile", "group", "groupBody", "tag", "element", "separator", "date", 
		"duration", "operator", "operand", "expression", "varDec", "type", "string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'('", "')'", "':'", "','", "'->'", "'->+'", 
		"'...'", undefined, undefined, "'+'", "'-'", "'*'", "'/'", "'='", "'string'", 
		"'date'", "'group'", "'duration'", "'var'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "COMMA", 
		"TO", "TOPLUS", "DELAY", "DELAYPLUS", "DELAYMINUS", "PLUS", "MINUS", "STAR", 
		"SLASH", "EQUALS", "STRING_KW", "DATE_KW", "GROUP_KW", "DURATION_KW", 
		"VAR", "DATE", "STRING", "DURATION", "TAG", "ID", "INT", "COMMENT", "WS",
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
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.T__0) | (1 << CronoScriptParser.VAR) | (1 << CronoScriptParser.DATE) | (1 << CronoScriptParser.STRING) | (1 << CronoScriptParser.TAG) | (1 << CronoScriptParser.ID))) !== 0)) {
				{
				this.state = 32;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 28;
					this.tag();
					}
					break;

				case 2:
					{
					this.state = 29;
					this.varDec();
					}
					break;

				case 3:
					{
					this.state = 30;
					this.date();
					}
					break;

				case 4:
					{
					this.state = 31;
					this.group();
					}
					break;
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 37;
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
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CronoScriptParser.RULE_group);
		let _la: number;
		try {
			let _alt: number;
			this.state = 60;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 39;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CronoScriptParser.STRING || _la === CronoScriptParser.ID) {
					{
					this.state = 40;
					this.string();
					}
				}

				this.state = 43;
				this.groupBody();
				this.state = 47;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 44;
						this.tag();
						}
						}
					}
					this.state = 49;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.groupBody();
				this.state = 52;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 51;
					this.string();
					}
					break;
				}
				this.state = 57;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 54;
						this.tag();
						}
						}
					}
					this.state = 59;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
	public groupBody(): GroupBodyContext {
		let _localctx: GroupBodyContext = new GroupBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CronoScriptParser.RULE_groupBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(CronoScriptParser.T__0);
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.T__0) | (1 << CronoScriptParser.T__2) | (1 << CronoScriptParser.DATE) | (1 << CronoScriptParser.STRING) | (1 << CronoScriptParser.DURATION) | (1 << CronoScriptParser.ID) | (1 << CronoScriptParser.INT))) !== 0)) {
				{
				this.state = 63;
				this.element();
				this.state = 69;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 64;
						this.separator();
						this.state = 65;
						this.element();
						}
						}
					}
					this.state = 71;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.COMMA) | (1 << CronoScriptParser.TO) | (1 << CronoScriptParser.TOPLUS) | (1 << CronoScriptParser.DELAY) | (1 << CronoScriptParser.DELAYPLUS) | (1 << CronoScriptParser.DELAYMINUS))) !== 0)) {
					{
					this.state = 72;
					this.separator();
					}
				}

				}
			}

			this.state = 77;
			this.match(CronoScriptParser.T__1);
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
		this.enterRule(_localctx, 6, CronoScriptParser.RULE_tag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
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
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CronoScriptParser.RULE_element);
		try {
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 82;
				this.group();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 83;
				this.date();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 84;
				this.duration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 85;
				this.expression(0);
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
	public separator(): SeparatorContext {
		let _localctx: SeparatorContext = new SeparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CronoScriptParser.RULE_separator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.COMMA) | (1 << CronoScriptParser.TO) | (1 << CronoScriptParser.TOPLUS) | (1 << CronoScriptParser.DELAY) | (1 << CronoScriptParser.DELAYPLUS) | (1 << CronoScriptParser.DELAYMINUS))) !== 0))) {
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
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CronoScriptParser.RULE_date);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			_la = this._input.LA(1);
			if (!(_la === CronoScriptParser.DATE || _la === CronoScriptParser.ID)) {
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
	public duration(): DurationContext {
		let _localctx: DurationContext = new DurationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CronoScriptParser.RULE_duration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			_la = this._input.LA(1);
			if (!(_la === CronoScriptParser.DURATION || _la === CronoScriptParser.ID)) {
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CronoScriptParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.PLUS) | (1 << CronoScriptParser.MINUS) | (1 << CronoScriptParser.STAR) | (1 << CronoScriptParser.SLASH))) !== 0))) {
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
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CronoScriptParser.RULE_operand);
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 97;
				this.match(CronoScriptParser.INT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 98;
				this.date();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 99;
				this.duration();
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, CronoScriptParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CronoScriptParser.DATE:
			case CronoScriptParser.DURATION:
			case CronoScriptParser.ID:
			case CronoScriptParser.INT:
				{
				this.state = 103;
				this.operand();
				}
				break;
			case CronoScriptParser.T__2:
				{
				this.state = 104;
				this.match(CronoScriptParser.T__2);
				this.state = 105;
				this.expression(0);
				this.state = 106;
				this.match(CronoScriptParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 116;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, CronoScriptParser.RULE_expression);
					this.state = 110;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 111;
					this.operator();
					this.state = 112;
					this.expression(3);
					}
					}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
	public varDec(): VarDecContext {
		let _localctx: VarDecContext = new VarDecContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CronoScriptParser.RULE_varDec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(CronoScriptParser.VAR);
			this.state = 120;
			this.match(CronoScriptParser.ID);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CronoScriptParser.T__4) {
				{
				this.state = 121;
				this.match(CronoScriptParser.T__4);
				this.state = 122;
				this.type();
				}
			}

			this.state = 125;
			this.match(CronoScriptParser.EQUALS);
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 126;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 127;
				this.group();
				}
				break;
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CronoScriptParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.STRING_KW) | (1 << CronoScriptParser.DATE_KW) | (1 << CronoScriptParser.GROUP_KW) | (1 << CronoScriptParser.DURATION_KW))) !== 0))) {
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CronoScriptParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			_la = this._input.LA(1);
			if (!(_la === CronoScriptParser.STRING || _la === CronoScriptParser.ID)) {
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
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F\x89\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02#\n\x02" +
		"\f\x02\x0E\x02&\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03,\n\x03\x03" +
		"\x03\x03\x03\x07\x030\n\x03\f\x03\x0E\x033\v\x03\x03\x03\x03\x03\x05\x03" +
		"7\n\x03\x03\x03\x07\x03:\n\x03\f\x03\x0E\x03=\v\x03\x05\x03?\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04F\n\x04\f\x04\x0E\x04I\v\x04" +
		"\x03\x04\x05\x04L\n\x04\x05\x04N\n\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06Y\n\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\vg\n" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fo\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x07\fu\n\f\f\f\x0E\fx\v\f\x03\r\x03\r\x03\r\x03\r\x05\r~\n\r\x03\r" +
		"\x03\r\x03\r\x05\r\x83\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x02" +
		"\x02\x03\x16\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\b\x03\x02\b\r" +
		"\x04\x02\x18\x18\x1C\x1C\x04\x02\x1A\x1A\x1C\x1C\x03\x02\x0E\x11\x03\x02" +
		"\x13\x16\x04\x02\x19\x19\x1C\x1C\x02\x92\x02$\x03\x02\x02\x02\x04>\x03" +
		"\x02\x02\x02\x06@\x03\x02\x02\x02\bQ\x03\x02\x02\x02\nX\x03\x02\x02\x02" +
		"\fZ\x03\x02\x02\x02\x0E\\\x03\x02\x02\x02\x10^\x03\x02\x02\x02\x12`\x03" +
		"\x02\x02\x02\x14f\x03\x02\x02\x02\x16n\x03\x02\x02\x02\x18y\x03\x02\x02" +
		"\x02\x1A\x84\x03\x02\x02\x02\x1C\x86\x03\x02\x02\x02\x1E#\x05\b\x05\x02" +
		"\x1F#\x05\x18\r\x02 #\x05\x0E\b\x02!#\x05\x04\x03\x02\"\x1E\x03\x02\x02" +
		"\x02\"\x1F\x03\x02\x02\x02\" \x03\x02\x02\x02\"!\x03\x02\x02\x02#&\x03" +
		"\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\'\x03\x02\x02\x02&" +
		"$\x03\x02\x02\x02\'(\x07\x02\x02\x03(\x03\x03\x02\x02\x02)?\x07\x1C\x02" +
		"\x02*,\x05\x1C\x0F\x02+*\x03\x02\x02\x02+,\x03\x02\x02\x02,-\x03\x02\x02" +
		"\x02-1\x05\x06\x04\x02.0\x05\b\x05\x02/.\x03\x02\x02\x0203\x03\x02\x02" +
		"\x021/\x03\x02\x02\x0212\x03\x02\x02\x022?\x03\x02\x02\x0231\x03\x02\x02" +
		"\x0246\x05\x06\x04\x0257\x05\x1C\x0F\x0265\x03\x02\x02\x0267\x03\x02\x02" +
		"\x027;\x03\x02\x02\x028:\x05\b\x05\x0298\x03\x02\x02\x02:=\x03\x02\x02" +
		"\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03\x02\x02" +
		"\x02>)\x03\x02\x02\x02>+\x03\x02\x02\x02>4\x03\x02\x02\x02?\x05\x03\x02" +
		"\x02\x02@M\x07\x03\x02\x02AG\x05\n\x06\x02BC\x05\f\x07\x02CD\x05\n\x06" +
		"\x02DF\x03\x02\x02\x02EB\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02" +
		"\x02GH\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02JL\x05\f\x07" +
		"\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02LN\x03\x02\x02\x02MA\x03\x02\x02" +
		"\x02MN\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x07\x04\x02\x02P\x07\x03\x02" +
		"\x02\x02QR\x07\x1B\x02\x02R\t\x03\x02\x02\x02SY\x07\x1C\x02\x02TY\x05" +
		"\x04\x03\x02UY\x05\x0E\b\x02VY\x05\x10\t\x02WY\x05\x16\f\x02XS\x03\x02" +
		"\x02\x02XT\x03\x02\x02\x02XU\x03\x02\x02\x02XV\x03\x02\x02\x02XW\x03\x02" +
		"\x02\x02Y\v\x03\x02\x02\x02Z[\t\x02\x02\x02[\r\x03\x02\x02\x02\\]\t\x03" +
		"\x02\x02]\x0F\x03\x02\x02\x02^_\t\x04\x02\x02_\x11\x03\x02\x02\x02`a\t" +
		"\x05\x02\x02a\x13\x03\x02\x02\x02bg\x07\x1C\x02\x02cg\x07\x1D\x02\x02" +
		"dg\x05\x0E\b\x02eg\x05\x10\t\x02fb\x03\x02\x02\x02fc\x03\x02\x02\x02f" +
		"d\x03\x02\x02\x02fe\x03\x02\x02\x02g\x15\x03\x02\x02\x02hi\b\f\x01\x02" +
		"io\x05\x14\v\x02jk\x07\x05\x02\x02kl\x05\x16\f\x02lm\x07\x06\x02\x02m" +
		"o\x03\x02\x02\x02nh\x03\x02\x02\x02nj\x03\x02\x02\x02ov\x03\x02\x02\x02" +
		"pq\f\x04\x02\x02qr\x05\x12\n\x02rs\x05\x16\f\x05su\x03\x02\x02\x02tp\x03" +
		"\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02w\x17" +
		"\x03\x02\x02\x02xv\x03\x02\x02\x02yz\x07\x17\x02\x02z}\x07\x1C\x02\x02" +
		"{|\x07\x07\x02\x02|~\x05\x1A\x0E\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02" +
		"~\x7F\x03\x02\x02\x02\x7F\x82\x07\x12\x02\x02\x80\x83\x05\x16\f\x02\x81" +
		"\x83\x05\x04\x03\x02\x82\x80\x03\x02\x02\x02\x82\x81\x03\x02\x02\x02\x83" +
		"\x19\x03\x02\x02\x02\x84\x85\t\x06\x02\x02\x85\x1B\x03\x02\x02\x02\x86" +
		"\x87\t\x07\x02\x02\x87\x1D\x03\x02\x02\x02\x12\"$+16;>GKMXfnv}\x82";
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
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	public varDec(): VarDecContext[];
	public varDec(i: number): VarDecContext;
	public varDec(i?: number): VarDecContext | VarDecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarDecContext);
		} else {
			return this.getRuleContext(i, VarDecContext);
		}
	}
	public date(): DateContext[];
	public date(i: number): DateContext;
	public date(i?: number): DateContext | DateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateContext);
		} else {
			return this.getRuleContext(i, DateContext);
		}
	}
	public group(): GroupContext[];
	public group(i: number): GroupContext;
	public group(i?: number): GroupContext | GroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupContext);
		} else {
			return this.getRuleContext(i, GroupContext);
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


export class GroupContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public groupBody(): GroupBodyContext | undefined {
		return this.tryGetRuleContext(0, GroupBodyContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
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
	public get ruleIndex(): number { return CronoScriptParser.RULE_group; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitGroup) {
			return visitor.visitGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupBodyContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public separator(): SeparatorContext[];
	public separator(i: number): SeparatorContext;
	public separator(i?: number): SeparatorContext | SeparatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SeparatorContext);
		} else {
			return this.getRuleContext(i, SeparatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_groupBody; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterGroupBody) {
			listener.enterGroupBody(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitGroupBody) {
			listener.exitGroupBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitGroupBody) {
			return visitor.visitGroupBody(this);
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


export class ElementContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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


export class SeparatorContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.COMMA, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.TO, 0); }
	public TOPLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.TOPLUS, 0); }
	public DELAY(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DELAY, 0); }
	public DELAYPLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DELAYPLUS, 0); }
	public DELAYMINUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DELAYMINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_separator; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterSeparator) {
			listener.enterSeparator(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitSeparator) {
			listener.exitSeparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitSeparator) {
			return visitor.visitSeparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DATE, 0); }
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


export class DurationContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public DURATION(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DURATION, 0); }
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


export class OperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.MINUS, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.SLASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_operator; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.ID, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.INT, 0); }
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public duration(): DurationContext | undefined {
		return this.tryGetRuleContext(0, DurationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_operand; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitOperand) {
			return visitor.visitOperand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public operand(): OperandContext | undefined {
		return this.tryGetRuleContext(0, OperandContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
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


export class VarDecContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(CronoScriptParser.VAR, 0); }
	public ID(): TerminalNode { return this.getToken(CronoScriptParser.ID, 0); }
	public EQUALS(): TerminalNode { return this.getToken(CronoScriptParser.EQUALS, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_varDec; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterVarDec) {
			listener.enterVarDec(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitVarDec) {
			listener.exitVarDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitVarDec) {
			return visitor.visitVarDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public STRING_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.STRING_KW, 0); }
	public DATE_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DATE_KW, 0); }
	public DURATION_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DURATION_KW, 0); }
	public GROUP_KW(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.GROUP_KW, 0); }
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


