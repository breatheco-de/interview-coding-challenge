global.console.log = console.log = jest.fn(() => null);

beforeEach(() => {
  jest.resetModules();
  console.log.mockClear();
  global.prompt = undefined; // Clean up between tests
});

// Helper to mock prompt for each test
function mockPrompt(str) {
  global.prompt = jest.fn(() => str);
}

it('transforms "hello*3" into "ifmmp*3"', () => {
  mockReadline('hello*3');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('ifmmp*3');
});

it('transforms "fun times!" into "gvo tjnft!"', () => {
  mockReadline('fun times!');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('gvn tjnft!');
});

it('handles the z wrap-around: "abc xyz" -> "bcd yzA"', () => {
  mockReadline('abc xyz');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('bcd yzA');
});
