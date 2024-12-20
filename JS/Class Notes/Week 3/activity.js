// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/////// Enter your age: 30
/////// You are old enough to drive.
/////// Enter your age:15
/////// You are left with 3 years to drive.
let myAge = 12
if (myAge >= 18) {
    console.log("You are old enough to drive")
} else if (myAge < 18) {
    console.log(`You are left with ${18 - myAge} years to drive.`)
}



// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/////// Enter your age: 30
/////// You are 5 years older than me.

let myAge2 = 30
let yourAge = 35
if (myAge2 < yourAge) {
    console.log(`You are ${yourAge - myAge2} years older than me`)
} else {
    console.log(`I am ${myAge2 - yourAge} years older than you`)
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
let a = 4
let b = 3
//   4 is greater than 3
// if (a > b){
//     console.log("a is greater than b")
// }else{console.log("a is less than b")
// }
//ternanry 
let condition = a > b

condition ? "a is greater than b" : "a is less than b"


// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/////// Enter a number: 2
/////// 2 is an even number
/////// Enter a number: 9
/////// 9 is is an odd number.
let number = 3
if (number % 2 === 0) {
    console.log(`${number} is a even number`)
} else {
    console.log(`${number} is a odd number`)
}



// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = 100
switch(true){
    case score >= 90 && score <= 100:
        console.log(`${score} is a A`)
        break
    case score >= 80 && score < 90:
        console.log(`${score} is a B`)
        break  
    case score >= 70 && score < 80:
        console.log(`${score} is a C`)  
        break
    case score >= 60 && score < 70:
        console.log(`${score} is a D`)  
        break  
    default:
        console.log(`${score} is a F`)
}
/*if (score >= 90) {
    console.log(`${score} is a A`)
} else if (score >= 80 && score < 90) {
    console.log(`${score} is a B`)
} else if (score >= 70 && score < 80) {
    console.log(`${score} is a C`)
} else if (score >= 60 && score < 70) {
    console.log(`${score} is a D`)
} else { console.log(`${score} is a F`) }
*/

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = "apil"
switch (month.toLowerCase()){
    case "september":
    case "october":
    case "november":
        console.log("The season is autumn.");
        break;
    case "december":
    case "january":
    case "february":
        console.log("The season is winter.")
        break;
    case "march":
    case "april":
    case "may":
        console.log("The season is spring.")
        break;
    case "june":
    case "july":
    case "august":
        console.log("The season is summer.")
        break;
    default:
        console.log("Invalid month")
        break;    
}




// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.
//     What is the day today? saturDaY
//     Saturday is a weekend.
//     What is the day today? Friday
//     Friday is a working day.
//     What is the day today? FrIDAy
//     Friday is a working day.
let today = "FrIDAy"
let day = today.toLocaleLowerCase()

let weekend = ["saturday", "sunday"]
let weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"]

/*if (weekend.includes(day)) {
    console.log(`${today} is a weekend.`)
} else if (weekday.includes(day)) { 
    console.log(`${today} is a working day.`) 
}*/

 switch (day){
    case day == weekend:
        console.log(`${day} is a weekend`)
        break
    case today == weekday:
        console.log(`${day} is a weekday`)    
 }


// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
let month2="FEbruary"
let month3= month2.toLowerCase()
/*if (month3=="january"){
    console.log(`${month2} has 31 days!`)
}else if (month3=="february"){
    console.log(`${month3} has 28 days.`)
}else{
    console.log("Invalid month")
}*/

switch (true){
    case month3 == "january":
    console.log(`${month3} has 31 days.`)
    break
    case month3 == "february":
        console.log(`${month3} has 28 days`)
        default: console.log("Invalid month")
    }
