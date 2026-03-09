/*
How it Works:
A stack is used to keep track of opening brackets.
For every character in the string:
- If it’s a closing bracket, check if it matches the top of the stack. If it does, remove the opening bracket from the stack.
- If it’s an opening bracket, add it to the stack.
After processing all characters, if the stack is empty, the string is balanced. If the stack still contains elements, there are unmatched brackets.
This approach runs in O(n) time and is efficient for checking balanced strings!

*/


function isBalanced(str) {
    // Define a mapping of closing to opening brackets
    const brackets = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
    
    // Use a stack to keep track of opening brackets
    const stack = [];
    
    for (let char of str) {
      // If the character is a closing bracket
      if (char in brackets) {
        // Check if the top of the stack matches the corresponding opening bracket
        if (stack.length > 0 && stack[stack.length - 1] === brackets[char]) {
          stack.pop(); // Valid pair, so remove the opening bracket from the stack
        } else {
          return false; // Mismatched bracket
        }
      } 
      // If it's an opening bracket, push it onto the stack
      else if (Object.values(brackets).includes(char)) {
        stack.push(char);
      }
    }
    
    // If the stack is empty, all brackets were matched
    return stack.length === 0;
  }
  
  // Test cases
  console.log(isBalanced("()"));             // true
  console.log(isBalanced("([{}])"));         // true
  console.log(isBalanced("({[)]}"));         // false
  console.log(isBalanced("((())"));          // false
  console.log(isBalanced("({[]}){}[]"));     // true
  