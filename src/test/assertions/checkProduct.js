const { CatalogPage } = require('../../pageObjects/index');
const { expect } = require('chai');

/**
 * Are there any products shown
 * 
 * @param {boolean} isItFound A true or false value depending if there are products shown on the web page
 */

const toBeFound = async (isItFound) => {
    if (isItFound) {
        expect(await CatalogPage.countProducts()).to.be.greaterThan(0, 'No products where found');
    } else {
        expect(await CatalogPage.countProducts(true)).to.equal(0, 'Products where found');
    }
}

module.exports = {
    toBeFound,
}