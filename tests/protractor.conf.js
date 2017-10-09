// var webdriver = require('selenium-webdriver');
//
// var driver = new webdriver.Builder()
//    .forBrowser('chrome')
//    .build();

exports.config = {
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [
        '--lang=fr-FR'
      ],
      prefs: {
        intl: {accept_languages: "fr-FR"}
      }
    }
  },

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  cucumberOpts: {
    require: 'features/step_definitions/stepDefinitions.js'
  },
  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  }
};
