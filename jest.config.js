module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_mdules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
