var env = require('./environment.js');

// A small suite to make sure the cucumber framework works.
exports.config = {
  seleniumAddress: env.seleniumAddress,

  framework: 'custom',
  frameworkPath: '../index.js',

  // Spec patterns are relative to this directory.
  specs: [
    'cucumber/*.feature'
  ],

  multiCapabilities: [
    {
      browserName: 'chrome',
      version: 'ANY',
      cucumberOpts: {
        tags: '@dev',
        format: 'pretty'
      }
    }
  ],

  baseUrl: env.baseUrl,

  cucumberOpts: {
    require: 'cucumber/**/stepDefinitions.js',
    tags: '@failing',
    format: 'progress',
    profile: false,
    'no-source': true
  }
};
