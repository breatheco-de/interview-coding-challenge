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

it('returns "time" for "fun&!! time"', () => {
  mockPrompt("fun&!! time");
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('time');
});

it('returns "love" for "I love dogs"', () => {
  mockPrompt("I love dogs");
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('love');
});

it('returns "world123" for "Hello world123 567"', () => {
  mockPrompt("Hello world123 567");
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('world123');
});

it('returns "abc123" for "abc123 abc"', () => {
  mockPrompt("abc123 abc");
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('abc123');
});

it('returns "abc" for "abc def ghi"', () => {
  mockPrompt("abc def ghi");
  require('./app.js');
  expect(console.log).toHaveBeenCalledWith('abc');
});
