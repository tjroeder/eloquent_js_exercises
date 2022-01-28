// Journal exercise
// let journal = require('./journal.js');

// function addEntry(events, squirrel) {
//   journal.push({events, squirrel});
// }

// function phi([n00, n01, n10, n11]) {
//   return (n11 * n00 - n10 * n01) /
//     Math.sqrt((n10 + n11) * (n00 + n01) *
//               (n01 + n11) * (n00 + n10));
// }

// function tableFor(event, journal) {
//   let table = [0, 0, 0, 0];
//   for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i], index = 0;
//     if (entry.events.includes(event)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;
// }

// function journalEvents(journal) {
//   let events = [];
//   for (let entry of journal) {
//     for (let event of entry.events) {
//       if (!events.includes(event)) {
//         events.push(event);
//       }
//     }
//   }
//   return events;
// }

// function max(...numbers) {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// }

// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

// The Sum of a Range
console.log('Sum of a Range Exercise');

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(nums) {
  sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

// Reversing an array
console.log('Reversing an Array Exercise');

function reverseArray(array) {
  let tempArray = [];

  for (let elem of array) {
    tempArray.unshift(elem);
  }
  return tempArray;
}

console.log(reverseArray(['A', 'B', 'C']));

function reverseArrayInPlace(array) {
  let tempArray = [];

  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// A List Exercise
console.log('A List Exercise');

function arrayToList(array) {
  if (array.length === 1) return {value: array[0], rest: null};
  let index = 0;
  let list = {value: array[index], rest: arrayToList(array.slice(1))};

  return list;
}

console.log(arrayToList([10,20]));

function listToArray(list) {
  if(list.rest === null) return [list.value];
  let array = [];
  
  return array.concat(list.value).concat(listToArray(list.rest));
}

console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(element, list) {
  return {value: element, rest: list};
}

console.log(prepend(10, prepend(20, null)));

function nth(list, index) {
  if (!list) return undefined;
  else if (index === 0) return list.value;
  else return nth(list.rest, index - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1));

// Deep Comparison Exercise

console.log('Deep Comparison Exercise');

function deepEqual(obj1, obj2) {
  
  if (obj1 === obj2) return true;
  if (obj1 == null || typeof obj1 != 'object' || 
  obj2 == null || typeof obj2 != 'object') return false;
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1 != keys2) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

let obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, null));
console.log(deepEqual(null, null));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));