// Implement the function `friend` so it returns only the names with exactly 4 letters.
// The testing harness will call this file and provide input via `readline()` as a JSON array string.

function friend(friends) {
  // TODO: write your solution here
  // `friends` will be an array of strings, e.g. ["Ryan", "Kieran", "Mark", "Miguel"]
  // Return a new array containing only the names that have exactly 4 characters.
}

// IGNORE BELOW THIS LINE
// Read input and print the result
let input = ["Ryan", "Kieran", "Ana", "Mark", "Miguel", "Meg"];

try {
  const raw = typeof readline === "function" ? readline() : undefined;
  if (raw) input = JSON.parse(raw);
} catch (e) {
  input = [];
}

console.log(friend(input));
