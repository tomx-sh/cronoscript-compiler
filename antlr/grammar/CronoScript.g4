// Corrected ANTLR Grammar
grammar CronoScript;

// Separators
COMMA:      ',';
TO:         '->';
TOPLUS:     '->+';
DELAY:      '...';
DELAYPLUS:  '...+' | '... +' | '..+';
DELAYMINUS: '...-' | '... -' | '..-';

// Operators
PLUS:       '+';
MINUS:      '-';
MULT:       '*';
DIV:        '/';
EQUALS:     '=';

// Keywords
STRING_KW:  'string';
DATE_KW:    'date';
GROUP_KW:   'group';
DURATION_KW:'duration';
VAR:        'var';

// Options
HASH:   '#' ( ~(' '|'\n'|'\r'|'\t'|'#') )+;
AT:     '@' ( ~(' '|'\n'|'\r'|'\t'|'@') )+;

// Others
DATE:       '\'' ( ~('\\'|'\n'|'\r'|'\t'|'\'') )+ '\'';
STRING:     '"' ( ~('\\'|'\n'|'\r'|'"') )* '"';
DURATION:   INT '_' ID; // 3_days
ID:         [a-zA-Z_][a-zA-Z_0-9]*;
INT:        [0-9]+;
COMMENT:    ('//' ~[\r\n]* | '/*' .*? '*/') -> skip;
WS:         [ \t\r\n]+ -> skip;

// Entry point of the parser
cronodile: (tags | varDec | date | group)* EOF;

group
    : ID
    | string? groupBody tags*
    | groupBody string? tags*
    ;

groupBody: '[' (element (separator element)* separator? )? ']';

tags: hash | at;

element
    : ID
    | group
    | date
    | duration
    | expression
    ;

separator: COMMA | TO | TOPLUS | DELAY | DELAYPLUS | DELAYMINUS;

date
    : ID
    | DATE
    ;

duration
    : ID
    | DURATION
    ;

operator: PLUS | MINUS | MULT | DIV;

operand: ID | INT | date | duration;

expression
    : operand
    | expression operator expression
    | '(' expression ')'
    ;

varDec: VAR ID (':' type)? EQUALS (expression | group);

type : STRING_KW | DATE_KW | DURATION_KW | GROUP_KW;

string
    : ID
    | STRING
    ;

hash: HASH;

at: AT;