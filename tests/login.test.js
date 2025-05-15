const { By, until } = require('selenium-webdriver');
const getDriver = require('../helpers/driver');
const assert = require('assert');

describe('Login Tests', function () {
  this.timeout(20000);
  let driver;

  beforeEach(async () => {
    driver = await getDriver();
    await driver.get('https://www.saucedemo.com/');
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should login successfully with valid credentials', async () => {
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();
    await driver.wait(until.urlContains('inventory'), 5000);
  });

  it('should show error for invalid login', async () => {
    await driver.findElement(By.id('user-name')).sendKeys('wrong_user');
    await driver.findElement(By.id('password')).sendKeys('wrong_pass');
    await driver.findElement(By.id('login-button')).click();

    const error = await driver.findElement(By.css('[data-test="error"]')).getText();
    assert(error.includes('Username and password do not match'));
  });

  it('should block locked out user', async () => {
    await driver.findElement(By.id('user-name')).sendKeys('locked_out_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    const error = await driver.findElement(By.css('[data-test="error"]')).getText();
    assert(error.includes('locked out'));
  });
});
