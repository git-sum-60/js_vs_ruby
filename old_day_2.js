// ```# Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])```


function selectEvenItems(strings) {
  var newArray = [];
  for (var i = 0; i < strings.length; i++) {
    if (i % 2 === 0) {
      newArray.push(strings[i])
    }
  }
  return newArray;
}


// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]))



// ```# Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])```

function max(numbers) {
  var currentMax = 0;
  numbers.forEach(function(number) {
    if (number > currentMax) {
      currentMax = number;
    }
  })
  return currentMax;
}

// console.log(max([5, 4, 8, 1, 2]));

// ```# Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// def factorial(number)
//   result = 1
//   current_number = number
//   number.times do
//     result = result * current_number
//     current_number = current_number - 1
//   end
//   result
// end
// p factorial(5)```

// ```# Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

// def descending(numbers)
//   result = []
//   index = numbers.length - 1
//   numbers.length.times do
//     result << numbers[index]
//     index = index - 1
//   end
//   result
// end
// p descending([1, 3, 5, 7])```

function descending(numbers) {
  var flippedArray = [];
  for (var i = numbers.length - 1; i >= 0; i--) {
    flippedArray.push(numbers[i]);
  }
  return flippedArray;
}


// console.log(descending([1, 3, 5, 7]))

// ```# Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// def sum_combinations(numbers1, numbers2)
//   result = []
//   numbers1.each do |number1|
//     numbers2.each do |number2|
//       result << number1 + number2
//     end
//   end
//   result
// end
// p sum_combinations([1, 5, 10], [100, 500, 1000])```

// Bonus: Convert the following sorting algorithms from Ruby to JavaScript! https://www.sitepoint.com/sorting-algorithms-ruby/ 

// Solve the following problems first in Ruby, then convert the solution to JavaScript.
// 1. Write a function that takes in an array of numbers and returns its sum.

function sum(numbers) {
  var sum = 0; 
  numbers.forEach(function(number) {
    sum += number
  })
  return sum;
}

// console.log(sum([1,3,5,7,9]));



// 2. Write a function that takes in an array of strings and returns the smallest string.
function smallestString(strings) {
  var smallest = strings[0]
  strings.forEach(function(word) {
    if (smallest.length > word.length) {
      smallest = word;
    }
  })
  return smallest;
}

// console.log(smallestString(['i', 'am', 'the', 'smallest', 'string']));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
function reverse(numbers) {
  var reversed = [];
  // loop through
  // *=
  for (var i = numbers.length -1; i >= 0; i--) {
    reversed.push(numbers[i]);
  }
  return reversed;
}

// console.log(reverse([2,4,6,8,10]))

// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

// loop through all the words
// inside the loop check if the first character is a
// if it is, increment a counter
// at the end, return the counter

function aCount(words) {
  var count = 0;
  words.forEach(function(word) {
    if (word[0] === 'a') {
      count++;
    }
  })
  return count;
}

// console.log(aCount(['apple', 'arboretum', 'ballast']));

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

function stringSeparatedByCommas(strings) {
  return strings.join(",");
}



// console.log(stringSeparatedByCommas(['my', 'name', 'is', 'margarita']));
// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 

function product(numbers) {
  var product = 1;
  numbers.forEach(function(number) {
    product *= number;
  })
  return product;
}

// console.log(product([1,3,5]));

// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
function twoSmallest(numbers) {
  return numbers.sort().splice(0,2);
}

// console.log(twoSmallest([2,5,7,9,4,1,0]));

// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

function zeroes(numbers) {
  var count = 0;
  numbers.forEach(function(number) {
    if (number === 0) {
      count++;
    }
  })
  return count;
}

// console.log(zeroes([2,5,7,9,4,1,0,0,0]));


// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

function allBig(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 10) {
      return false;
    }
  }
  return true;
}

console.log(allBig([100,11,12,13]));
console.log(allBig([10,11,12,3]));


// 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.



// BONUS PROBLEMS
// Write a function that accepts a string and returns whether it’s a palindrome. 

// Write a function to generate/print/store the first "n" prime numbers.
// https://stackoverflow.com/questions/17382165/javascript-find-first-n-prime-numbers

// Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won.
