
# WebdriverStart

QA Automation scripts in using [the-internet.herokuapp](https://the-internet.herokuapp.com/) website.

### Technology stack
<div>
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/WebdriverIo-000000?style=for-the-badge&logo=webdriverio&logoColor=EA5906" />
  <img src="https://img.shields.io/badge/Cucumber-000000?style=for-the-badge&logo=cucumber&logoColor=black&labelColor=%2338B832&color=%23173647">
  <img src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white" />
</div>

## Structure of the project

This project is based on knowledge acquired at A1QA and further supported by TAU and their Automation course for Javascript using WebdriverIo

<img src="https://github.com/KrzysiuGetReckt/TAU/blob/webdriverStart/images/framework.jpg" />

### The Framework

The framework of the project can be used for other projects, creating a set of tools that are reusable.

#### BrowserActions

Overriding the base functionality of WebdriverIo browser action based method adding Logger functionality.

#### Elements and ElementStateProvider

Overriding the base functionality of WebdriverIo methods using Elements on the webpage adding Logger and Assertions lessening the use of Chai assertions though the test scripts

#### Logger

The used Logger in this project is [Winston](https://www.npmjs.com/package/winston).
Adding logger functionality through the project and creating logger files as the testplan is executed.

Dir:
```
  ./logs/logs.txt
```

This folder can be changed in "./enviroment/envConfig.js"
``` Javascript
  module.exports = {
  ENVIRONMENT: process.env.ENVIRONMENT || 'test',
  LOGSDIR: process.env.LOGSDIR || 'logs/logs.txt', // changing the directory and file name of the logs
};
```

## 

### Page Object Model

This model is used to separate every web page into different files easing the burden of amending code, fixing locators and adding functionality for tests.
Each file grouping the locators and methods used through the QA Automation testing.

<img src="https://github.com/KrzysiuGetReckt/TAU/blob/webdriverStart/images/pageObject.jpg" />

## Installation

Install WebdriverStart with npm in the root directory of the project

```bash
  npm install
```


## Running Tests

<img src="https://github.com/KrzysiuGetReckt/TAU/blob/webdriverStart/images/test.jpg" />

To run qa tests, run the following command:

For Chrome
```bash
  npm run test:chrome
```
For Firefox
```bash
  npm run test:firefox
```

## Changing Test Data

The test is build upon seperation of the data needed for test automation from the main Test files.
This folder stores files needed for sucessfull automation testing and as it's name implies the data that exists on the webpage. Creating an organized place to change variables without inspecting the test files, pageObjects.

<img src="https://github.com/KrzysiuGetReckt/TAU/blob/webdriverStart/images/testData.jpg">
