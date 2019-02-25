const {Builder} = require('selenium-webdriver');

before(async function () {
    console.log('Setting up chrome');
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
});

after(async function() {
    console.log('Closing chrome');
    driver.quit();
});