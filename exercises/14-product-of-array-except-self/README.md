# `14` Product of Array Except Self

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all elements of `nums` except `nums[i]`.

## Rules

1. Do not use division.
2. Aim for `O(n)` time complexity.
3. Use `O(1)` extra space (excluding the output array).

## Examples

```txt
Input: [1,2,3,4]
Output: [24,12,8,6]
```
Explanation: each position contains the product of all other values (e.g. `24 = 2*3*4`, `12 = 1*3*4`).

```txt
Input: [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```
Explanation: because there is one zero, every position except the zero index becomes `0`; at the zero index, multiply non-zero values (`-1*1*-3*3 = 9`).


