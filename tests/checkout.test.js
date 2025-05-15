const { By, until } = require('selenium-webdriver');
const getDriver = require('../helpers/driver');
const assert = require('assert');

describe('Checkout Tests', function () {
  this.timeout(30000);
  let driver;

  beforeEach(async () => {
    driver = await getDriver();
    await driver.get('https://www.saucedemo.com/');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();
    await driver.wait(until.urlContains('inventory'), 5000);
    await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click();
    await driver.findElement(By.className('shopping_cart_link')).click();
    await driver.findElement(By.id('checkout')).click();
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should complete checkout successfully', async () => {
    await driver.findElement(By.id('first-name')).sendKeys('John');
    await driver.findElement(By.id('last-name')).sendKeys('Doe');
    await driver.findElement(By.id('postal-code')).sendKeys('12345');
    await driver.findElement(By.id('continue')).click();
    await driver.findElement(By.id('finish')).click();
    await driver.wait(until.urlContains('checkout-complete'), 5000);
  });

  it('should show error when fields are empty', async () => {
    await driver.findElement(By.id('continue')).click();
    const error = await driver.findElement(By.css('[data-test="error"]')).getText();
    assert(error.includes('Error'));
  });
});
