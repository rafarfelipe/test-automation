const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      screenshot: true
      video: true
      // implement node event listeners here
    },
  },
});
