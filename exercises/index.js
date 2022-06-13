// The sum of array
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10));// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 5));// [1, 2, 3, 4, 5]
console.log(range(1, 12));// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(range(6, 2, -2));// [6, 4, 2]
console.log(sum(range(1, 10)));// 55


// Reversing an array
function reverseArray(array) {
  let arrayResult = [];
  for(let i = array.length -1; i >=0; i--) {
    arrayResult.push(array[i]);
  }
  return arrayResult;
}
console.log(reverseArray(["A", "B", "C"]));// ["C", "B", "A"];y


function reverseArrayInPlace(array) {
  for(let i = 0; i < Math.floor(array.length / 2); i++) {
    let array1 = array[i];
    array[i] = array[(array.length - 1) - i];
    array[(array.length - 1) - i] = array1;
  }
  return array;
}


let array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log(array);// [5, 4, 3, 2, 1]

module.exports = { range, sum, reverseArray, reverseArrayInPlace }