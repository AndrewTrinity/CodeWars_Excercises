// lookup table 
// charcodeat superior a m = 109

let str = "abc"
console.log(str.charCodeAt(0))
console.log(str.charCodeAt(1))
console.log(str.charCodeAt(2))



// ANDRES
function printerError(s) {
    let counter = 0
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 109) {
            counter++
        }
    }
    return `${counter}/${s.length}`
}



console.log("a" === 97)


// EDU S1

function printerError(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] > 109) count++
    }
    return `${count}/${s.length}`
}


//EDU S2
function printerError(s) {
    let count = 0;
    const letters = "abcdefghijklm"
    const lookUp = {}
    for (let letter of letters) {
        lookUp[letter] = letter;
    }
    console.log(lookUp)
    for (let el of s) {
        if (!lookUp[el]) count++
    }
    return `${count}/${s.length}`
}


let pri = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
printerError(pri)