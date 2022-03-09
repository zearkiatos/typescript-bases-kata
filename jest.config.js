/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 0,
        branches: 0,
        lines: 0,
        functions: 0,
      },
    },
  };