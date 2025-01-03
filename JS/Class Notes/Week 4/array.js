//////////////////////////////////////////////Review///////////////////////////////////////
///Primitive data types 
    //numbers
        //casting-consverting data types to another data type
            //string=> numbers 
            //string=>float (decimal numbers)
            //float=>numbers 
    //booleans
    //strings
    //null
    //symbol
    //undefined 

        //conditionals 
            //if statment
            //if eles statments                                  
            //if elese if eles statment 
            //switch statment 

//non-premitive data types
    //Arrays =>collection of primitive data types
    //Objects 
    //Functions 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////Arrays//////////////////////////////////////////////////\

//variable is a contatiner to store one single data. 
let firstName="kelebet"

//Arrays in contrast to a variable they store multiple data. 

//gerneral syntax of an array
 let arry=[]

 //array with values
 let numbers=[1,23,34,56,78]
 console.log(numbers)
 console.log(numbers.length)
 let string=["kelebet", "Engida", "Orange"]
 console.log(string)
 console.log(string.length)

 //arrays with diverse values 
 //When accesing a data we use an index, An index is a position value within the array. 
 const array=["kelebet", 78, true, {make:"Honda", model:"Accord", year:2020}, null, undefined]
 //number/////////1///////2////3////////////////////4///////////////////////////5///////6/////
 //index//////////0///////1////2////////////////////3///////////////////////////4///////5//////
 console.log(array)

 //how to accses items in an array
console.log(array[3])
console.log(array[5])
console.log(array[array.length-1])
 
//modify an array 
array[2] = false
console.log(array)

/////////////////////////////////////////
//////////  ////  ////  ////  ////  ////
////////////////////////////////////////
//index   0     1     2     3     4 
 

//array of arrays 

let array2=[ true, null, undefined, ["orange", "mango"], [["html", "css"], ["node", "mangodb", "Express"]]]
//index///////0/////1////////2/////////////////3/////////////////////////////////4/////////////////////////
//index of secound array /////////////////0/////////1///////////0/////////////////////1/////////////////////
//index of third array   ////////////////////////////////////0////////1////////0//////////1/////////2////////
console.log(array2[6])
array2[6] = ["apple" , "kiwi", "orange"]
console.log(array2[4][1])
console.log(array2[4][1][2])


//Array2 
//////////////////////////
// true, null undefined //
// ///////////////////  //
// /"orange", "mango"/  //
// ///////////////////  //
//                      //
//                      //
//////////////////////////



/////////////////////////////////////////////////Array methods/////////////////////////////////////
//sort method-its sorts items in an array in an accending order 

const skillsArr=["html", "css","node", "mangodb", "express"]
const num=[23,68,3,67,69, 50,98,20,1]
console.log(skillsArr.sort())
console.log(num.sort())


