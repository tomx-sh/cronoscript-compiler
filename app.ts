import { CronoScriptV2Lexer } from './antlr/antlr4ts/CronoScriptV2Lexer';
import { CronoScriptV2Parser } from './antlr/antlr4ts/CronoScriptV2Parser';
import { CharStream, CharStreams, CommonTokenStream } from 'antlr4ts';

console.log('🐊 CronoScript compiler\n');

const input: string = `LineTitle
    (01/01/2023) Milestone
`;
const inputStream: CharStream = CharStreams.fromString(input);
const lexer: CronoScriptV2Lexer = new CronoScriptV2Lexer(inputStream);
const tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
const parser: CronoScriptV2Parser = new CronoScriptV2Parser(tokenStream);
const tree = parser.planning();

console.log(tree.toStringTree(parser));
