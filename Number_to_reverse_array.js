//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let reverseNum = Array.from(n.toString().split("").reverse())
    return reverseNum
}
console.log(digitize(258))