
# WebdriverStart

QA Automation scripts in using [AutomationPractice](http://www.automationpractice.pl) website.

### Technology stack
<div>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/WebdriverIo-000000?style=for-the-badge&logo=webdriverio&logoColor=EA5906" />
  <img src="https://img.shields.io/badge/Cucumber-000000?style=for-the-badge&logo=cucumber&logoColor=163647&color=55bb67">
  <img src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white" />
</div>

## Structure of the project

This project is based on knowledge acquired at A1QA and further supported by TAU and their Automation course for Javascript using WebdriverIo

<img src="https://github.com/KrzysiuGetReckt/TAU/blob/cucumber/images/framework.jpg" />


## Installation

Install WebdriverStart with npm in the root directory of the project

```bash
  npm install
```


## Running Tests

**The executed QA tests check:**

The ability to login to an account and access the account details.

Navigating through the site using the menu links to various pages.

Search feature of the site.


**To run qa tests, run the following command:**

For Chrome
```bash
  npm run test:chrome
```
For Firefox
```bash
  npm run test:firefox
```

## Changing Test Data

The test data is build upon the use of the Feature files using the Gherkin language to give a meaningfull structure of executing Automated Testing. To change it's contents you will need an understanding of the structure of feature files.

Additionally the Login feature test should be suplied with proper passwords through an .env file for storing the passwords and changing the "credentials.js" file with the proper email informatiom.

<img src="https://github.com/KrzysiuGetReckt/TAU/blob/cucumber/images/testData.jpg">


### Executed tests

For selecting the executed tests we can edit the "wdio.conf.js" file using the tags used in Feature files.

<img src="https://github.com/KrzysiuGetReckt/TAU/blob/cucumber/images/tags.jpg">

## The Framework

The initial framework is reused from the [Tau WebdriverIo Branch](https://github.com/KrzysiuGetReckt/TAU/tree/webdriverStart)

