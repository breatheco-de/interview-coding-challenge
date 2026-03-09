# `07` Codeland Username Validation

Have the function `CodelandUsernameValidation(str)` determine if `str` is a valid username according to these rules:

1. Length is between 4 and 25 characters.
2. It starts with a letter.
3. It only contains letters, numbers, and underscore (`_`).
4. It does not end with underscore.

Return `true` if valid, otherwise return `false`.

## Examples

```txt
Input: "aa_"
Output: false
```
Explanation: it fails multiple rules: length is below 4 and it ends with underscore.

```txt
Input: "u__hello_world123"
Output: true
```
Explanation: it starts with a letter, has valid characters only, valid length, and does not end with underscore.

