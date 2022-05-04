/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**", "src/**/*.js"],
    coverageThreshold: {
      global: {
        statements: 62,
        branches: 54,
        lines: 59,
        functions: 65,
      },
    },
  };