// Jest tests for findMissingNumber
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

it('finds missing number 6', () => {
  mockReadline([3, 7, 1, 2, 8, 4, 5]);
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(6);
});

it('finds missing number 3', () => {
  mockReadline([1, 2, 4, 5, 6]);
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(3);
});


