// Declare a variable named challenge and assign it to an initial value 'Welcome to'.
var challenge="Welcome to Javascript"
///////////////0123456789

// Print the string on the browser console using console.log()
console.log(challenge)

// Print the length of the string on the browser console using console.log()
console.log(challenge.length)
// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 7))
// Slice out the phrase to JavaScript from Welcome to JavaScript.
console.log(challenge.slice(8, 21))
// Check if the string contains a word Script using includes() method
console.log(challenge.includes("script")) //true
// Split the string into an array using split() method
console.log(challenge.split())
// Split the string Welcome to Javascript at the space using split() method
console.log(challenge.split(" "))
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let str1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(str1.split(","))

// Change Welcome to JavaScript to Welcome to Python using replace() method.
const result = challenge.replace("Javascript", "Python")
console.log(result)
// What is character at index 15 in 'Welcome to JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// What is the character code of J in 'Welcome to JavaScript' string using charCodeAt()
const charCode = challenge.charCodeAt(11)

console.log(charCode)

// Use indexOf to determine the position of the first occurrence of a in Welcome to JavaScript
console.log(challenge.indexOf("a"))

// Use lastIndexOf to determine the position of the last occurrence of a in Welcome to JavaScript.
console.log(challenge.lastIndexOf("a"))

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"))

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf("because"))

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search("because"))

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' Welcome to JavaScript'.
console.log(challenge.trim())

// Use startsWith() method with the string Welcome to JavaScript and make the result true
console.log(challenge.startsWith("Welcome"));



// Use endsWith() method with the string Welcome to JavaScript and make the result true
console.log(challenge.endsWith("JavaScript"));


// Use concat() and merge 'Welcome to' and 'JavaScript' to a single string, 'Welcome to JavaScript'
const firstPart = "Welcome to";
const secondPart = "JavaScript";
const mergedString = firstPart.concat(" ", secondPart);
console.log(mergedString)


// Use repeat() method to print Welcome to JavaScript 2 times
const repeatedString = challenge.repeat(2)
console.log(repeatedString)