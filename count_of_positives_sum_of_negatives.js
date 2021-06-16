//Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.

// function countPositivesSumNegatives(input) {
//     let pos=input.filter()
//     for(let el of input){
//         if(el > 0){

//         }
//     }
// }
function countPositivesSumNegatives(input) {
    const positives = input.filter(e => e > 0).length;
    const negatives = input.filter(e => e < 0).reduce((a, c) => a + c);
    return [positives, negatives]
}