const BaseForm = require('../../../framework/baseForm');
const Element = require('../../../framework/element');

class JavaScriptAlerts extends BaseForm {
    constructor(){
        super('.example h3', 'Javascript Alerts web page of the-internet.herokuapp');
    }

    get pageTitle(){
        return new Element('.example h3', 'Javascript Alerts web page of the-internet.herokuapp');
    }

    get result(){
        return new Element('#result', 'Alert result of javascript alert page');
    }

    javasciptAlertButton = (index) => {
        return new Element(`.example li:nth-child(${index}) button`, `Alert button of index ${index}`);
    } 

    async clickAlertButton(index){
        return this.javasciptAlertButton(index).click();
    }

    async getResultText(){
        return this.result.getText();
    }

    async getPageTitleText(){
        return this.pageTitle.getText();
    }
}

module.exports = new JavaScriptAlerts();
