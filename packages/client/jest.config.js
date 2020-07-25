const { name } = require('./package.json')

module.exports = {
  displayName: name,
  name,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules', '/.next/', '/coverage/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
