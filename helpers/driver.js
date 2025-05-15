const { Builder } = require('selenium-webdriver');

async function getDriver() {
  return await new Builder().forBrowser('chrome').build();
}

module.exports = getDriver;