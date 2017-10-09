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

  When(/^I click button "([^"]*)" to add product$/, function (button, next) {
    element(by.id('addproduct')).click();
    next();
  });

  When(/^I insert text "([^"]*)" in name input$/, function (name, next) {
    element(by.id('name')).sendKeys(name);
    next();
  });

  When(/^I insert text "([^"]*)" in description input$/, function (description, next) {
    element(by.id('description')).sendKeys(description);
    next();
  });

  When(/^I choose a category in list "([^"]*)"$/, function (button, next) {
    element(by.id('categories')).click();
    element(by.id('category-option')).click();
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    next();
  });

  When(/^I choose a brand in list "([^"]*)"$/, function (button, next) {
    element(by.id('brands')).click();
    element(by.id('brand-option')).click();
    next();
  });

  When(/^I click button "([^"]*)" to valid$/, function (button, next) {
    element(by.id('valid')).click();
    next();
  });

  Then(/^I should be able go to "([^"]*)"$/, function (url, next) {
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).notify(next);
  });
});
