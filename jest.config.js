/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Ajusta según tu estructura
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
