# `05` Longest Word

Have the function `LongestWord(sen)` take the `sen` parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume `sen` will not be empty. Words may also contain numbers, for example "Hello world123 567"

# Examples

```
Input: "fun&!! time"
Output: time
```
Explanation: punctuation is ignored, so valid words are `fun` and `time`; `time` is longer.

```
Input: "I love dogs"
Output: love
```
Explanation: `love` and `dogs` have the same length, so the first one in the sentence is returned.

