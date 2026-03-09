// Student stub for twoSum
function twoSum(nums, target) {
	// TODO: implement and return indices array
	return null;
}

// IGNORE BELOW THIS LINE
// Read input as JSON object: { nums: [...], target: n }
const _raw = (typeof readline === 'function' ? readline() : (typeof input === 'function' ? input() : undefined));
let payload = { nums: [], target: 0 };
try {
	if (_raw) payload = JSON.parse(_raw);
} catch (e) {
	payload = payload;
}

const result = twoSum(payload.nums || [], payload.target || 0);
console.log(result);