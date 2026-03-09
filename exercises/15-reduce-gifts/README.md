# `15` Reduce Gifts

Determine the minimum number of items to remove from an array of prices so that the sum of any `k` consecutive items does not exceed a given `threshold`.

## Problem Statement

You are given an array of integers `prices`, where each integer represents the price of an item. You are also given two integers `k` and `threshold`. Your task is to remove the minimum number of items from the array so that the sum of any `k` consecutive items in the resulting array does not exceed `threshold`.

If the length of `prices` is less than `k`, no items need to be removed.

## Input

- `prices`: array of integers (`1 <= prices.length <= 10^5`, `1 <= prices[i] <= 10^4`)
- `k`: integer (`1 <= k <= 10^5`)
- `threshold`: integer (`1 <= threshold <= 10^5`)

## Output

Return the minimum number of items that need to be removed. If no removals are needed, return `0`.

## Examples

```txt
prices = [3, 2, 1, 4, 6, 5]
k = 3
threshold = 14
Output: 1
```
Explanation: window `[4,6,5]` sums to `15` (> 14), so removing one item (for example `6`) makes all size-3 windows valid.

```txt
prices = [9, 6, 7, 2, 7, 2]
k = 3
threshold = 14
Output: 2
```
Explanation: more than one size-3 window exceeds `14`, so at least two removals are needed to satisfy the condition everywhere.


