//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    let acc = 0;
    for (let i = 0; i <= num; i++) {
        acc += i
        console.log("acc: ", acc, " i: ", i)
    }
    return acc
}

