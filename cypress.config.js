const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1536,
  viewportHeight: 960,
  e2e: {
    baseUrl: 'https://tsl.io',
  },
});
