//Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// function points(games) {
//     // your code here
//     let points = [];
//     for (let el of games) {
//         if (x > y) {
//             points.push(3)
//         } else if (x < y) {
//             points.push(0)
//         } else if (x = y) {
//             points.push(1)
//         }
//         return points.reduce((acc, curr) => acc + curr);
//     }
// }

function points(games) {
    let result = []
    for (let el of games) {
        if (el[0] > el[2]) {
            result.push(3)
            console.log("victory")
        } else if (el[0] === el[2]) {
            result.push(1)
            console.log("deuces")
        }


    }
    console.log(result)
    return result.reduce((a, b) => a + b)
}