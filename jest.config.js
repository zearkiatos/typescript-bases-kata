/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**", "src/**/*.js"],
  coverageThreshold: {
    global: {
      statements: 68,
      branches: 62,
      lines: 66,
      functions: 73,
    },
  },
};
