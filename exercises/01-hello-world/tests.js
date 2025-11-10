// Mock console.log before requiring the module
global.console.log = console.log = jest.fn(() => null);

beforeEach(() => {
  jest.resetModules(); // Clear module cache
  console.log.mockClear(); // Clear mock calls
});

it('calls console.log exactly once', function () {
  require('./app.js');
  expect(console.log).toHaveBeenCalledTimes(1);
});

it('prints "Hello, World!" to the console', function () {
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('Hello, World!');
});
