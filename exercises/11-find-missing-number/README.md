# `11` Find the Missing Number


Write a function named `findMissingNumber` that takes an array of positive integers representing numbers in the range from `1` to `n`. The array contains all the numbers in that range except for one missing number. Your task is to find and return the missing number.

#### Rules:

1. The array is not necessarily sorted.
2. Exactly one number is missing.
3. Do not use external libraries like `lodash` or `underscore`.

#### Example Input and Output:

```javascript
findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // Returns: 6
findMissingNumber([1, 2, 4, 5, 6]);       // Returns: 3
findMissingNumber([2, 3, 1, 5]);          // Returns: 4
```

#### Requirements:
- The solution should be efficient (O(n) or O(n log n)).
- You can use basic data structures like arrays or objects.