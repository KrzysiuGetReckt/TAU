const { CatalogPage } = require('../../pageObjects/index');
const { expect } = require('chai');

const checkTitle = async (title) => {
    expect(await browser.getTitle()).to.equal(title);
}

module.exports = {
    checkTitle,
}