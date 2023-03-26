// THE SUM OF A RANGE
//1st part
function range(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
console.log(range(1, 10));

//2nd part
function sum(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  }
console.log(sum([1, 2, 3, 4, 5])) ;

//3rd part
function range(start, end, step = 0) {
    const arr = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        arr.push(i);
      }
    } else if (step < 0) {
      for (let i = start; i >= end; i += step) {
        arr.push(i);
      }
    } else {
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
    }
    return arr;
  }
console.log(range(1, 10, 2));


//REVERSING AN ARRAY
function reverseArray(arr) {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
  
  function reverseArrayInPlace(arr) {
    for (let i = 0; i < (arr.length / 2); i++) {
      const permanent = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = permanent;
    }
    return arr;
  }

const arr = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arr));
console.log(arr);


// A LIST



//DEEP COMPARISON
function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
  
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") {
      return false;
    }
  
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) {
      return false;
    }
}
console.log(deepEqual(1, 5))