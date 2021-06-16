// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
    let strArr = [];
    let lookUp = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true,
    }
    for (let i = 0; i < str.length; i++) {
        if (!lookUp[str[i]]) strArr.push(str[i])
    }
    return strArr.join("");
}
disemvowel("This website is for losers LOL!")