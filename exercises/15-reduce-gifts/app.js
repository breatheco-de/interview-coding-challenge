function reduceGifts(prices = [], k = 3, threshold = 14) {
  // TODO: implement the algorithm and return an integer (number of removals)
  return 0;
}

// IGNORE BELOW THIS LINE
// Read input as JSON object: { prices: [...], k: number, threshold: number }
const _raw = (typeof readline === "function" ? readline() : (typeof input === "function" ? input() : undefined));
let payload = { prices: [3, 2, 1, 4, 6, 5], k: 3, threshold: 14 };
try {
  if (_raw) payload = JSON.parse(_raw);
} catch (e) {
  payload = payload;
}

console.log(reduceGifts(payload.prices || [], payload.k || 0, payload.threshold || 0));
