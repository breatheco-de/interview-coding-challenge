// Jest tests for the Filter Friends exercise
global.console.log = console.log = jest.fn(() => null);

beforeEach(() => {
  jest.resetModules();
  console.log.mockClear();
  global.readline = undefined;
});

function mockReadline(arr) {
  global.readline = jest.fn(() => JSON.stringify(arr));
}

it('filters the example list', () => {
  mockReadline(["Ryan", "Kieran", "Mark", "Miguel"]);
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(["Ryan", "Mark"]);
});

it('returns empty array for no friends', () => {
  mockReadline([]);
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith([]);
});

it('handles all 4-letter names', () => {
  mockReadline(["John", "Paul", "Ringo"]);
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(["John", "Paul", "Ringo"].filter(n => n.length === 4));
});


