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
	public static readonly MULT = 14;
	public static readonly DIV = 15;
	public static readonly EQUALS = 16;
	public static readonly STRING_KW = 17;
	public static readonly DATE_KW = 18;
	public static readonly GROUP_KW = 19;
	public static readonly DURATION_KW = 20;
	public static readonly VAR = 21;
	public static readonly HASH = 22;
	public static readonly AT = 23;
	public static readonly KEY = 24;
	public static readonly DATE = 25;
	public static readonly STRING = 26;
	public static readonly DURATION = 27;
	public static readonly ID = 28;
	public static readonly INT = 29;
	public static readonly COMMENT = 30;
	public static readonly WS = 31;
	public static readonly RULE_cronodile = 0;
	public static readonly RULE_group = 1;
	public static readonly RULE_groupBody = 2;
	public static readonly RULE_tags = 3;
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
	public static readonly RULE_hash = 14;
	public static readonly RULE_at = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"cronodile", "group", "groupBody", "tags", "element", "separator", "date", 
		"duration", "operator", "operand", "expression", "varDec", "type", "string", 
		"hash", "at",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'('", "')'", "':'", "','", "'->'", "'->+'", 
		"'...'", undefined, undefined, "'+'", "'-'", "'*'", "'/'", "'='", "'string'", 
		"'date'", "'group'", "'duration'", "'var'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "COMMA", 
		"TO", "TOPLUS", "DELAY", "DELAYPLUS", "DELAYMINUS", "PLUS", "MINUS", "MULT", 
		"DIV", "EQUALS", "STRING_KW", "DATE_KW", "GROUP_KW", "DURATION_KW", "VAR", 
		"HASH", "AT", "KEY", "DATE", "STRING", "DURATION", "ID", "INT", "COMMENT", 
		"WS",
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.T__0) | (1 << CronoScriptParser.VAR) | (1 << CronoScriptParser.HASH) | (1 << CronoScriptParser.AT) | (1 << CronoScriptParser.DATE) | (1 << CronoScriptParser.STRING) | (1 << CronoScriptParser.ID))) !== 0)) {
				{
				this.state = 36;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 32;
					this.tags();
					}
					break;

				case 2:
					{
					this.state = 33;
					this.varDec();
					}
					break;

				case 3:
					{
					this.state = 34;
					this.date();
					}
					break;

				case 4:
					{
					this.state = 35;
					this.group();
					}
					break;
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 41;
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
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 43;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CronoScriptParser.STRING || _la === CronoScriptParser.ID) {
					{
					this.state = 44;
					this.string();
					}
				}

				this.state = 47;
				this.groupBody();
				this.state = 51;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 48;
						this.tags();
						}
						}
					}
					this.state = 53;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 54;
				this.groupBody();
				this.state = 56;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 55;
					this.string();
					}
					break;
				}
				this.state = 61;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 58;
						this.tags();
						}
						}
					}
					this.state = 63;
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
			this.state = 66;
			this.match(CronoScriptParser.T__0);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.T__0) | (1 << CronoScriptParser.DATE) | (1 << CronoScriptParser.STRING) | (1 << CronoScriptParser.DURATION) | (1 << CronoScriptParser.ID))) !== 0)) {
				{
				this.state = 67;
				this.element();
				this.state = 73;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 68;
						this.separator();
						this.state = 69;
						this.element();
						}
						}
					}
					this.state = 75;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				this.state = 77;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.COMMA) | (1 << CronoScriptParser.TO) | (1 << CronoScriptParser.TOPLUS) | (1 << CronoScriptParser.DELAY) | (1 << CronoScriptParser.DELAYPLUS) | (1 << CronoScriptParser.DELAYMINUS))) !== 0)) {
					{
					this.state = 76;
					this.separator();
					}
				}

				}
			}

			this.state = 81;
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
	public tags(): TagsContext {
		let _localctx: TagsContext = new TagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CronoScriptParser.RULE_tags);
		try {
			this.state = 85;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CronoScriptParser.HASH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 83;
				this.hash();
				}
				break;
			case CronoScriptParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				this.at();
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
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CronoScriptParser.RULE_element);
		try {
			this.state = 91;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 87;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 88;
				this.group();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 89;
				this.date();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 90;
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
	// @RuleVersion(0)
	public separator(): SeparatorContext {
		let _localctx: SeparatorContext = new SeparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CronoScriptParser.RULE_separator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
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
			this.state = 95;
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
			this.state = 97;
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
			this.state = 99;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CronoScriptParser.PLUS) | (1 << CronoScriptParser.MINUS) | (1 << CronoScriptParser.MULT) | (1 << CronoScriptParser.DIV))) !== 0))) {
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
			this.state = 105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 101;
				this.match(CronoScriptParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 102;
				this.match(CronoScriptParser.INT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 103;
				this.date();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 104;
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
			this.state = 113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CronoScriptParser.DATE:
			case CronoScriptParser.DURATION:
			case CronoScriptParser.ID:
			case CronoScriptParser.INT:
				{
				this.state = 108;
				this.operand();
				}
				break;
			case CronoScriptParser.T__2:
				{
				this.state = 109;
				this.match(CronoScriptParser.T__2);
				this.state = 110;
				this.expression(0);
				this.state = 111;
				this.match(CronoScriptParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 121;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
					this.state = 115;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 116;
					this.operator();
					this.state = 117;
					this.expression(3);
					}
					}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
			this.state = 124;
			this.match(CronoScriptParser.VAR);
			this.state = 125;
			this.match(CronoScriptParser.ID);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CronoScriptParser.T__4) {
				{
				this.state = 126;
				this.match(CronoScriptParser.T__4);
				this.state = 127;
				this.type();
				}
			}

			this.state = 130;
			this.match(CronoScriptParser.EQUALS);
			this.state = 133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 131;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 132;
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
			this.state = 135;
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
			this.state = 137;
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
	// @RuleVersion(0)
	public hash(): HashContext {
		let _localctx: HashContext = new HashContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CronoScriptParser.RULE_hash);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.match(CronoScriptParser.HASH);
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
	public at(): AtContext {
		let _localctx: AtContext = new AtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CronoScriptParser.RULE_at);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(CronoScriptParser.AT);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\x92\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x07\x02\'\n\x02\f\x02\x0E\x02*\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x05\x030\n\x03\x03\x03\x03\x03\x07\x034\n\x03\f\x03\x0E\x03" +
		"7\v\x03\x03\x03\x03\x03\x05\x03;\n\x03\x03\x03\x07\x03>\n\x03\f\x03\x0E" +
		"\x03A\v\x03\x05\x03C\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04J\n\x04\f\x04\x0E\x04M\v\x04\x03\x04\x05\x04P\n\x04\x05\x04R\n\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05X\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06^\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n" +
		"\x03\n\x03\v\x03\v\x03\v\x03\v\x05\vl\n\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\ft\n\f\x03\f\x03\f\x03\f\x03\f\x07\fz\n\f\f\f\x0E\f}\v\f" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\x83\n\r\x03\r\x03\r\x03\r\x05\r\x88\n\r" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x02\x02\x03\x16\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\x02\b\x03\x02\b\r\x04\x02\x1B\x1B\x1E\x1E\x03\x02\x1D\x1E\x03\x02\x0E" +
		"\x11\x03\x02\x13\x16\x04\x02\x1C\x1C\x1E\x1E\x02\x99\x02(\x03\x02\x02" +
		"\x02\x04B\x03\x02\x02\x02\x06D\x03\x02\x02\x02\bW\x03\x02\x02\x02\n]\x03" +
		"\x02\x02\x02\f_\x03\x02\x02\x02\x0Ea\x03\x02\x02\x02\x10c\x03\x02\x02" +
		"\x02\x12e\x03\x02\x02\x02\x14k\x03\x02\x02\x02\x16s\x03\x02\x02\x02\x18" +
		"~\x03\x02\x02\x02\x1A\x89\x03\x02\x02\x02\x1C\x8B\x03\x02\x02\x02\x1E" +
		"\x8D\x03\x02\x02\x02 \x8F\x03\x02\x02\x02\"\'\x05\b\x05\x02#\'\x05\x18" +
		"\r\x02$\'\x05\x0E\b\x02%\'\x05\x04\x03\x02&\"\x03\x02\x02\x02&#\x03\x02" +
		"\x02\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03" +
		"\x02\x02\x02()\x03\x02\x02\x02)+\x03\x02\x02\x02*(\x03\x02\x02\x02+,\x07" +
		"\x02\x02\x03,\x03\x03\x02\x02\x02-C\x07\x1E\x02\x02.0\x05\x1C\x0F\x02" +
		"/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x0215\x05\x06\x04\x02" +
		"24\x05\b\x05\x0232\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x02" +
		"56\x03\x02\x02\x026C\x03\x02\x02\x0275\x03\x02\x02\x028:\x05\x06\x04\x02" +
		"9;\x05\x1C\x0F\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02;?\x03\x02\x02\x02" +
		"<>\x05\b\x05\x02=<\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02" +
		"?@\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02B-\x03\x02\x02\x02" +
		"B/\x03\x02\x02\x02B8\x03\x02\x02\x02C\x05\x03\x02\x02\x02DQ\x07\x03\x02" +
		"\x02EK\x05\n\x06\x02FG\x05\f\x07\x02GH\x05\n\x06\x02HJ\x03\x02\x02\x02" +
		"IF\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02" +
		"LO\x03\x02\x02\x02MK\x03\x02\x02\x02NP\x05\f\x07\x02ON\x03\x02\x02\x02" +
		"OP\x03\x02\x02\x02PR\x03\x02\x02\x02QE\x03\x02\x02\x02QR\x03\x02\x02\x02" +
		"RS\x03\x02\x02\x02ST\x07\x04\x02\x02T\x07\x03\x02\x02\x02UX\x05\x1E\x10" +
		"\x02VX\x05 \x11\x02WU\x03\x02\x02\x02WV\x03\x02\x02\x02X\t\x03\x02\x02" +
		"\x02Y^\x07\x1E\x02\x02Z^\x05\x04\x03\x02[^\x05\x0E\b\x02\\^\x05\x10\t" +
		"\x02]Y\x03\x02\x02\x02]Z\x03\x02\x02\x02][\x03\x02\x02\x02]\\\x03\x02" +
		"\x02\x02^\v\x03\x02\x02\x02_`\t\x02\x02\x02`\r\x03\x02\x02\x02ab\t\x03" +
		"\x02\x02b\x0F\x03\x02\x02\x02cd\t\x04\x02\x02d\x11\x03\x02\x02\x02ef\t" +
		"\x05\x02\x02f\x13\x03\x02\x02\x02gl\x07\x1E\x02\x02hl\x07\x1F\x02\x02" +
		"il\x05\x0E\b\x02jl\x05\x10\t\x02kg\x03\x02\x02\x02kh\x03\x02\x02\x02k" +
		"i\x03\x02\x02\x02kj\x03\x02\x02\x02l\x15\x03\x02\x02\x02mn\b\f\x01\x02" +
		"nt\x05\x14\v\x02op\x07\x05\x02\x02pq\x05\x16\f\x02qr\x07\x06\x02\x02r" +
		"t\x03\x02\x02\x02sm\x03\x02\x02\x02so\x03\x02\x02\x02t{\x03\x02\x02\x02" +
		"uv\f\x04\x02\x02vw\x05\x12\n\x02wx\x05\x16\f\x05xz\x03\x02\x02\x02yu\x03" +
		"\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x17" +
		"\x03\x02\x02\x02}{\x03\x02\x02\x02~\x7F\x07\x17\x02\x02\x7F\x82\x07\x1E" +
		"\x02\x02\x80\x81\x07\x07\x02\x02\x81\x83\x05\x1A\x0E\x02\x82\x80\x03\x02" +
		"\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x87\x07\x12" +
		"\x02\x02\x85\x88\x05\x16\f\x02\x86\x88\x05\x04\x03\x02\x87\x85\x03\x02" +
		"\x02\x02\x87\x86\x03\x02\x02\x02\x88\x19\x03\x02\x02\x02\x89\x8A\t\x06" +
		"\x02\x02\x8A\x1B\x03\x02\x02\x02\x8B\x8C\t\x07\x02\x02\x8C\x1D\x03\x02" +
		"\x02\x02\x8D\x8E\x07\x18\x02\x02\x8E\x1F\x03\x02\x02\x02\x8F\x90\x07\x19" +
		"\x02\x02\x90!\x03\x02\x02\x02\x13&(/5:?BKOQW]ks{\x82\x87";
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
	public tags(): TagsContext[];
	public tags(i: number): TagsContext;
	public tags(i?: number): TagsContext | TagsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagsContext);
		} else {
			return this.getRuleContext(i, TagsContext);
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
	public tags(): TagsContext[];
	public tags(i: number): TagsContext;
	public tags(i?: number): TagsContext | TagsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagsContext);
		} else {
			return this.getRuleContext(i, TagsContext);
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


export class TagsContext extends ParserRuleContext {
	public hash(): HashContext | undefined {
		return this.tryGetRuleContext(0, HashContext);
	}
	public at(): AtContext | undefined {
		return this.tryGetRuleContext(0, AtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_tags; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterTags) {
			listener.enterTags(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitTags) {
			listener.exitTags(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitTags) {
			return visitor.visitTags(this);
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
	public MULT(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CronoScriptParser.DIV, 0); }
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


export class HashContext extends ParserRuleContext {
	public HASH(): TerminalNode { return this.getToken(CronoScriptParser.HASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_hash; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterHash) {
			listener.enterHash(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitHash) {
			listener.exitHash(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitHash) {
			return visitor.visitHash(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(CronoScriptParser.AT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CronoScriptParser.RULE_at; }
	// @Override
	public enterRule(listener: CronoScriptListener): void {
		if (listener.enterAt) {
			listener.enterAt(this);
		}
	}
	// @Override
	public exitRule(listener: CronoScriptListener): void {
		if (listener.exitAt) {
			listener.exitAt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CronoScriptVisitor<Result>): Result {
		if (visitor.visitAt) {
			return visitor.visitAt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


