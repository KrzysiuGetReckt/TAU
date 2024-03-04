const { HomePage } = require("../../../pageObjects");

const search = async (keyword) => {
    return await HomePage.search(keyword);
}

module.exports = search;