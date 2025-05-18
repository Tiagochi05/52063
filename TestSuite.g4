grammar TestSuite;

prog: prueba+ EOF;

prueba: PRUEBA texto '{' paso* '}';

paso: (DADO | CUANDO | ENTONCES) objeto estado? valor ('y' valor)* ;

objeto: identificado ('.' identificado)*;

estado: ES | NO_ES | CONTIENE | EXISTE | DEBE ;

valor: texto | numero | booleano | variable | lista;

texto: (TEXTO_SIMPLE | STRING);
lista: '[' valor (',' valor)* ']';
identificado: ID;
variable: '$'identificado;
numero: DIGITS;
booleano: VERDADERO | FALSO;

// Tokens
PRUEBA: 'prueba';
DADO: 'dado';
CUANDO: 'cuando';
ENTONCES: 'entonces';

ES: 'es';
NO_ES: 'no es';
CONTIENE: 'contiene';
EXISTE: 'existe';
DEBE: 'debe';


VERDADERO: 'verdadero';
FALSO: 'falso';

ID: [a-zA-Z_] [a-zA-Z0-9_]*;
DIGITS: [0-9]+;
STRING: '"' (~["\r\n])* '"';
TEXTO_SIMPLE: [wvW]+;

NEWLINE: ('\r'? '\n')+ -> skip;
WS: [ \t]+ -> skip;