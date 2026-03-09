// Student stub for productExceptSelf
function productExceptSelf(nums) {
  // TODO: return an array where each index has the product of all other values
  return [];
}

// IGNORE BELOW THIS LINE
// Read input from readline() or input() as JSON array
const _raw = (typeof readline === "function" ? readline() : (typeof input === "function" ? input() : undefined));
let nums = [];
try {
  if (_raw) nums = JSON.parse(_raw);
} catch (e) {
  nums = [];
}

console.log(productExceptSelf(nums));
