// Corrected ANTLR Grammar
grammar CronoScriptV2;

PLUS:       '+';
TO:         '>';
TOPLUS:     '>+';
DELAY:      '...';
DELAYPLUS:  '...+' | '... +' | '..+';
EQUALS:     '=';
DATE:       [0-9][0-9]'/'[0-9][0-9]'/'[0-9][0-9][0-9][0-9];
INT:        [0-9]+;
ID:         [a-zA-Z_][a-zA-Z_0-9]*;
NEWLINE :   '\r'? '\n' | '\r';
TAB:        '    ' | '\t';
LABEL:      '"' ~('\\'|'\n'|'\r'|'\t'|'"')+ '"';
WS:         ' ' -> skip;

// Entry point
planning: (line | dateVariableDeclaration | spanVariableDeclaration | timeVariableDeclaration)* EOF;

line: label ((NEWLINE TAB)? element)+;

element: milestone | task | line;

milestone: '(' date ')' label;

task: '(' span ')' label;

label: LABEL;

dateVariableDeclaration: 'date' ID EQUALS date;
spanVariableDeclaration: 'span' ID EQUALS span;
timeVariableDeclaration: 'time' ID EQUALS time;

span
    : date TO date
    | date TOPLUS time
    ;

date
    : DATE
    | date PLUS time
    | date DELAY date
    | date DELAYPLUS time
    ;

time
    : INT timeUnit
    | time PLUS time
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