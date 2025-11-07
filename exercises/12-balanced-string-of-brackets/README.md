# `12` Validate a Balanced String of Brackets

Write a function named `isBalanced` that takes a string as input and determines if the string contains balanced brackets. The brackets include `()`, `{}`, and `[]`. A string is considered balanced if:
1. Every opening bracket has a corresponding closing bracket of the same type.
2. Brackets close in the correct order.

## Examples:

```javascript
isBalanced("()");             // Returns: true
isBalanced("([{}])");         // Returns: true
isBalanced("({[)]}");         // Returns: false
isBalanced("((())");          // Returns: false
isBalanced("({[]}){}[]");     // Returns: true
```

## Rules:
1. The input string can contain any combination of brackets and other characters. Ignore non-bracket characters.
2. Return `true` if the brackets are balanced; otherwise, return `false`.

## Constraints:
- The solution must handle nested brackets.
- Use an efficient approach with a time complexity of O(n).
