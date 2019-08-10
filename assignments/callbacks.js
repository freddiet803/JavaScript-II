// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

console.log(getLength(items, long => `length of array: ${long}`)); // wrote two ways for understanding
// console.log(
//   getLength(items, function(long) {
//     return 'length of array: ' + long;
//   })
// );

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastSpot = arr.length - 1;
  return cb(arr[lastSpot]);
}
console.log(last(items, last => `This is the last item: ${last}`));
// console.log(
//   last(items, function(theLast) {
//     return 'the last item is: ' + theLast;
//   })
// );

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}

console.log(sumNums(5, 6, total => `Your Sum is: ${total}`));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let product = x * y;
  return cb(product);
}

console.log(multiplyNums(5, 6, totalProd => `Your Product is: ${totalProd}`));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const filterArray = list.filter(thing => {
    return thing == item;
  });
  let testLength = filterArray.length;
  if (testLength > 0) {
    return cb(true);
  } else {
    return cb(false);
  }
}

console.log(contains('Gum', items, list => `the output was: ${list}`));
console.log(contains('Candy', items, list => `the output was: ${list}`));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
