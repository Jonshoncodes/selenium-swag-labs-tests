const { By, until } = require('selenium-webdriver');
const getDriver = require('../helpers/driver');
const assert = require('assert');

describe('Cart Tests', function () {
  this.timeout(20000);
  let driver;

  beforeEach(async () => {
    driver = await getDriver();
    await driver.get('https://www.saucedemo.com/');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();
    await driver.wait(until.urlContains('inventory'), 5000);
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should add product to cart', async () => {
    await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click();
    const cartBadge = await driver.findElement(By.className('shopping_cart_badge')).getText();
    assert.strictEqual(cartBadge, '1');
  });
});
