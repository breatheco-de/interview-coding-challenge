// Student stub for maxSubArray (Kadane)
function maxSubArray(nums) {
	// TODO: implement Kadane's algorithm and return the max sum
	return 0;
}

// IGNORE BELOW THIS LINE
const _raw = (typeof readline === 'function' ? readline() : (typeof input === 'function' ? input() : undefined));
let nums = [];
try {
	if (_raw) nums = JSON.parse(_raw);
} catch (e) {
	nums = [];
}

console.log(maxSubArray(nums));