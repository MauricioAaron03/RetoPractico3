const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: '1iwdjz',

  reporter: 'cypress-mochawesome-reporter',
  
  trashAssetsBeforeRuns: true,   //Whether Cypress will trash assets within the downloadsFolder, screenshotsFolder, and videosFolder before tests run with cypress run.

  //Folders/ Files
  downloadsFolder: 'cypress/downloads',
  fixturesFolder: 'cypress/fixtures',

  //Screenshots
  screenshotsFolder: 'cypress/screenshots',
  screenshotOnRunFailure: true,  //Whether Cypress will take a screenshot when a test fails during cypress run.

  //Videos
  video: true,            //Whether Cypress will capture a video of the tests run with cypress run.
  videosFolder: 'cypress/videos',
  videoCompression: false,            //The quality setting for the video compression, in Constant Rate Factor (CRF). 

  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
