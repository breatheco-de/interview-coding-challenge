/*
Explanation:

1. **Loop Through Array**:
   - For each element in `nums`, calculate the `complement` required to reach the `target`.
2. **Check if Complement Exists**:
   - Use a hash map (`map`) to check if the complement has already been seen.
   - If it has, return the indices of the current number and the complement.
3. **Store the Index**:
   - If not, store the current number with its index in the map.
*/
function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }

    // If no solution is found (assuming there is always one per the prompt)
    return null;
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]