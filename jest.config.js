/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 44,
        branches: 39,
        lines: 40,
        functions: 51,
      },
    },
  };