const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class Dropdown extends BaseForm {
    constructor(){
        super('.example h3', 'Dropdown page of the-internet.herokuapp');
    }

    get pageTitle(){
        return new Element('.example h3', 'Dropdown page of the-internet.herokuapp');
    }

    get dropdownMenu(){
        return new Element('#dropdown','Dropdown menu of the dropdown web page');
    }

    get optionOne(){
        return new Element('#dropdown option:nth-child(2)', 'Option one of the dropdown list');
    }

    get optionTwo(){
        return new Element('#dropdown option:nth-child(3)', 'Option two of the dropdown list');
    }


    async getPageTitleText(){
        return this.pageTitle.getText();
    }

    async selectFromDropdown(attribute, value){
        return this.dropdownMenu.selectByAttribute(attribute, value);
    }

    async IsOptionOneSelected(){
        return this.optionOne.isElementSelected();
    }

    async IsOptionTwoSelected(){
        return this.optionTwo.isElementSelected();
    }
}

module.exports = new Dropdown();