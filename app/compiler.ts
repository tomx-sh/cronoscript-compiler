import { Cronodile } from './utils/models';
import { CronoScriptLexer } from './antlr/dist/TSparser/CronoScriptLexer';
import { CronoScriptParser } from './antlr/dist/TSparser/CronoScriptParser';
import { CharStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import { CronoScriptVisitorImpl } from './antlr/CronoScriptVisitorImpl';

//console.clear();
//console.log('🐊 CronoScript compiler\n');

type CronoScriptError = {
    line: number,
    column: number,
    message: string
}

interface CronoScriptResult {
    errors: CronoScriptError[] | null,
    cronodile: Cronodile | null
}

export default function compile(input: string): CronoScriptResult {
    const inputStream: CharStream = CharStreams.fromString(input);
    const lexer: CronoScriptLexer = new CronoScriptLexer(inputStream);
    const tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
    const parser: CronoScriptParser = new CronoScriptParser(tokenStream);
    const tree = parser.cronodile();
    const visitor = new CronoScriptVisitorImpl();
    const result = visitor.visit(tree);
    return {
        errors: null,
        cronodile: result as Cronodile
    }
}

