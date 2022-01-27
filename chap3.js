// Minimum Exercise
console.log('Minimum Exercise');

function min(num1, num2) {
  if (num1 <= num2) return num1;
  return num2;
}

console.log(min(0, 10));
console.log(min(0, -10));

// Recursion Exercise
console.log('Recursion Exercise');

// basic example
// function isEven(num) {
//   if (num < 0) num *= -1;
//   if (num === 0) {
//     return true;
//   } else if (num === 1) {
//     return false;
//   } else {
//     return isEven(num - 2);
//   }
// }

function isEven(num) {
  if (num == 0) return true;
  else if (num == 1) return false;
  else if (num < 0) return isEven(-num);
  else return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean Counting Example
console.log('Bean Counting Example');

// original before rewrite
// function countBs(str) {
//   let count = 0;

//   for (i = 0; i < str.length; i++) {
//     if (str[i] === 'B') count++;
//   }
//   return count;
// }

function countBs(str) {
  return countChar(str, 'B');
}

console.log(countBs('BBC'));

function countChar(str, char) {
  let count = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}

console.log(countChar('kakkerlak', 'k'));
