///////////////////////////////STring Data Type/////////////////////////////////
//its a primitive data type 

//three different ways of creating a string 
let firstName="kelebet";// double quotes
let lastName='Engida'// single quotes
let role= `instructor`//backtick

//concatenation- linking or chaining strings and variables together to form a meaningful data
let introduction="My name is " +firstName+ " "+ lastName +"." + "My role is "+ role+"."
console.log(introduction)


/////////////////////////Escape characters///////////////////////////// 
//     \n: new line
//     \t: Tab, means 8 spaces
//     \\: Back slash
//     \': Single quote (')
//     \": Double quote (")

let paragraph="\tThroughout the course, you will embark on a journey to understand the core principles and methodologies behind data analytics.\n By delving into statistical techniques, you will learn how to effectively analyze and interpret data, enabling you to draw meaningful insights and make informed business decisions.\n You will also explore financial forecasting techniques to predict future trends and gain a \"competitive edge\" in \'financial analysis.\'"

console.log(paragraph)


////////////////////string methods//////////////////////////////////////////////////////
// methods  -its a function  or a property of an object, that allow you to perform a specific task


//////counting and accsessing string characters 

let name="JavaScript"
//index///0123456789////Counting positions in a string 
//////////12345678910///Counting number of characters 
console.log(name.length) //fastest way to count a number of characters is using .length method
let firstChar=name[0]//if your accsesing the characters in a string use the box bracket and the position number
let sixthChar=name[6]
console.log(firstChar)// J
console.log(sixthChar)// r
 //examples of a few string methods 
console.log(name.toUpperCase()) //JAVASCRIPT
console.log(name.toLowerCase()) //javascript
console.log(name.substr(4,9)) //Script

