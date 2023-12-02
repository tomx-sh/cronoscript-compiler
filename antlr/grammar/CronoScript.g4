// Corrected ANTLR Grammar
grammar CronoScript;

// Entry point of the parser
planning: (element | dateVariableDeclaration)* EOF;

group
    : label? string? groupBody
    | string? label? groupBody
    ;

groupBody: '(' (element (',' element)*)? ')';

element: group | task | milestone;

task
    : '(' duration ')' label? string?
    | '(' duration ')' string? label?
    | label? '(' duration ')' string?
    | label? string? '(' duration ')'
    | string? '(' duration ')' label?
    | string? label? '(' duration ')'
    ;

milestone
    : '(' date ')' label? string?
    | '(' date ')' string? label?
    | label? '(' date ')' string?
    | label? string? '(' date ')'
    | string? '(' date ')' label?
    | string? label? '(' date ')'
    ;

dateVariableDeclaration: 'date' ID EQUALS date;

timePeriodVariableDeclaration: 'timePeriod' ID EQUALS timePeriod;

duration
    : date TO date
    | date TOPLUS timePeriod
    ;

date
    : DATE
    | date PLUS timePeriod
    | date DELAY date
    | date DELAYPLUS timePeriod
    ;

timePeriod
    : INT timeUnit
    | timePeriod PLUS timePeriod;

timeUnit
    : 's'   | 'second'  | 'seconds'
    | 'min' | 'minute'  | 'minutes'
    | 'h'   | 'hour'    | 'hours'
    | 'd'   | 'day'     | 'days'
    | 'w'   | 'week'    | 'weeks'
    | 'm'   | 'month'   | 'months'
    | 'y'   | 'year'    | 'years'
    ;

label: '[' string ']';

string: STRING;


PLUS:       '+';
TO:         '>';
TOPLUS:     '>+';
DELAY:      '...';
DELAYPLUS:  '...+' | '... +' | '..+';
EQUALS:     '=';
ID:         [a-zA-Z_][a-zA-Z_0-9]*;
INT:        [0-9]+;
DATE:       [0-9][0-9]'/'[0-9][0-9]'/'[0-9][0-9][0-9][0-9];
STRING:     '"' ( ~('\\'|'\n'|'\r'|'"'|'['|']') )* '"';
WS:         [ \t\r\n]+ -> skip;

