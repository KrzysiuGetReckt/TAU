const { expect } = require('chai');
const GeneratorUtils = require('../../framework/Utils/generatorUtils');
const { AddRemoveElements } = require('../pageobjects/index');
const Logger = require('../../framework/logger');

/**
 * CreateMultipleAddRemoveElements
 * Generates a random number of elements between 1 and 10
 * Asserts that each individual element is created, and then deleted
 */

class CreateMultipleAddRemoveElements {
    async createDeleteMultiple(){
        Logger.info(`Generating multiple Elements`);
        let amount = await GeneratorUtils.generateNumber(1, 10);
        Logger.info(`The amount of elements ${amount}`);
        for(let i = 1; i <= amount; i++){
            await AddRemoveElements.clickAddElementButton();
            expect(await AddRemoveElements.isRemoveButtonDisplayed(i)).to.be.true;
        }
        for(let i = 1; i <= amount; amount--){
            await AddRemoveElements.clickRemoveButton(amount);
            expect(await AddRemoveElements.isRemoveButtonDisplayed(amount, true)).to.be.true;
        }
    }
}

module.exports = new CreateMultipleAddRemoveElements();