var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then, setDefaultTimeout}) {
  setDefaultTimeout(60000);

  Given(/^I go to "([^"]*)"$/, function (url, next) {
    browser.get(url);
    next();
  });

  When(/^I insert text "([^"]*)" in search input$/, function (search, next) {
    element(by.id('search')).sendKeys(search);
    next();
  });

  When(/^I click button "([^"]*)" to choose a product$/, function (button, next) {
    element(by.id('update')).click();
    next();
  });

  When(/^I insert text "([^"]*)" in description input$/, function (description, next) {
    element(by.id('description')).clear();
    element(by.id('description')).sendKeys(description);
    next();
  });

  When(/^I click button "([^"]*)" to update$/, function (button, next) {
    element(by.id('update')).click();
    next();
  });

  Then(/^I should be able go to "([^"]*)"$/, function (url, next) {
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).notify(next);
  });
});
