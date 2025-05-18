import TestSuiteLexer from './generated/TestSuiteLexer.js';
import TestSuiteParser from './generated/TestSuiteParser.js';
import { CustomTestSuiteListener } from './CustomTestSuiteListener.js';
import  CustomTestSuiteVisitor  from './CustomTestSuiteVisitor.js';
import { TestSuiteInterpreter } from './TestSuiteInterpreter.js';
import antlr4 from 'antlr4';
const { CharStreams, CommonTokenStream, ParseTreeWalker } = antlr4;
import fs from 'fs';
import readline from 'readline';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new TestSuiteLexer(inputStream);
    
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {
        const tokenType = TestSuiteLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------"); 

    inputStream = CharStreams.fromString(input);
    lexer = new TestSuiteLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new TestSuiteParser(tokenStream);
    let tree = parser.prog();
    
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
    console.log("\nEntrada válida.");
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log(`Árbol de derivación: ${cadena_tree}`);

    try {
        // 1. Usar el Visitor
        const visitor = new CustomTestSuiteVisitor();
        const parsedTests = visitor.visit(tree);

        // Verificar si se parsearon pruebas
        if (!parsedTests || parsedTests.length === 0) {
            throw new Error("La entrada no contiene pruebas válidas");
        }

        // 2. Interpretar
        const interpreter = new TestSuiteInterpreter();
        const jsCode = interpreter.interpret(parsedTests);
        
        console.log("\nCódigo JavaScript generado:");
        console.log(jsCode);

        // 3. Ejecutar con manejo de errores
        console.log("\nEjecutando pruebas...");
        const result = interpreter.execute(jsCode);
        
        if (!result.success) {
            console.error("\n❌ Error durante la ejecución:", result.error);
        }
    } catch (error) {
        console.error("\n=== RESUMEN DE ERRORES ===");
        console.error(`Error: ${error.message}`);
        
        if (error.stack) {
            const match = /:(\d+):(\d+)/.exec(error.stack);
            if (match) {
                console.error(`Ubicación aproximada: Línea ${match[1]}, Columna ${match[2]}`);
            }
        }
        
        console.error("\nPosibles soluciones:");
        console.error("- Verifique que todos los pasos tengan objeto y valores requeridos");
        console.error("- Revise que los estados usados sean válidos (es, no es, contiene, etc.)");
        console.error("- Asegúrese que los valores tengan el formato correcto");
        
        process.exitCode = 1; // Indicar error al sistema
    }
}
    }


function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecutar el programa
main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});