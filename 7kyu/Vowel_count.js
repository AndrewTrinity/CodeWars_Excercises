// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//detectar las vocales del string, que las cuente y que las pase al contador

function getCount(str) {
    let count = 0;
    let lookUpTable = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    }
    for (let i = 0; i < str.length; i++) {
        if (lookUpTable[str[i]]) count++
    }
    return count
}

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsCount++
        }
    }

    return vowelsCount;
}