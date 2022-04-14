/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 48,
        branches: 46,
        lines: 44,
        functions: 52,
      },
    },
  };