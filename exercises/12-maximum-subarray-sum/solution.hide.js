/*
**Explanation:**

1. **Initialization**:
   - `maxSoFar` stores the maximum sum found so far.
   - `currentMax` keeps track of the maximum sum of the current subarray being considered.

2. **Iterate Over the Array**:
   - For each element, decide whether to add it to the current subarray (`currentMax + nums[i]`) or start a new subarray (`nums[i]`). This is done using `Math.max(nums[i], currentMax + nums[i])`.
   - Update `maxSoFar` if `currentMax` is greater.

**How Kadane’s Algorithm Works**:

- Kadane's Algorithm works by iterating through the array while keeping track of the best possible sum (`maxSoFar`) and the best sum ending at the current element (`currentMax`).
- It effectively divides the problem into smaller decisions—at each step, should you continue the current subarray or start a new one? 
*/

function maxSubArray(nums) {
    let maxSoFar = nums[0];   // To store the maximum sum encountered so far.
    let currentMax = nums[0]; // To store the maximum sum for the current subarray.

    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar;
}

// Example usage:
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([1]));                             // Output: 1
console.log(maxSubArray([5, 4, -1, 7, 8]));                 // Output: 23