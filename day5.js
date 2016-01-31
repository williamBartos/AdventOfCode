function getInput() {
 var fs = require('fs');
 return fs.readFileSync('day5input.txt', 'utf8');
}


function doubleTest(word) {
  for(var i = 0; i < word.length; i++){
      if (word.charAt(i) == word.charAt(i+1)){
        return true;
      }
    }
  return false;
}

function vowelTest(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  vowelCount = 0;
  word.split('').filter(function(letter) {
      if (vowels.indexOf(letter) !== -1) {
      vowelCount += 1;
    }
});
return vowelCount >=3;
}

function isNaughty(word) {
  var naughty = ['ab', 'cd', 'pq', 'xy'];
    for(var i=0; i< word.length; i++) {
      if ((word.charAt(i-1) + word.charAt(i)) == naughty[0] || (word.charAt(i-1) + word.charAt(i)) == naughty[1] || (word.charAt(i-1) + word.charAt(i)) == naughty[2] || (word.charAt(i-1) + word.charAt(i)) == naughty[3]){
      return false;
    }
  }
  return true;
}

var  appearsTwice = function(word) {
  var currentPair;
  for (var i = 0; i < word.length; i++) {
    currentPair = word.slice(i,i+2);
    if(word.indexOf(currentPair, i+2) !== -1) {
      return true;
    }
  }
  return false;
};

var hasPairs = function(word) {
  var currentPair;
  for(var i = 0; i < word.length; i++) {
    currentPair = word.slice(i, i+2);
    if(word.indexOf(currentPair, i+2) !== -1) {
      return true;
    }
  }
  return false;
};

var hasLetterBetweenRepeats = function(word) {
  for(var i = 2; i < word.length; i++) {
    if(word.charAt(i-2) === word.charAt(i)) {
      return true;
    }
  }
  return false;
};


var betweenRepeats = function (word) {
  for (var i = 2; i< word.length; i++) {
    if (word.charAt(i-2) === word.charAt(i)) {
      return true;
    }
  }
  return false;
};

function wordReturn(inputs) {
  var GBP = 0;
  for (var i=0; i< inputs.length; i++){
    word = inputs[i];
    if (appearsTwice(word) === true && betweenRepeats(word) ===  true) {
      GBP += 1;
            }
          }
          return GBP;
        }

var input = getInput();
var splitInput = input.split('\n');


console.log(wordReturn(splitInput));
