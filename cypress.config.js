const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    baseUrl: 'https://seubarriga.wcaquino.me/',
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
