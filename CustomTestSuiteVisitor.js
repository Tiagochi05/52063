import TestSuiteVisitor from './generated/TestSuiteVisitor.js';

class CustomTestVisitor extends TestSuiteVisitor {
    constructor() {
        super();
        this.tests = [];
        this.currentTest = null;
        this.variables = {};
    }

    visitProg(ctx) {
    this.tests = []; // Reiniciar almacenamiento
    ctx.prueba().forEach(pruebaCtx => this.visit(pruebaCtx));
    return this.tests; // ¡Importante! Retornar los tests parseados
}

    visitPrueba(ctx) {
        const testName = this.visit(ctx.texto());
        this.currentTest = {
            name: testName,
            steps: []
        };
        
        ctx.paso().forEach(pasoCtx => {
            this.visit(pasoCtx);
        });
        
        this.tests.push(this.currentTest);
        this.currentTest = null;
    }

    visitPaso(ctx) {
    try {
        const step = {
            type: ctx.DADO() ? 'DADO' : 
                  ctx.CUANDO() ? 'CUANDO' : 'ENTONCES',
            object: this.visitObjeto(ctx.objeto()),
            values: []
        };

        // Validar objeto
        if (!step.object || step.object.trim() === '') {
            throw new Error(`Paso sin objeto válido en línea ${ctx.start.line}`);
        }

        // Procesar estado si existe
        if (ctx.estado()) {
            step.state = ctx.estado().getText();
            
            // Validar estados conocidos
            const validStates = ['es', 'no es', 'contiene', 'existe', 'debe'];
            if (!validStates.includes(step.state)) {
                throw new Error(`Estado no reconocido: '${step.state}' en línea ${ctx.start.line}`);
            }
        }

        // Procesar valores
        if (ctx.valor()) {
            for (const valorCtx of ctx.valor()) {
                const value = this.visit(valorCtx);
                if (value === undefined || value === null) {
                    throw new Error(`Valor inválido en línea ${valorCtx.start.line}`);
                }
                step.values.push(value);
            }
        }

        return step;
    } catch (error) {
        console.error(`Error al procesar paso: ${error.message}`);
        throw error; // Re-lanzar para manejo superior
    }
}

    visitObjeto(ctx) {
        return ctx.identificado().map(id => id.getText()).join('.');
    }

    visitTexto(ctx) {
        if (ctx.STRING()) {
            return ctx.STRING().getText().slice(1, -1);
        }
        return ctx.TEXTO_SIMPLE().getText();
    }

    visitNumero(ctx) {
        return parseInt(ctx.DIGITS().getText(), 10);
    }

    visitBooleano(ctx) {
    // Devuelve true/false según el texto
    return ctx.VERDADERO() ? true : false;
}

visitLista(ctx) {
    // Procesa cada elemento de la lista
    return ctx.valor().map(valorCtx => this.visit(valorCtx));
}

visitVariable(ctx) {
    // Obtiene el valor de la variable del almacén
    const varName = ctx.identificado().getText();
    return this.variables[varName] || null;
}

visitIdentificado(ctx) {
    // Devuelve el texto del identificador
    return ctx.getText();
}

visitNumero(ctx) {
    // Corregí el typo (DIGITS en lugar de DIGITS)
    return parseInt(ctx.DIGITS().getText(), 10);
}

}

export default CustomTestVisitor;