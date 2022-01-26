// Looping a triangle exercise
console.log('Looping a Triangle Exercise');
let symbol = '#';
let output = symbol;

for (let i = 1; i < 8; i++) {
  console.log(output.padEnd(i, symbol));
}

// FizzBuzz exercise
console.log('FizzBuzz Exercise');
let fizz = 'Fizz';
let buzz = 'Buzz';

// basic method
/* 
for (let i = 1; i < 101; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(fizz + buzz);
  } else if (i % 3 === 0) {
    console.log(fizz);
  } else if (i % 5 === 0) {
    console.log(buzz);
  } else {
    console.log(i);
  }
}
*/

for (let i = 1; i <= 100; i++) {
  let output = '';

  if (i % 3 === 0) output += fizz;
  if (i % 5 === 0) output += buzz;
  console.log(output || i);
}

// Chessboard exercise
console.log('Chessboard Exercise');
let size = 8;
let chars = [' ', '#']
output = '';

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    output += chars[j % 2]
  }
  output += '\n';
  chars.reverse();
}
console.log(output);
