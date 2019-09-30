module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for(let symbol of str) {
    for (let pair of bracketsConfig) {
      if(symbol === pair[1] && pair[0] === stack[stack.length - 1])
        stack.pop();
      else if(symbol === pair[0] || symbol === pair[1] )
        stack.push(symbol);
    }
  }
  return stack.length === 0;
}

// stack  - technology was base to solve this problem
// symbol - each bracket of given string which will be iterated
// pair   - each pair type of opening and closing bracket  

// pair[0] === stack[stack.length - 1]  - to avoid cases like '([(]'
// symbol === pair[1]                   - to avoid cases like ')' 
