// Generated from c:/yo/AnalizadorTestSuite/TestSuite.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TestSuiteListener from './TestSuiteListener.js';
import TestSuiteVisitor from './TestSuiteVisitor.js';

const serializedATN = [4,1,25,95,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,8,
0,11,0,12,0,27,1,0,1,0,1,1,1,1,1,1,1,1,5,1,36,8,1,10,1,12,1,39,9,1,1,1,1,
1,1,2,1,2,1,2,3,2,46,8,2,1,2,1,2,1,2,5,2,51,8,2,10,2,12,2,54,9,2,1,3,1,3,
1,3,5,3,59,8,3,10,3,12,3,62,9,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,3,5,71,8,5,1,
6,1,6,1,7,1,7,1,7,1,7,5,7,79,8,7,10,7,12,7,82,9,7,1,7,1,7,1,8,1,8,1,9,1,
9,1,9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,4,
1,0,10,12,1,0,13,17,1,0,22,23,1,0,18,19,92,0,25,1,0,0,0,2,31,1,0,0,0,4,42,
1,0,0,0,6,55,1,0,0,0,8,63,1,0,0,0,10,70,1,0,0,0,12,72,1,0,0,0,14,74,1,0,
0,0,16,85,1,0,0,0,18,87,1,0,0,0,20,90,1,0,0,0,22,92,1,0,0,0,24,26,3,2,1,
0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,29,1,0,0,0,
29,30,5,0,0,1,30,1,1,0,0,0,31,32,5,9,0,0,32,33,3,12,6,0,33,37,5,1,0,0,34,
36,3,4,2,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,
1,0,0,0,39,37,1,0,0,0,40,41,5,2,0,0,41,3,1,0,0,0,42,43,7,0,0,0,43,45,3,6,
3,0,44,46,3,8,4,0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,52,3,10,5,
0,48,49,5,3,0,0,49,51,3,10,5,0,50,48,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,
52,53,1,0,0,0,53,5,1,0,0,0,54,52,1,0,0,0,55,60,3,16,8,0,56,57,5,4,0,0,57,
59,3,16,8,0,58,56,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,7,
1,0,0,0,62,60,1,0,0,0,63,64,7,1,0,0,64,9,1,0,0,0,65,71,3,12,6,0,66,71,3,
20,10,0,67,71,3,22,11,0,68,71,3,18,9,0,69,71,3,14,7,0,70,65,1,0,0,0,70,66,
1,0,0,0,70,67,1,0,0,0,70,68,1,0,0,0,70,69,1,0,0,0,71,11,1,0,0,0,72,73,7,
2,0,0,73,13,1,0,0,0,74,75,5,5,0,0,75,80,3,10,5,0,76,77,5,6,0,0,77,79,3,10,
5,0,78,76,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,
0,82,80,1,0,0,0,83,84,5,7,0,0,84,15,1,0,0,0,85,86,5,20,0,0,86,17,1,0,0,0,
87,88,5,8,0,0,88,89,3,16,8,0,89,19,1,0,0,0,90,91,5,21,0,0,91,21,1,0,0,0,
92,93,7,3,0,0,93,23,1,0,0,0,7,27,37,45,52,60,70,80];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TestSuiteParser extends antlr4.Parser {

    static grammarFileName = "TestSuite.g4";
    static literalNames = [ null, "'{'", "'}'", "'y'", "'.'", "'['", "','", 
                            "']'", "'$'", "'prueba'", "'dado'", "'cuando'", 
                            "'entonces'", "'es'", "'no es'", "'contiene'", 
                            "'existe'", "'debe'", "'verdadero'", "'falso'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "PRUEBA", "DADO", "CUANDO", "ENTONCES", 
                             "ES", "NO_ES", "CONTIENE", "EXISTE", "DEBE", 
                             "VERDADERO", "FALSO", "ID", "DIGITS", "STRING", 
                             "TEXTO_SIMPLE", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "prueba", "paso", "objeto", "estado", "valor", 
                         "texto", "lista", "identificado", "variable", "numero", 
                         "booleano" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TestSuiteParser.ruleNames;
        this.literalNames = TestSuiteParser.literalNames;
        this.symbolicNames = TestSuiteParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TestSuiteParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.prueba();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9);
	        this.state = 29;
	        this.match(TestSuiteParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prueba() {
	    let localctx = new PruebaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TestSuiteParser.RULE_prueba);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(TestSuiteParser.PRUEBA);
	        this.state = 32;
	        this.texto();
	        this.state = 33;
	        this.match(TestSuiteParser.T__0);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0)) {
	            this.state = 34;
	            this.paso();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this.match(TestSuiteParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paso() {
	    let localctx = new PasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TestSuiteParser.RULE_paso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 43;
	        this.objeto();
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 253952) !== 0)) {
	            this.state = 44;
	            this.estado();
	        }

	        this.state = 47;
	        this.valor();
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 48;
	            this.match(TestSuiteParser.T__2);
	            this.state = 49;
	            this.valor();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objeto() {
	    let localctx = new ObjetoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TestSuiteParser.RULE_objeto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.identificado();
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 56;
	            this.match(TestSuiteParser.T__3);
	            this.state = 57;
	            this.identificado();
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TestSuiteParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 253952) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TestSuiteParser.RULE_valor);
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.texto();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.numero();
	            break;
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
	            this.booleano();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 68;
	            this.variable();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 69;
	            this.lista();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TestSuiteParser.RULE_texto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TestSuiteParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(TestSuiteParser.T__4);
	        this.state = 75;
	        this.valor();
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 76;
	            this.match(TestSuiteParser.T__5);
	            this.state = 77;
	            this.valor();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 83;
	        this.match(TestSuiteParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificado() {
	    let localctx = new IdentificadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TestSuiteParser.RULE_identificado);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(TestSuiteParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TestSuiteParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(TestSuiteParser.T__7);
	        this.state = 88;
	        this.identificado();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TestSuiteParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(TestSuiteParser.DIGITS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TestSuiteParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TestSuiteParser.EOF = antlr4.Token.EOF;
TestSuiteParser.T__0 = 1;
TestSuiteParser.T__1 = 2;
TestSuiteParser.T__2 = 3;
TestSuiteParser.T__3 = 4;
TestSuiteParser.T__4 = 5;
TestSuiteParser.T__5 = 6;
TestSuiteParser.T__6 = 7;
TestSuiteParser.T__7 = 8;
TestSuiteParser.PRUEBA = 9;
TestSuiteParser.DADO = 10;
TestSuiteParser.CUANDO = 11;
TestSuiteParser.ENTONCES = 12;
TestSuiteParser.ES = 13;
TestSuiteParser.NO_ES = 14;
TestSuiteParser.CONTIENE = 15;
TestSuiteParser.EXISTE = 16;
TestSuiteParser.DEBE = 17;
TestSuiteParser.VERDADERO = 18;
TestSuiteParser.FALSO = 19;
TestSuiteParser.ID = 20;
TestSuiteParser.DIGITS = 21;
TestSuiteParser.STRING = 22;
TestSuiteParser.TEXTO_SIMPLE = 23;
TestSuiteParser.NEWLINE = 24;
TestSuiteParser.WS = 25;

TestSuiteParser.RULE_prog = 0;
TestSuiteParser.RULE_prueba = 1;
TestSuiteParser.RULE_paso = 2;
TestSuiteParser.RULE_objeto = 3;
TestSuiteParser.RULE_estado = 4;
TestSuiteParser.RULE_valor = 5;
TestSuiteParser.RULE_texto = 6;
TestSuiteParser.RULE_lista = 7;
TestSuiteParser.RULE_identificado = 8;
TestSuiteParser.RULE_variable = 9;
TestSuiteParser.RULE_numero = 10;
TestSuiteParser.RULE_booleano = 11;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(TestSuiteParser.EOF, 0);
	};

	prueba = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PruebaContext);
	    } else {
	        return this.getTypedRuleContext(PruebaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PruebaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_prueba;
    }

	PRUEBA() {
	    return this.getToken(TestSuiteParser.PRUEBA, 0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	paso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PasoContext);
	    } else {
	        return this.getTypedRuleContext(PasoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterPrueba(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitPrueba(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitPrueba(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_paso;
    }

	objeto() {
	    return this.getTypedRuleContext(ObjetoContext,0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	DADO() {
	    return this.getToken(TestSuiteParser.DADO, 0);
	};

	CUANDO() {
	    return this.getToken(TestSuiteParser.CUANDO, 0);
	};

	ENTONCES() {
	    return this.getToken(TestSuiteParser.ENTONCES, 0);
	};

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterPaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitPaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitPaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjetoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_objeto;
    }

	identificado = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentificadoContext);
	    } else {
	        return this.getTypedRuleContext(IdentificadoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterObjeto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitObjeto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitObjeto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_estado;
    }

	ES() {
	    return this.getToken(TestSuiteParser.ES, 0);
	};

	NO_ES() {
	    return this.getToken(TestSuiteParser.NO_ES, 0);
	};

	CONTIENE() {
	    return this.getToken(TestSuiteParser.CONTIENE, 0);
	};

	EXISTE() {
	    return this.getToken(TestSuiteParser.EXISTE, 0);
	};

	DEBE() {
	    return this.getToken(TestSuiteParser.DEBE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_valor;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_texto;
    }

	TEXTO_SIMPLE() {
	    return this.getToken(TestSuiteParser.TEXTO_SIMPLE, 0);
	};

	STRING() {
	    return this.getToken(TestSuiteParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_lista;
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_identificado;
    }

	ID() {
	    return this.getToken(TestSuiteParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterIdentificado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitIdentificado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitIdentificado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_variable;
    }

	identificado() {
	    return this.getTypedRuleContext(IdentificadoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_numero;
    }

	DIGITS() {
	    return this.getToken(TestSuiteParser.DIGITS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(TestSuiteParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(TestSuiteParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TestSuiteParser.ProgContext = ProgContext; 
TestSuiteParser.PruebaContext = PruebaContext; 
TestSuiteParser.PasoContext = PasoContext; 
TestSuiteParser.ObjetoContext = ObjetoContext; 
TestSuiteParser.EstadoContext = EstadoContext; 
TestSuiteParser.ValorContext = ValorContext; 
TestSuiteParser.TextoContext = TextoContext; 
TestSuiteParser.ListaContext = ListaContext; 
TestSuiteParser.IdentificadoContext = IdentificadoContext; 
TestSuiteParser.VariableContext = VariableContext; 
TestSuiteParser.NumeroContext = NumeroContext; 
TestSuiteParser.BooleanoContext = BooleanoContext; 
