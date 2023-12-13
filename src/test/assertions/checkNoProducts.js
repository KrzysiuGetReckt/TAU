const { CatalogPage } = require('../../pageObjects/index')
const { expect } = require('chai');
const testData = require('../testData/testData');

const checkNoProducts = async () => {
    return expect(await CatalogPage.errorMessageGetText()).to.include(testData.catalog.noListing);
}

module.exports = {
    checkNoProducts,
}