const { CatalogPage } = require('../../pageObjects/index');
const { expect } = require('chai');

/**
 * Check if the name of the product contains the keyword 
 * 
 * @param {string} keyword The searched value of products 
 */

const checkProductsContain = async (keyword) => {
    const productsText = await CatalogPage.getProductsText();
    productsText.forEach( product => {
        expect(product.trim().toLowerCase()).to.contain(keyword);
    });
}

module.exports = {
    checkProductsContain,
}