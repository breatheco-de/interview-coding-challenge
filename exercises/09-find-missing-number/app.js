// Student stub for findMissingNumber
function findMissingNumber(arr) {
	// TODO: implement to find the single missing number in range 1..n
	return -1;
}

// IGNORE BELOW THIS LINE
// Read input from readline() or input() as JSON array
const _raw = (typeof readline === 'function' ? readline() : (typeof input === 'function' ? input() : undefined));
let nums = [];
try {
	if (_raw) nums = JSON.parse(_raw);
} catch (e) {
	nums = [];
}

console.log(findMissingNumber(nums));