// Jest tests for Codeland Username Validation
global.console.log = console.log = jest.fn(() => null);

beforeEach(() => {
  jest.resetModules();
  console.log.mockClear();
  global.readline = undefined;
  global.input = undefined;
});

function mockReadline(s) {
  global.readline = jest.fn(() => s);
  global.input = jest.fn(() => s);
}

it('returns false for "aa_"', () => {
  mockReadline('aa_');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(false);
});

it('returns true for "u__hello_world123"', () => {
  mockReadline('u__hello_world123');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(true);
});


