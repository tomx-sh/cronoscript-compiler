import { CronoScriptLexer } from './antlr/TSparser/CronoScriptLexer';
import { CronoScriptParser } from './antlr/TSparser/CronoScriptParser';
import { CharStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import { CronoScriptVisitorImpl } from './CronoScriptVisitorImpl';

console.clear();
console.log('🐊 CronoScript compiler\n');

const input: string = `
#date-format:DD/MM/YYYY
#color:blue
#bigTitle
@Team

(01/01/2023)...(01/02/2023) "My event" #color:red #font-size:12px @Tom @Team
(01/01/2023) > (01/02/2023) "My task" #color:green #font-size:12px @Tom @Team

"My project" [
    (01/01/2023) "Hello" #color:blue #font-size:14px @Tom
]
`;
const inputStream: CharStream = CharStreams.fromString(input);
const lexer: CronoScriptLexer = new CronoScriptLexer(inputStream);
const tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
const parser: CronoScriptParser = new CronoScriptParser(tokenStream);
const tree = parser.cronodile();
const visitor = new CronoScriptVisitorImpl();
const result = visitor.visit(tree);

//console.log(tree.toStringTree(parser));
console.log("\nRESULT: " + JSON.stringify(result, null, 2) + "\n");

