// Write a function that takes a string and returns it in reverse order.

// Example:

// reverseString("hello")
// Output: "olleh"
 
function reverseString(text){
    let result =""
    for(let i= text.length-1;i>=0;i--){
        result+=text[i]
    }
    return result
}

// console.log(reverseString("hello"))
 


 






// Write a function that takes a number and returns "Even" if the number is even, otherwise returns "Odd".

// Example:

// checkEvenOdd(7)
// Output: "Odd"

function checkEvenOdd(number){
    if(number%2===0){
        return "Even"
    }
    else{
        return "Odd"
    }
}

// console.log(checkEvenOdd(2))





// Write a function that takes a number:

// If divisible by both 3 and 5 → return "FizzBuzz"
// If divisible by 3 → return "Fizz"
// If divisible by 5 → return "Buzz"
// Otherwise → return the number

// Example:

// fizzBuzz(15)
//  Output: "FizzBuzz"

function fizzBuzz(number){
    if(number%3===0 && number%5===0){
        return "FizzBuzz"
    }
    else if(number%3===0){
        return "Fizz"
    }
    else if(number%5===0){
        return "Buzz"
    }
    else{ return number}
}

console.log(fizzBuzz(11))