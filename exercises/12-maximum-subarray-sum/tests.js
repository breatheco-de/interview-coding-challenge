// Jest tests for maxSubArray
global.console.log = console.log = jest.fn(() => null);

beforeEach(() => {
  jest.resetModules();
  console.log.mockClear();
  global.readline = undefined;
  global.input = undefined;
});

function mockReadline(arr) {
  const raw = JSON.stringify(arr);
  global.readline = jest.fn(() => raw);
  global.input = jest.fn(() => raw);
}

it('returns 6 for example array', () => {
  mockReadline([-2,1,-3,4,-1,2,1,-5,4]);
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(6);
});

it('returns 23 for [5,4,-1,7,8]', () => {
  mockReadline([5,4,-1,7,8]);
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(23);
});


