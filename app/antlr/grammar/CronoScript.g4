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
STAR:       '*';
SLASH:      '/';
EQUALS:     '=';

// Keywords
STRING_KW:  'string';
DATE_KW:    'date';
GROUP_KW:   'group';
DURATION_KW:'duration';
VAR:        'var';

// Others
DATE:       '\'' ( ~('\\'|'\n'|'\r'|'\t'|'\'') )+ '\'';
STRING:     '"' ( ~('\\'|'\n'|'\r'|'"') )* '"';
DURATION:   INT '_' ID;
TAG:        ('#' | '@') ( ~(' '|'\n'|'\r'|'\t'|','|'#'|'@') )+;
ID:         [a-zA-Z_][a-zA-Z_0-9]*;
INT:        [0-9]+;
COMMENT:    ('//' ~[\r\n]* | '/*' .*? '*/') -> skip;
WS:         [ \t\r\n]+ -> skip;

// Entry point of the parser
cronodile: (tag | varDec | date | group)* EOF;

group
    : ID
    | string? groupBody tag*
    | groupBody string? tag*
    ;

groupBody: '[' (element (separator element)* separator? )? ']';

tag: TAG;

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

operator: PLUS | MINUS | STAR | SLASH;

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