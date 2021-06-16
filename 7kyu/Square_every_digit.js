// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  //may the code be with you
  let str = num.toString();
  let split = str.split("");
  let result = [];
  for (let el of split) {
    result.push(el * el);
  }
  return parseInt(result.join(""));
}