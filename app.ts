import { CronoScriptLexer } from './antlr/TSparser/CronoScriptLexer';
import { CronoScriptParser } from './antlr/TSparser/CronoScriptParser';
import { CharStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import { CronoScriptVisitorImpl } from './CronoScriptVisitorImpl';

console.clear();
console.log('🐊 CronoScript compiler\n');

const input: string = `['01/01/2023'] "Hello"`;
const inputStream: CharStream = CharStreams.fromString(input);
const lexer: CronoScriptLexer = new CronoScriptLexer(inputStream);
const tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
const parser: CronoScriptParser = new CronoScriptParser(tokenStream);
const tree = parser.cronodile();
const visitor = new CronoScriptVisitorImpl();
const result = visitor.visit(tree);

//console.log(tree.toStringTree(parser));
console.log("\nRESULT: " + JSON.stringify(result, null, 2) + "\n");

