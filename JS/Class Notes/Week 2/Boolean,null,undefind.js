///////////////////////////////////Boolean/////////////////////////////////////
//Boolean data is data that is truthy or falsy values

//What are some truthy values?
    //true
    //All string data except empty strings
    //All positive and negetive numbers except 0

//What are some falsy values?
    //false
    //empty string " ", "",''
    //0
    //null
    //undefined
    //NaN=> Not a number 


let isLightOn=true
let isHungury=false 
let trueValue=4>3  //true
let falseValue=2<1 //false

//true && true => true 
//true && false => false  

//true || true => true 
//true || false => true 

///////////////////////////////////////undefined ////////////////////////////
let isasleep

console.log(isasleep)

////////////////////////////////////////Null/////////////////////////////////
let isAwake=null
console.log(isAwake)

//////////////////////////////////Operators/////////////////////////////////
//Assignment oprator (Anything with one equal sign that is assigning to a data)
let today="Monday"
// Arethmetic Operator	Description
    // +	Addition
    // -	Subtraction
    // *	Multiplication
    // **	Exponentiation (ES2016)
    // /	Division
    // %	Modulus (Division Remainder)
    // ++	Increment
    // --	Decrement


let numOne=4
let numTwo=4
// let sum=numOne+numTwo
// let difference=numOne-numTwo
// let product=numOne*numTwo
// let quotien=numTwo/numOne
// let remainder=numTwo%numOne
// let powerOf=numOne**numTwo


// console.log(sum)//9
// console.log(difference)//-1
// console.log(product)//20
// console.log(quotien)//0.8
// console.log(remainder)//4
// console.log(powerOf)//1024
// let numThree=++numOne// numOne+1=>5


// let numFour=--numTwo//numTwo-1=>4

// console.log(numThree)// numOne+1=>5
// console.log(numFour)//numTwo-1=>4



// comparition Operator	Description (to compare and get boolean values)
    // ==	equal to
    // ===	equal value and equal data type
    // !=	not equal
    // !==	not equal value or not equal type
    // >	greater than
    // <	less than 
    // >=	greater than or equal to
    // <=	less than or equal to
    // ?	ternary operator
    // &&   and opreator This is to compare and insue both values are ture 
    // ||   or opreator This is to compare and insure just one value os true 

console.log(numOne==numTwo)//false
console.log(4===4)//true 4===4 =>true  number===number =>true true+true=>true
console.log(4==="4")//false 4===4 =>true  number===string =>false true+false=>false
console.log(4!=4)//false
console.log(4!==4)//false  number=numer=>true  4!=4=>false  =>true+false=>false
console.log(4>4)//false
console.log(4<4)//false
console.log(4>=4)//true 
console.log(3<=4)//true 



console.log(4>4||4==4)


//true&&true=true
//true&&false=false
//false&&false=false 
//true||true=true
//true||false=true
//false||false=false
