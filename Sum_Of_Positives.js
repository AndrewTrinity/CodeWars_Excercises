//You get an array of numbers, return the sum of all of the positives ones.

// const positiveSum = (arr) => {
//     let acc = 0
//     for (let el of arr) {
//         if (el > 0) {
//             acc += el
//         }
//     } return acc
// }

const positiveSum = (arr) => {
    return arr.filter(e => e > 0).reduce((acc, curr) => acc + curr);
}


console.log(positiveSum([-1, 2, 3, 4, -5]));
