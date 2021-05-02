//Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
    let result = [];
    for (let el of numbers) {
        result.push(el * el)
    }
    console.log(result)
    let acc = 0;

    for (let i = 0; i < result.length; i++) {

        acc += result[i]
    }

    return acc
}

