const { name } = require('./package.json')

module.exports = {
  displayName: name,
  name,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
