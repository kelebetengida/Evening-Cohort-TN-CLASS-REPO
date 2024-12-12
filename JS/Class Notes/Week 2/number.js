////////////////////////////////Number Data type//////////////////////////////
//////////////////////////Primitive Data type////////////////////////////////


let age=35
const gravity=9.81 //gravity staying constant 
//const PI=3.14 //geometricaly significant number 
const boilingPointOfWater=100 //water boiling point

let PI=Math.PI
console.log(PI)//3.141592653589793

//Round numbers using the Math object and a round method
console.log(Math.round(PI))//3
//min and max methods 
console.log(Math.max(12,3,4,5,34,78,4,98,1,65))//98
console.log(Math.min(12,3,4,5,34,78,4,98,1,65))//1

//math.random create random numbers between 0-1
// let randomNum=Math.random()
// console.log(randomNum)

//create random number between 0-10
let randomNum=Math.round(Math.random()*10)
console.log(randomNum)


// ///////////////////////////Changing Data Type (Casting)/////////////////////////////////////
// Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.


//string==>number we use parseInt()
let num="10" //this 10 is a string data type
console.log(typeof parseInt(num))//10 number data type
console.log(typeof num)


let myAge="95"
console.log(myAge)
console.log(typeof myAge)
console.log( parseInt(myAge))
console.log(typeof parseInt(myAge))


//string==>float(decimal number) we use parseFloat()
let num2="9.81"
console.log(typeof num2)
console.log(typeof parseFloat(num2))


//float==> numbers(integers) we use parseInt()

let num1=9.81
console.log(Math.round(num1))
console.log( parseInt(num1))
