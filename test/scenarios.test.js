const {By, until} = require('selenium-webdriver');
const assert = require('assert');

before(async function() {
    await driver.get('https://ruoff.nestready.co/select');
});

describe('1. Testing the Homepage', function() {
    it('should have the right title', async function() {
        const title = await driver.getTitle();
        assert.equal(title, 'Ruoff - Dashboard');
    });

    it('should show a standard message after clicking on search field', async function() {
        await driver.findElement(By.css('.Select-control')).click();
        await driver.wait(until.elementLocated(By.css('.Select-noresults span')), 10000);
        const readText = await driver.findElement(By.css('.Select-noresults span')).getText();
        // Enable the next line to see the browser state right before the assertion
        // await driver.sleep(2000);
        assert.equal(readText, 'Where will your dream home be located?');
    });

    it('should perform a no result search', async function() {
        await driver.findElement(By.css('input')).sendKeys('webdriver');
        const element = await driver.findElement(By.css('.Select-loading-zone'));
        await driver.wait(until.stalenessOf(element), 30000);
        const readText = await driver.findElement(By.css('.Select-noresults span')).getText();
        // Enable the next line to see the browser state right before the assertion
        // await driver.sleep(2000);
        assert.equal(readText, 'This location is not available');
    });

    it('should perform a valid search', async function() {
        await driver.findElement(By.css('input')).then(async function(input){
            await input.clear();
            await input.sendKeys('New York');
        });
        const element = await driver.findElement(By.css('.Select-loading-zone'));
        await driver.wait(until.stalenessOf(element), 30000);
        const city = await driver.findElement(By.id('react-select-searchBar--option-1'));
        // Enable the next line to see the browser state right before the assertion
        // await driver.sleep(2000);
        assert.equal(await city.getText(), 'New York, New York');
    });
});

describe('2. Testing the properties page filters', function() {
    it('should navigate to the properties page', async function() {
        let buttons;
        await driver.findElement(By.id('react-select-searchBar--option-1')).click();
        // TODO: refactor the do/while for selenium based functions like wait.until
        do {
            buttons = await driver.findElements(By.css('div .ant-btn'));
        } while (buttons.length !== 2);
        await buttons[1].click();
        // Enable the next line to see the browser state right before the assertion
        // await driver.sleep(2000);
        assert.equal(await driver.findElement(
            By.id('react-select-searchBar--value-item')).getText(),'New York (City)');
    });

    it('should narrow the properties list using the PRICE filter');
    it('should narrow the properties list using the ALL PROPERTY filter');
    it('should narrow the properties list using the ALL BEDS filter');
    it('should narrow the properties list using the ALL BATHS filter');
    it('should narrow the properties list using the COMMUTE filter');
    it('should narrow the properties list using the ALL BATHS filter');
    it('should narrow the properties list using the LIFESTYLE filter');
    it('should narrow the properties list using the DEMOGRAPHICS filter');
    it('should sort the properties list using the SORT BY filter');
});

describe('3. Testing other features in the properties page', function() {
    it('should save the search');
    it('should add properties to the FAVORITES');
    it('should add locations to the FAVORITES');
    it('should show above the FAVORITES heart icon the amount of properties added');
    it('should send an e-mail with the GET URL functionality');
    it('should switch to the MAP view mode');
});

describe('4. Testing the single property page', function (){
    it('should navigate to the selected property');
    it('should add the property to the favorites');
    it('should show the photos carousel');
    it('should switch the map view');
    it('should access the CONTACT option and send an E-MAIL');
    it('should access the REQUEST INFORMATION option and send an E-MAIL');
    it('should send the property via E-MAIL inside the PRE-APROVAL feature');
    it('should send the property via E-MAIL inside the APPLY NOW feature');
});