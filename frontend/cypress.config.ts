/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable global-require */
import { defineConfig } from 'cypress';


export default defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    downloadsFolder: 'cypress/downloads',
    supportFolder: './cypress/support',
    supportFile: './cypress/support/e2e.ts',
    viewportHeight: 800,
    viewportWidth: 1400,
    defaultCommandTimeout: 10000,
    video: false,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 0,
    trashAssetsBeforeRuns: true,
    env: {
      codeCoverage: {
        include: 'cypress/**/*.*',
      },
      env: {
      },
    },
    baseUrl: 'http://localhost:3001',
    specPattern: [
      'cypress/e2e/**/*',
    ],
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
  },
});
