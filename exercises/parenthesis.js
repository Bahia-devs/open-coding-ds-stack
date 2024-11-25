/**
 * https://leetcode.com/problems/valid-parentheses/description/
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const size = s.length
  const stack = []
  let stackTop = -1
  const openDictionary = {
    "(": true,
    "[": true,
    "{": true
  }

  if(s.length < 2) return false
  
  for(let i=0;i<size;i++){
    if(openDictionary[s[i]]){
      stack.push(s[i])
      stackTop++
    } else if(s[i] === ")" && stack[stackTop] === "("){
      stack.pop()
      stackTop--
    } else if(s[i] === "]" && stack[stackTop] === "["){
      stack.pop()
      stackTop--
    } else if(s[i] === "}" && stack[stackTop] === "{"){
      stack.pop()
      stackTop--
    } else {
      return false
    }
  }

  if(stack.length){
    return false
  }
  return true
};

console.log(isValid("()"))
console.log(isValid("(}"))
console.log(isValid("()[]{}"))
console.log(isValid("([])"))
console.log(isValid("]"))
console.log(isValid("){"))
console.log(isValid("(("))
console.log(isValid(")(){}"))