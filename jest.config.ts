import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  moduleNameMapper: {
    '^lib/(.*)': '<rootDir>/lib/$1',
  },
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.(t|j)s?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
};

export default config;
