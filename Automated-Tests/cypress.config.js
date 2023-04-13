const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://ensekautomationcandidatetest.azurewebsites.net',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
