// Jest tests for Find Intersection
global.console.log = console.log = jest.fn(() => null);

beforeEach(() => {
  jest.resetModules();
  console.log.mockClear();
  global.readline = undefined;
  global.input = undefined;
});

function mockReadline(arr) {
  global.readline = jest.fn(() => JSON.stringify(arr));
  global.input = jest.fn(() => JSON.stringify(arr));
}

it('finds intersection 1,4,13', () => {
  mockReadline(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]);
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('1,4,13');
});

it('returns false when no intersection', () => {
  mockReadline(["1, 3, 9, 10, 17, 18", "2, 4, 6"]);
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(false);
});


