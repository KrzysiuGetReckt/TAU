const HomePage = require("../../../pageObjects/homePage");

const search = async (keyword) => {
    return await HomePage.search(keyword);
}

module.exports = search;