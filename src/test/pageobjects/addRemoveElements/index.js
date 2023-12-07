const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');
const timeouts = require('../../../environment/timeouts');

class AddRemoveElements extends BaseForm {
    constructor(){
        super('#content h3', 'Add/Remove Elements page of the-internet.herokuapp');
    }

    get pageTitle(){
        return new Element('#content h3', 'Add/Remove Elements page of the-internet.herokuapp');
    }

    get addElementButton(){
        return new Element('.example button', 'Add element button of page Add/Remove Elements');
    }

    removeButton = (index) => {
        return new Element(`#elements button:nth-child(${index})`, `Remove button ${index} of page Add/Remove Elements`);
    }

    async getPageTitleText(){
        return this.pageTitle.getText();
    }

    async clickAddElementButton(){
        return this.addElementButton.click();
    }

    async isRemoveButtonDisplayed(
        index,
        reverse = false
    ) {
            return this.removeButton(index).state().waitForDisplayed(timeouts.explicit, timeouts.polling, reverse);
    }

    async clickRemoveButton(index){
        return this.removeButton(index).click();
    } 
}

module.exports = new AddRemoveElements();