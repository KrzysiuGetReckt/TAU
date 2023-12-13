const BaseForm = require('../../framework/baseForm')
const Element = require('../../framework/element');

class HomePage extends BaseForm {
  constructor() {
    super(`#home-page-tabs`, 'Home page of http://www.automationpractice.pl/index.php');
  }

  get searchField() {
    return new Element('#searchbox #search_query_top', 'Search box of the main page');
  }

  get searchButton() {
    return new Element('.btn.btn-default.button-search', 'Search button of the main page');
  }

  /**
   * Seach for a keyword in the search bar
   * 
   * @param {string} value Keyword to be searched for 
   */

  async search(value){
    await this.searchField.state().waitForDisplayed();
    await this.searchField.clearAndType(value);
    await this.searchButton.click();
  }
}

module.exports = new HomePage();