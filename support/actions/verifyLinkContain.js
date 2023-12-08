const { Assert } = require('assert');
const SearchResultsPage = require('../../pageObjects/searchResultsPage');

const verifyLinkContain = async (keyword) => {
    return SearchResultsPage.searchResultLinks.forEach(link => {
        const linkText = link.getText().toLowerCase();
        if(linkText) {
            assert(
                linkText.includes(keyword),
                `Link text does not include ${keyword}`
            )
        }
    });
}

module.exports = verifyLinkContain;