//Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
    let result = [];
    for (let el of numbers) {
        result.push(el * el)
    }
    console.log(result)
    let acc = 0;
    console.log("despues del acc")
    for (let i = 0; i < resultconcat; i++) {
        console.log("working")
        acc += result[i]
    }
    console.log("dspues del for loop")
    return acc
}

