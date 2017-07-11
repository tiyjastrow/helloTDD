const assert = require("assert");

function checkResult(num, word) {
  // check if num is the length of the word
  var result = "--init--";
  var nclose = "Close Enough!";
  var nperfect = "Right on";
  var noff = "Way off!";
  var nvalid = "Invalid input!";
  var nanswer = nperfect;
  var closeMin = 2;
  var closeMax = 4;
  if (num === word.length) {
    result = nperfect;
  } else if (num > word.length - closeMin && num < word.length + closeMax) {
    result = nclose;
  } else result = noff;
  if (result === nperfect) {
      return result;
  }
  if (word.length > 50) {
      result = "String is too large!";
  }
  if (num < 0) {
      result = "Cannot guess a negative number!";
  }
  return result;
}

// console.log( checkResult(7,"abcdefg") );
// console.log( checkResult(7,"letters") );
// console.log( checkResult(7,"tryme") );
// console.log( checkResult(7,"A") );
// console.log( checkResult(-7,"A") );
// console.log( checkResult(7,"A very big string this is. A very big string this is. A very big string this is. A very big string this is. A very big string this is. A very big string this is. A very big string this is. ") );

assert( checkResult(2, "ab") === "Right on" );