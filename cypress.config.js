const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = {
  e2e: {
    supportFile: false,
    specPattern: "./src/__tests__/acceptance/features/*.feature",

    setupNodeEvents: (on, config) => {
      on("file:preprocessor", cucumber());
    },
  },
};
