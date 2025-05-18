export class TestSuiteInterpreter {
    constructor() {
        this.variables = {};
    }

    interpret(tests) {
        if (!tests || !Array.isArray(tests)) {
        throw new Error("Estructura de pruebas inválida: no es un array");
    }

    if (tests.some(test => !test.name || !test.steps)) {
        throw new Error("Estructura de pruebas inválida: falta nombre o pasos");
    }
        let jsCode = '// Código generado automáticamente\n';
        jsCode += 'const resultados = [];\n\n';
        
        tests.forEach(test => {
            jsCode += `// Prueba: ${test.name}\n`;
            jsCode += 'try {\n';
            
            test.steps.forEach(step => {
                jsCode += this.interpretStep(step);
            });

            jsCode += '  resultados.push({ test: `' + test.name + '`, status: "success" });\n';
            jsCode += '  console.log(`[✓] ' + test.name + '`);\n';
            jsCode += '} catch (error) {\n';
            jsCode += '  resultados.push({ test: `' + test.name + '`, status: "fail", error: error.message });\n';
            jsCode += '  console.error(`[✗] ' + test.name + ': ${error.message}`);\n';
            jsCode += '}\n\n';
        });

        jsCode += '\n// Resultados finales\n';
        jsCode += 'console.log("\\n=== Resumen de pruebas ===");\n';
        jsCode += 'resultados.forEach(res => {\n';
        jsCode += '  if (res.status === "success") {\n';
        jsCode += '    console.log(`✓ ${res.test}`);\n';
        jsCode += '  } else {\n';
        jsCode += '    console.log(`✗ ${res.test}: ${res.error}`);\n';
        jsCode += '  }\n';
        jsCode += '});\n';
        
        return jsCode;
    }

    interpretStep(step) {
    try {
        let jsCode = '';
        const objectVar = step.object.replace(/\./g, '_');

        // Validación básica
        if (!step.type || !step.object) {
            throw new Error(`Paso incompleto: ${JSON.stringify(step)}`);
        }

        switch(step.type) {
            case 'DADO':
                if (!step.values || step.values.length === 0) {
                    throw new Error("Paso DADO requiere al menos un valor");
                }
                jsCode += `  let ${objectVar} = ${JSON.stringify(step.values[0])};\n`;
                break;

            case 'CUANDO':
                if (step.state === 'es' && (!step.values || step.values.length === 0)) {
                    throw new Error("Paso CUANDO 'es' requiere un valor de comparación");
                }
                // ... resto de la implementación
                break;

            case 'ENTONCES':
                if ((step.state === 'debe' || step.state === 'debe contener') && 
                    (!step.values || step.values.length === 0)) {
                    throw new Error(`Paso ENTONCES '${step.state}' requiere un valor`);
                }
                // ... resto de la implementación
                break;

            default:
                throw new Error(`Tipo de paso no reconocido: ${step.type}`);
        }

        return jsCode;
    } catch (error) {
        console.error(`Error al interpretar paso: ${error.message}`);
        throw error;
    }
}

    execute(jsCode) {
        try {
            const fn = new Function(jsCode);
            fn();
            return { success: true, code: jsCode };
        } catch (error) {
            return { success: false, error: error.message, code: jsCode };
        }
    }
}