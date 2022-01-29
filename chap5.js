// Flattening Exercise
console.log('Flattening Exercise');
let arrays = [[1, 2, 3], [4, 5], [6]];

concatenator = (array1, array2) => array1.concat(array2);

console.log(arrays.reduce(concatenator, []));

// Your Own Loop Exercise
console.log('Your Own Loop Exercise');

function loop(start, test_func, update_func, body_func) {
  for (let value = start; test_func(value); value = update_func(value)) {
    body_func(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

// Everything Exercise
console.log('Everything Exercise');

function every(array, test) {
  for (let elem of array) {
    if (!test(elem)) return false;
  }

  return true;
}

function every_some(array, test) {
  return !array.some(elem => !test(elem));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

console.log(every_some([1, 3, 5], n => n < 10));
console.log(every_some([2, 4, 16], n => n < 10));
console.log(every_some([], n => n < 10));

// Dominant Writing Direction Exercise
console.log('Dominant Writing Direction Exercise');


