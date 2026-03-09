# `06` Letter Changes

Have the function `LetterChanges(str)` take the `str` parameter being passed and modify it using the following algorithm:

1. Replace every letter in the string with the next letter in the alphabet (`c` becomes `d`, `z` becomes `a`).
2. Capitalize every vowel in the transformed string (`a`, `e`, `i`, `o`, `u`).
3. Keep spaces, numbers, and symbols unchanged.

## Examples

```txt
Input: "hello*3"
Output: "ifmmp*3"
```
Explanation: each letter shifts one position (`h->i`, `e->f`, ...), while `*` and `3` stay unchanged.

```txt
Input: "fun times!"
Output: "gvO Ujnft!"
```
Explanation: after shifting letters, vowels in the transformed text (`o`, `u`) are capitalized.


