module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  transformIgnorePatterns: ['node_modules', '/.next/', '/coverage/'],
  projects: ['<rootDir>/packages/**/jest.config.js']
}
