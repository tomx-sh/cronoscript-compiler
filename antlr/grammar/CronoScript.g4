// Corrected ANTLR Grammar
grammar CronoScript;

// Separators
COMMA:      ',';
TO:         '->';

// Operators
PLUS:       '+';
MINUS:      '-';
TOPLUS:     '->+';
DELAY:      '...';
DELAYPLUS:  '...+' | '... +' | '..+';
DELAYMINUS: '...-' | '... -' | '..-';
EQUALS:     '=';
MULT:       '*';
DIV:        '/';

// Keywords
STRING_KW:  'string';
DATE_KW:    'date';
GROUP_KW:   'group';
DURATION_KW:'duration';

// Options
// If you modify those, you must modify the visitor's visitOption and visitTag methods [here](CronoScriptVisitorImpl.ts)
HASH:   '#' KEY (':' KEY)?;
AT:     '@' KEY;
KEY:    [a-zA-Z0-9_/-]+;

// Others
DATE:       '\'' ( ~('\\'|'\n'|'\r'|'\t'|'\'') )+ '\'';
STRING:     '"' ( ~('\\'|'\n'|'\r'|'"') )* '"';
DURATION:   INT '_' ID; // 3_days
ID:         [a-zA-Z_][a-zA-Z_0-9]*;
INT:        [0-9]+;
COMMENT:    ('//' ~[\r\n]* | '/*' .*? '*/') -> skip;
WS:         [ \t\r\n]+ -> skip;

// Entry point of the parser
cronodile: (tags | date | group)* EOF;

group
    : ID
    | string? groupBody (tags)*
    | groupBody string? (tags)*
    ;

groupBody: '[' (element (separator element)*)? ']';

tags: hash | at;

element
    : ID
    | group
    | date
    | duration
    ;

separator: COMMA | TO | TOPLUS | DELAY | DELAYPLUS | DELAYMINUS;

date
    : ID
    | DATE
    | date PLUS duration
    | date MINUS duration
    ;

duration
    : ID
    | DURATION
    | duration MULT INT
    | INT MULT duration
    | duration DIV INT
    | duration PLUS duration
    | duration MINUS duration
    | date MINUS date
    ;

// Variables declarations

variableDeclaration: type ID EQUALS expression;

type : STRING_KW | DATE_KW | GROUP_KW | DURATION_KW;

expression
    : group
    | date
    ;


string
    : ID
    | STRING
    ;

hash: HASH;

at: AT;