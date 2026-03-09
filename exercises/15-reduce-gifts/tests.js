// Jest tests for reduceGifts
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

it("returns 1 for [3,2,1,4,6,5], k=3, threshold=14", () => {
  mockReadline({ prices: [3, 2, 1, 4, 6, 5], k: 3, threshold: 14 });
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(1);
});

it("returns 2 for [9,6,7,2,7,2], k=3, threshold=14", () => {
  mockReadline({ prices: [9, 6, 7, 2, 7, 2], k: 3, threshold: 14 });
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(2);
});

it("returns 0 when no removals are needed", () => {
  mockReadline({ prices: [1, 1, 1, 1], k: 3, threshold: 10 });
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith(0);
});


