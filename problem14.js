// Write a function that takes a sentence and returns the number of words.

// Example:

// countWords("I love JavaScript")
// Output: 3

 function countWords(sentence){
    let word = sentence.split(" ")
    return word.length
 }

//  console.log(countWords("I love Javascript"))







// Write a function that takes a number and returns the number reversed.

// Example:

// reverseNumber(1234)
//  Output: 4321

function reverseNumber(number){
    let result =0
    while(number>0){
        let digit = number%10
        result = result*10+digit
        number = Math.floor(number/10)
    }
 return result
}

// console.log(reverseNumber(1234))








// Write a function that takes an array of numbers and returns the second largest number.

// Example:

// secondLargest([10, 5, 20, 8, 15])
//  Output: 15



function secoungLargest(number){
    let large=number[0]
    let secoundLarge= number[0]

    for(let i=1; i<number.length;i++){
        if(number[i]> large){
            secoundLarge =large
            large =number[i]
        }
        else if(number[i]>secoundLarge && number[i] !== large){
            secoundLarge =number[i]
        }
    }
    return secoundLarge
}

console.log(secoungLargest([10, 5, 20, 22,8, 15]))