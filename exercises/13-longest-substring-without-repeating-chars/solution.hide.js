/**
Explanation:

Initialization:

- charIndexMap: A Map is used to store the last seen index of each character, allowing constant time lookup and update.
- maxLength: Tracks the longest length of a substring without repeating characters.
- start: Represents the starting index of the current sliding window.

Loop Through the String:

- The loop iterates through the string using end as the current position.
- If the character is found in charIndexMap and its recorded index is within or beyond start, this means there is a repetition in the current window. We move the start pointer to one position after the last occurrence of this character.
- Update the character's latest index in the map using charIndexMap.set(char, end).
- Calculate the length of the current substring (end - start + 1) and update maxLength accordingly.
 */

function lengthOfLongestSubstring(s) {
    let charIndexMap = new Map();  // A map to store the latest index of each character.
    let maxLength = 0;             // Keeps track of the longest substring length found.
    let start = 0;                 // Start pointer for the sliding window.

    for (let end = 0; end < s.length; end++) {
        let char = s[end];

        // If the character is in the map and its index is within the current window,
        // move the `start` pointer to right of the previous occurrence.
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }

        // Update the character's latest index in the map.
        charIndexMap.set(char, end);

        // Calculate the current length and update `maxLength` if needed.
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
