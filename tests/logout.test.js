const { By, until } = require('selenium-webdriver');
const getDriver = require('../helpers/driver');
const assert = require('assert');

describe('Logout Test', function () {
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

  it('should log out successfully', async () => {
    // Open the menu
    await driver.findElement(By.id('react-burger-menu-btn')).click();

    // Wait for menu animation and visibility
    await driver.sleep(1000); // wait for menu to slide in (you can replace this with an explicit wait if needed)

    // Click logout
    await driver.findElement(By.id('logout_sidebar_link')).click();

    // Confirm we are back on the login page
    const currentUrl = await driver.getCurrentUrl();
    assert(currentUrl.includes('saucedemo.com'));
    const loginButton = await driver.findElement(By.id('login-button'));
    assert.ok(loginButton);
  });
});
