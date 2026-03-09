// Jest tests for First Reverse
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

it('reverses coderbyte', () => {
  mockReadline('coderbyte');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('etybredoc');
});

it('reverses I Love Code', () => {
  mockReadline('I Love Code');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('edoC evoL I');
});


