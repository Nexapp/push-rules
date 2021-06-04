// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  testMatch: [
    '**/__tests__/*.test.ts'
  ],
  'transform': {
    '^.+\\.(t|j)s?$': [
      'esbuild-jest',
      {
        sourcemap: true
      }
    ]
  }
};
