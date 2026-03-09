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
  mockPrompt('hello*3');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('ifmmp*3');
});

it('transforms "fun times!" into "gvO Ujnft!"', () => {
  mockPrompt('fun times!');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('gvO Ujnft!');
});

it('handles the z wrap-around: "abc xyz" -> "bcd yzA"', () => {
  mockPrompt('abc xyz');
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('bcd yzA');
});


