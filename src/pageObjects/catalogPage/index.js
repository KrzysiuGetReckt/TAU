const BaseForm = require('../../framework/baseForm');
const Element = require('../../framework/element');

class HomePage extends BaseForm {
  constructor() {
    super(`.product-listing`, 'Product page of http://www.automationpractice.pl/index.php');
  }

  get products(){
    return new Element('#search .product_list .product-container .product-name','The product name for the Product page');
  }

  get errorMessage() {
    return new Element('.alert.alert-warning', 'Error message of the product page');
  }

  async countProducts(reverse){
    return this.products.getElementsCount(reverse);
  }

  async errorMessageGetText(){
    return this.errorMessage.getText();
  }

  async getProductsText(){
    return this.products.getTextFromElements();
  }
}

module.exports = new HomePage();