// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName="John"
let lastName="Doe"
let country="United States"
let city="Houston"
let age=24
let isMarried=true
//let year=2024
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
//console.log(typeof year)
// Check if type of '10' is equal to 10
console.log('10' == 10)//false
// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.3') == 10)
// Boolean value is either true or false.
true
// Write three JavaScript statement which provide truthy value. 
console.log(4==4)
console.log(4>3)
console.log(4>=4)

// Write three JavaScript statement which provide falsy value.
console.log(0 > 100)
console.log("true" == "false")
console.log(99 <= 88)
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3)//false
console.log( 4 == 4) //true
console.log( 4 === 4) //true
console.log(4 != 4)//false
console.log(4 !== 4)//false
console.log(4 != '4')//false
console.log(4 == '4')//true
console.log(4 === '4')//false
// Find the length of python and jargon and make a falsy comparison statement.
let word1 = "python";
let word2 = "jargon";
console.log(word1.length, word2.length)
console.log(word1 === word2)
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12)//false
console.log( 4 > 3 || 10 < 12)//true
console.log( 4 > 3 || 10 > 12) //true
/////////////true      false   
console.log( !(4 > 3))//false

console.log(!(4 < 3))//true
console.log( !(false))//true
console.log( !(4 > 3 && 10 < 12))//false
///////////not (true  &&  true)
//////////not   true=>false
console.log(!(4 > 3 && 10 > 12)) //true
/////////not (true  &&  false)
//////////not   false=>true

console.log( !(4 === '4'))//true   4==="4"=>true  number ===string=>false
///////////not  false=>true 
// There is no 'on' in both dragon and python
let word3="dragon";
let word4="python";
console.log(word3.includes("on"));
console.log(word4.includes("on"));
// Use the Date object to do the following activities
//date() in JS 
// What is the year today?
const date=new Date()

const year= date.getFullYear()
console.log(year)

// What is the month day as a number?
const month=date.getMonth()
console.log(month)
// What is the date today?
const day=date.getDate()
console.log(day)

// What is the day today as a number?
const dayNum=date.getDay();
console.log(dayNum)

// What is the hours now?
const hour= date.getHours()
console.log(hour)
// What is the minutes now?
const minute= date.getMinutes()
console.log(minute)
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

const time=Math.floor(date.getTime()/1000)
console.log("secounds elapsed since January 1, 1970", time)

