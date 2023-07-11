/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. 
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  s = s.split("");

  let parentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let bracket = s[i];

    if (bracket in parentheses) {
      stack.push(s[i]);
    } else {
      const lastBracket = stack.pop();
      if (parentheses[lastBracket] !== bracket) {
        return false; // Mismatched opening and closing brackets
      }
    }
  }
  return stack.length === 0;
};

let s = "(";

console.log(isValid(s));
