/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**", "src/**/*.js"],
  coverageThreshold: {
    global: {
      statements: 65,
      branches: 55,
      lines: 63,
      functions: 70,
    },
  },
};
