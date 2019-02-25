# webdriverjs-framework
Basic Test Automation Framework using selenium-webdriver, Mocha and Allure Report

## Requirements
- Node version 11.0 or higher

## Quick start
1. Clone the repository
2. Install the dependencies `npm install`

## Features
- Super simple setup
- Use of Selenium Webdriver core
- Mocha for BDD and easy to read test scenarios
- Easy test reports with Allure Report
- ESM for ES6 syntax
- Support to Chrome browser

## How to write a test
Tests are written written in the [filename].test.js inside the test folder

## How to use
To run the test
```sh
$ npm test
```

To generate the test report
```sh
$ npm run report
```

## Future improvements
This is only basic testing framework with a lot of space for improvements like:
- Implementing the Page Object Pattern to increase mainteinability
- Implement selenium-based functions on another file to increase code readability
- Use chai or other assertion library to increase code readability
- Add multi-browser support
- Add support for parallel testing
- Add support for cloud testing (e.g. Browserstack, Saucelabs)
