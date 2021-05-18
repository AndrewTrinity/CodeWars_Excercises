//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    let mappedArray = [];
    for (let el of array) {
        mappedArray.push(el * -1)
    }
    return mappedArray;
}

function invert(array) {
    return array.map(e => e * -1);
}