// Jest tests for twoSum
global.console.log = console.log = jest.fn(() => null);

beforeEach(() => {
  jest.resetModules();
  console.log.mockClear();
  global.readline = undefined;
  global.input = undefined;
});

function mockReadline(obj) {
  const raw = JSON.stringify(obj);
  global.readline = jest.fn(() => raw);
  global.input = jest.fn(() => raw);
}

it('returns [0,1] for [2,7,11,15],9', () => {
  mockReadline({ nums: [2,7,11,15], target: 9 });
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith([0,1]);
});

it('returns [1,2] for [3,2,4],6', () => {
  mockReadline({ nums: [3,2,4], target: 6 });
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith([1,2]);
});


