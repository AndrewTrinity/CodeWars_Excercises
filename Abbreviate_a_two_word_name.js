//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

// function abbrevName(name) {
//     let arr = [];
//     for (let i = 0; i < name.length; i++) {
//         if (name[i] !== name[i].toLowerCase()) {
//             arr.push(name[i])
//         }
//     }
//     return arr.join(".")
// }


function abbrevName(name) {

    let result = name.toUpperCase().split(" ");
    console.log(result)
    return `${result[0][0]}.${result[1][0]}`

}
abbrevName("Joel Miller")