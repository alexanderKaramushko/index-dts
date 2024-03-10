/* eslint-disable no-undef */

afterEach(() => {
  if (globalThis.gc) {
    globalThis.gc();
  }
});

globalThis.console = {
  ...console,
  // uncomment to ignore a specific log level
  // log: jest.fn(),
  debug: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
};
