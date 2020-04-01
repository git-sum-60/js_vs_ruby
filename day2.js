// # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

function allSums(array1, array2) {
  var sums = [];
  array1.forEach(function(number1) {
    // console.log("-");
    // console.log(number1);
    array2.forEach(function(number2) {
      // console.log(number2);
      sums.push(number1 + number2);
    });
  });
  return sums;
}

// console.log(allSums([1, 5, 10], [100, 500, 1000]));

// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

function everyOther(letters) {
  var i = 0;  
  var filteredArray = [];
  letters.forEach(function(letter) {
    if (i % 2 === 0) {
      filteredArray.push(letter);
    }
    i++;
  });
  return filteredArray;
}

console.log(everyOther(["a", "b", "c", "d", "e", "f"]));