class HomePage {
    get pageUrl(){
        return browser.url('/');
    }

    get declineCookiesButton(){
        return $("#W0wltc > div.QS5gu");
    }

    get acceptCookiesButton(){
        return $('button#L2AGLb');
    }

    get searchField(){
        return $("div.a4bIc textarea.gLFyf");
    }

    get searchButton(){
        return $(".aajZCb .gNO89b");
    }

    async acceptCookies(){
        await this.acceptCookiesButton.waitForDisplayed(5000);
        return this.acceptCookiesButton.click();
    }

    async declineCookies(){
        await this.declineCookiesButton.waitForDisplayed(5000);
        return this.declineCookiesButton.click()
    }

    async search(keyword){
        await this.searchField.waitForDisplayed(5000);
        await this.searchField.click();
        await this.searchField.setValue(keyword);
        await this.searchButton.waitForDisplayed(5000);
        await this.searchButton.click();
    }
}

module.exports = new HomePage();