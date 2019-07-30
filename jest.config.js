module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.@(ts|tsx|js|jsx)"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
