# `13` Find the Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring that does not contain any repeating characters.

- You may assume that the given string consists of only English letters, digits, symbols, and spaces.
- Feel free to describe the approach verbally before writing the solution, and try to improve upon any naive solution if possible.

## Example Inputs and Outputs

- Input: `"abcabcbb"`
  - Output: `3`
  - Explanation: The answer is `"abc"`, with the length of `3`.

- Input: `"bbbbb"`
  - Output: `1`
  - Explanation: The answer is `"b"`, with the length of `1`.

- Input: `"pwwkew"`
  - Output: `3`
  - Explanation: The answer is `"wke"`, with the length of `3`. Note that the answer must be a substring, `"pwke"` is not a valid answer.

## 💡 Hints (optional to provide during the interview if needed)

- Consider using a `sliding window` approach to maintain the current substring without repeating characters.
- Using a set or a dictionary could help keep track of characters efficiently.

## Feeling confident?

Make the function have an optimal runtime complexity. Aim for `O(n)` complexity, where `n` is the length of the string.