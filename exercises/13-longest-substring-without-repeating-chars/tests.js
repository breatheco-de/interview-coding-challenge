// Jest tests for lengthOfLongestSubstring
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

it('returns 3 for abcabcbb', () => {
  mockReadline('abcabcbb');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(3);
});

it('returns 1 for bbbbb', () => {
  mockReadline('bbbbb');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(1);
});


