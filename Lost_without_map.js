// Given an array of integers, return a new array with each value doubled.

function maps(arr) {
    let mappedArray = [];
    for (let el of arr) {
        mappedArray.push(el * 2)
    }
    return mappedArray
}

function maps(x) {
    return x.map(n => n * 2);
}