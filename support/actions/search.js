const HomePage = require("../../pageObjects/homePage");

const googleSearch = async (keyword) => {
    return HomePage.search(keyword)
}

module.exports = googleSearch;