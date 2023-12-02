import { CronoScriptLexer } from './antlr/TSparser/CronoScriptLexer';
import { CronoScriptParser } from './antlr/TSparser/CronoScriptParser';
import { CharStream, CharStreams, CommonTokenStream } from 'antlr4ts';

console.log('🐊 CronoScript compiler\n');

const input: string = `LineTitle
    (01/01/2023) Milestone
`;
const inputStream: CharStream = CharStreams.fromString(input);
const lexer: CronoScriptLexer = new CronoScriptLexer(inputStream);
const tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
const parser: CronoScriptParser = new CronoScriptParser(tokenStream);
const tree = parser.cronodile();

console.log(tree.toStringTree(parser));

