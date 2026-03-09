/*
Explanation:
Boolean Array:
The present array starts with false for all indices.
For every number in the input array, mark the corresponding index in present as true.
Finding the Missing Number:
After marking, iterate through the present array starting from 1. The first false index corresponds to the missing number.
*/


function findMissingNumber(arr) {
    const n = arr.length + 1; // Full range is from 1 to n
    const present = new Array(n + 1).fill(false); // Boolean array for marking
    
    // Mark numbers that are present in the input array
    for (let num of arr) {
      present[num] = true;
    }
  
    // Find the first index that is not marked
    for (let i = 1; i <= n; i++) {
      if (!present[i]) {
        return i; // This is the missing number
      }
    }
  
    // Should never reach here if input is valid
    return -1;
  }
  
  // Test cases
  console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
  console.log(findMissingNumber([1, 2, 4, 5, 6]));       // Output: 3
  console.log(findMissingNumber([2, 3, 1, 5]));          // Output: 4