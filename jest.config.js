module.exports = {
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  collectCoverageFrom: ['@sq-front/**/src/**/*.{js,jsx,mjs}'],
  setupFiles: ['<rootDir>/enzyme.config.js'],
};
