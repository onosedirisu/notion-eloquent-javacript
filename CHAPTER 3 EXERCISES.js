// CHAPTER 3 EXERCISES


//MINIMUM
function min(num1, num2) {
    return num1 < num2 ? num1 : num2;
  }
  
  console.log(min(0, 10));
  console.log(min(0, -10)); 


// RECURSION
function isEven(num) { 
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven(num - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1)); 


//BEAN COUNTING
function countBs(str) {
    return countChar(str, "B");
  }
  
  function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == char) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countBs("BBC"));
  console.log(countChar("kakkerlak", "k"));
  console.log(countChar("hello world", "o")); 