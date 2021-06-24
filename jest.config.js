module.exports = {
    preset: 'jest-expo',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },

    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testRegex: 'test.(ts|tsx)$',
    testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
    cacheDirectory: '.jest/cache',
    globals: {
      'ts-jest': {
        isolatedModules: true,
      },
    },
    clearMocks: true,
    verbose: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
    
  };