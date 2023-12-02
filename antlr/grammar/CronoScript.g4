// Corrected ANTLR Grammar
grammar CronoScript;

PLUS:       '+';
MINUS:      '-';
TO:         '>';
TOPLUS:     '>+';
DELAY:      '...';
DELAYPLUS:  '...+' | '... +' | '..+';
DELAYMINUS: '...-' | '... -' | '..-';
EQUALS:     '=';
ID:         [a-zA-Z_][a-zA-Z_0-9]*;
INT:        [0-9]+;
DATE:       [0-9][0-9]'/'[0-9][0-9]'/'[0-9][0-9][0-9][0-9];
STRING:     '"' ( ~('\\'|'\n'|'\r'|'"'|'['|']') )* '"';
WS:         [ \t\r\n]+ -> skip;

// Entry point of the parser
cronodile: (timeline | task | milestone)* EOF;

timeline: label? '[' (element (',' element)*)? ']';

element: timeline | task | milestone;

task: '(' span ')' label?;

milestone: '(' date ')' label?;

//dateVariableDeclaration: 'date' ID EQUALS date;

//timePeriodVariableDeclaration: 'timePeriod' ID EQUALS timePeriod;

span
    : date TO date
    | date TOPLUS duration
    ;


date: simpleDate | delayedDate;

simpleDate
    : DATE
    | date PLUS duration
    ;

delayedDate
    : date DELAY date
    | date DELAYPLUS duration
    | date DELAYMINUS duration
    ;

duration
    : INT timeUnit
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

label: STRING;




