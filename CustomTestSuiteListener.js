import TestSuiteListener from "./generated/TestSuiteListener.js";

export class CustomTestSuiteListener extends TestSuiteListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}