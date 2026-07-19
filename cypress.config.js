const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: "https://zotobank.zotomatise.com",

    setupNodeEvents(on, config) {
      allureWriter(on, config);

      return config;
    },
  },
});