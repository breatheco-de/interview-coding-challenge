# Reduce Gifts

Determine the minimum number of items to remove from an array of prices so that the sum of any `k` consecutive items does not exceed a given `threshold`.

## Problem Statement

You are given an array of integers `prices`, where each integer represents the price of an item. You are also given two integers `k` and `threshold`. Your task is to remove the minimum number of items from the array so that the sum of any `k` consecutive items in the resulting array does not exceed the `threshold`. If the length of `prices` is less than `k`, no items need to be removed.

### Input:

- An array of integers `prices` (1 ≤ length of `prices` ≤ 10^5, 1 ≤ prices[i] ≤ 10^4).
- An integer `k` (1 ≤ k ≤ 10^5).
- An integer `threshold` (1 ≤ threshold ≤ 10^5).

### **Output**:  

- Return the minimum number of items that need to be removed to satisfy the condition. If no items need to be removed, return `0`.

## Examples

Input:

```txt
prices = [3, 2, 1, 4, 6, 5]
k = 3
threshold = 14
```

Output: `1`

> The sum of the last three items `[4, 6, 5]` is `15`, which exceeds the threshold of `14`. Removing the item `6` results in `[3, 2, 1, 4, 5]`, where no three consecutive items exceed the threshold.

---

Input:

```txt
prices = [9, 6, 7, 2, 7, 2]
k = 3
threshold = 14
```

Output: `2`

> Multiple sets of three consecutive items exceed the threshold, so two items must be removed to satisfy the condition.


## Tips

- Aim for an efficient solution, as the input size can be large.
- Consider edge cases, such as when no items need to be removed or when multiple items could be removed to achieve the same result.