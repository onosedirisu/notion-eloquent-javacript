// FLATTENING
let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArray = arrays.reduce((a, b) => {
  return a.concat(b);
}, []);

console.log(flattenedArray);


//YOUR OWN LOOP
function loop(value, testFn, updateFn, bodyFn) {
    for (let i = value; testFn(i); i = updateFn(i)) {
      bodyFn(i);
    }
  }
  
loop(1, x => x <= 5, x => x + 1, console.log);


//EVERYTHING