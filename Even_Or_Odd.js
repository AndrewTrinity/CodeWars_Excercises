//Create a function (or write a script in Shell) that takes an integer as an argument 
//and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

function even_or_odd(number) {
    //ternary operator
    return number % 2 === 0 ? true : false;
}


console.log(even_or_odd(5))
console.log(even_or_odd(2))