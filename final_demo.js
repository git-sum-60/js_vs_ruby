// 2. Write a function that takes in an array of strings and returns the smallest string.


function smallest(strings) {
  // console.log(strings);
  var smallestString = strings[0];
  strings.forEach(function(string) {
    if (smallestString.length > string.length) {
      smallestString = string;
    }
  })
  return smallestString;
}

// console.log(smallest(['i', 'am', 'the', 'smallest']));

// 10. Write a function that takes in an array of words and returns the number of times the letter "a" appeared in total.


function countOfAs(words) {
  var count = 0;
  words.forEach(function(word) {
    // console.log(word);
    // split the word up into characters
    var lowerCasedWord = word.toLowerCase();
    var characters = lowerCasedWord.split("");
    characters.forEach(function(letter) {
      if (letter === 'a') {
        count++;
      }
      // console.log(letter);
    })
  })
  return count;
}


console.log(countOfAs(['i', 'Am', 'the', 'smAllest', 'AArdvArk', 'ApplesAuce', 'grnmr']));


// 7