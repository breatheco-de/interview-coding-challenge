// Mock console.log before requiring the program
global.console.log = console.log = jest.fn(() => null);

beforeEach(() => {
  jest.resetModules();
  console.log.mockClear();
});

it('calls console.log 100 times', () => {
  require('./app.js');
  expect(console.log).toHaveBeenCalledTimes(100);
});

it('prints "Tic" for multiples of 3 (but not 5)', () => {
  require('./app.js');
  // 3rd call (i=3), 6th call (i=6), etc., except multiples of 15
  expect(console.log.mock.calls[2][0]).toBe("Tic");  // i=3
  expect(console.log.mock.calls[5][0]).toBe("Tic");  // i=6
  expect(console.log.mock.calls[8][0]).toBe("Tic");  // i=9
});

it('prints "Toc" for multiples of 5 (but not 3)', () => {
  require('./app.js');
  // 5th call (i=5), 10th call (i=10), etc., except multiples of 15
  expect(console.log.mock.calls[4][0]).toBe("Toc");  // i=5
  expect(console.log.mock.calls[9][0]).toBe("Toc");  // i=10
});

it('prints "TicToc" for multiples of both 3 and 5', () => {
  require('./app.js');
  // 15th call (i=15), 30th call (i=30), etc.
  expect(console.log.mock.calls[14][0]).toBe("TicToc"); // i=15
  expect(console.log.mock.calls[29][0]).toBe("TicToc"); // i=30
});

it('prints numbers otherwise', () => {
  require('./app.js');
  // 1st call (i=1), 2nd call (i=2), 4th call (i=4), etc.
  expect(console.log.mock.calls[0][0]).toBe(1);
  expect(console.log.mock.calls[1][0]).toBe(2);
  expect(console.log.mock.calls[3][0]).toBe(4);
});
