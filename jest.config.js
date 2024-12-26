module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "@swc/jest",
      // "^.+\\.(css|scss|sass)$": "jest-transform-stub",
    },
    moduleNameMapper: {
      "\\.module\\.css$": "identity-obj-proxy", 
    },
    testEnvironment: "jest-environment-jsdom",
  };
  