// Corrected ANTLR Grammar
grammar CronoScript;

// Operators
PLUS:       '+';
MINUS:      '-';
TO:         '>';
TOPLUS:     '>+';
DELAY:      '...';
DELAYPLUS:  '...+' | '... +' | '..+';
DELAYMINUS: '...-' | '... -' | '..-';
EQUALS:     '=';
MULT:       '*';
DIV:        '/';

// Keywords
STRING_KW:  'string';
DATE_KW:    'date';
SPAN_KW:    'span';
DURATION_KW:'duration';
EVENT_KW:   'event';
TASK_KW:    'task';
TIMELINE_KW:'timeline';

//Dates
//DATE:       [0-9][0-9]'/'[0-9][0-9]'/'[0-9][0-9][0-9][0-9];
DATE: '(' ( ~('\\'|'\n'|'\r'|'"'|'['|']'|'('|')') )+ ')';

// Options
// If you modify those, you must modify the visitor's visitOption and visitTag methods [here](CronoScriptVisitorImpl.ts)
OPTION:     '#' OPTION_KEY (':' OPTION_KEY)?;
TAG:        '@' OPTION_KEY;
OPTION_KEY: [a-zA-Z0-9_/-]+;

// Others
ID:         [a-zA-Z_][a-zA-Z_0-9]*;
INT:        [0-9]+;
STRING:     '"' ( ~('\\'|'\n'|'\r'|'"'|'['|']') )* '"';
COMMENT:    ('//' ~[\r\n]* | '/*' .*? '*/') -> skip;
WS:         [ \t\r\n]+ -> skip;

// Entry point of the parser
cronodile: (option | tag)* (variableDeclaration | timeline | task | event)* EOF;

timeline
    : ID
    | string? '[' (element (',' element)*)? ']' (option | tag)*
    ;

element: timeline | task | event;

task
    : ID
    | span string? (option | tag)*
    ;

event
    : ID
    | date string? (option | tag)*
    ;

span
    : ID
    | date TO date
    | date TOPLUS duration
    ;

date
    : ID
    | simpleDate
    | delayedDate
    ;

simpleDate
    : ID
    | DATE
    | simpleDate PLUS duration
    | simpleDate MINUS duration
    ;

delayedDate
    : ID
    | simpleDate DELAY simpleDate
    | simpleDate DELAYPLUS duration
    | simpleDate DELAYMINUS duration
    ;

duration
    : ID
    | INT timeUnit
    | duration MULT INT
    | INT MULT duration
    | duration DIV INT
    | duration PLUS duration
    | duration MINUS duration
    | date MINUS date
    ;

timeUnit
    : 's'   | 'second'  | 'seconds'
    | 'min' | 'minute'  | 'minutes'
    | 'h'   | 'hour'    | 'hours'
    | 'd'   | 'day'     | 'days'
    | 'w'   | 'week'    | 'weeks'
    | 'm'   | 'month'   | 'months'
    | 'y'   | 'year'    | 'years'
    ;

// Variables declarations

variableDeclaration: type ID EQUALS expression;

type : STRING_KW | DATE_KW | SPAN_KW | DURATION_KW | EVENT_KW | TASK_KW | TIMELINE_KW;

expression
    : timeline
    | task
    | event
    | span
    | date
    | duration
    | string
    ;


string
    : ID
    | STRING
    ;

option: OPTION;

tag: TAG;