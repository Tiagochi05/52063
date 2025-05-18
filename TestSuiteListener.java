// Generated from TestSuite.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link TestSuiteParser}.
 */
public interface TestSuiteListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(TestSuiteParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(TestSuiteParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#prueba}.
	 * @param ctx the parse tree
	 */
	void enterPrueba(TestSuiteParser.PruebaContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#prueba}.
	 * @param ctx the parse tree
	 */
	void exitPrueba(TestSuiteParser.PruebaContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#paso}.
	 * @param ctx the parse tree
	 */
	void enterPaso(TestSuiteParser.PasoContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#paso}.
	 * @param ctx the parse tree
	 */
	void exitPaso(TestSuiteParser.PasoContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#objeto}.
	 * @param ctx the parse tree
	 */
	void enterObjeto(TestSuiteParser.ObjetoContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#objeto}.
	 * @param ctx the parse tree
	 */
	void exitObjeto(TestSuiteParser.ObjetoContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#estado}.
	 * @param ctx the parse tree
	 */
	void enterEstado(TestSuiteParser.EstadoContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#estado}.
	 * @param ctx the parse tree
	 */
	void exitEstado(TestSuiteParser.EstadoContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(TestSuiteParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(TestSuiteParser.ValorContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#texto}.
	 * @param ctx the parse tree
	 */
	void enterTexto(TestSuiteParser.TextoContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#texto}.
	 * @param ctx the parse tree
	 */
	void exitTexto(TestSuiteParser.TextoContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#lista}.
	 * @param ctx the parse tree
	 */
	void enterLista(TestSuiteParser.ListaContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#lista}.
	 * @param ctx the parse tree
	 */
	void exitLista(TestSuiteParser.ListaContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(TestSuiteParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(TestSuiteParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(TestSuiteParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(TestSuiteParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestSuiteParser#booleano}.
	 * @param ctx the parse tree
	 */
	void enterBooleano(TestSuiteParser.BooleanoContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestSuiteParser#booleano}.
	 * @param ctx the parse tree
	 */
	void exitBooleano(TestSuiteParser.BooleanoContext ctx);
}