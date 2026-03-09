// Jest tests for productExceptSelf
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

it("returns [24,12,8,6] for [1,2,3,4]", () => {
  mockReadline([1, 2, 3, 4]);
  require("./app.js");
  expect(console.log).toHaveBeenCalledWith([24, 12, 8, 6]);
});

it("returns [0,0,9,0,0] for [-1,1,0,-3,3]", () => {
  mockReadline([-1, 1, 0, -3, 3]);
  require("./app.js");
  expect(console.log).toHaveBeenCalledWith([0, 0, 9, 0, 0]);
});
