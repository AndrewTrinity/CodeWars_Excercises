//Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  let avg = array.reduce((acc, curr) => acc + curr);
  return array.length ? avg / array.length : 0
}