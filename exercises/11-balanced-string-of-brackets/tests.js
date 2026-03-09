// Jest tests for isBalanced
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

it('returns true for ()', () => {
  mockReadline('()');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(true);
});

it('returns false for ({[)]}', () => {
  mockReadline('({[)]}');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(false);
});


