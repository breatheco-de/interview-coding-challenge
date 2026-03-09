# `13` Find the Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring that does not contain repeated characters.

- You may assume the string contains English letters, digits, symbols, and spaces.
- Try to move from a naive approach to a better one.

## Examples

- Input: `"abcabcbb"`
  - Output: `3`
  - Explanation: The answer is `"abc"`.

- Input: `"bbbbb"`
  - Output: `1`
  - Explanation: The answer is `"b"`.

- Input: `"pwwkew"`
  - Output: `3`
  - Explanation: The answer is `"wke"`.

## Hint

A sliding-window approach can solve this in `O(n)` time.


