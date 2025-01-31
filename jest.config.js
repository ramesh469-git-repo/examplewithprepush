module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      "!**/node_modules/**",
      "src/**/*.(js|jsx|ts|tsx)",
      "!src/**/*.test.(js|jsx|ts|tsx)"
    ],
    coverageReporters: ["json", "lcov", "text", "clover"],
    testEnvironment: "jest-environment-jsdom",
    testMatch: [
        "**/__tests__/**/*.(js|jsx|ts|tsx)",
        "**/?(*.)+(spec|test).(js|jsx|ts|tsx)"
      ],
      moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
      },
      setupFilesAfterEnv: ['<rootDir>/setupTests.js']
  };
  