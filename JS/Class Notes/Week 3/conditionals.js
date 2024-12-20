///////////////////////////////////Conditional Statments///////////////////////
//Statments with a different condition used to make a decision. 
//two ways of excuting conditional statments 
    //conditional excution: based on a block of code the code will be excuted it the condition is true.
    //Repetetive Excution: one or more blocks of code are excuted repetetivly until the right condition is met. 

//general syntax of if statment
// if(condition){
//     return //truthy value  
// }

let numOne=0
if(numOne>=0){
    console.log(numOne)
}

let isRaining = false
if(isRaining){
    console.log("Bring your raincoat")
}


//general syntax of if else statment
if(isRaining){
    console.log("Bring your raincoat")
}else{
    console.log("its a sunny day, Go in shorts. ") 
}



//general syntax of if else if else statment

// if(condition){
//     //return truthy value
// }else if(condition){
//     //return a truthy value 
// }else{
//     //falsy value 
// }


let a=90

if(a>0){
    console.log(`${a} its a positive number`)
}else if(a<0){
    console.log(`${a} its a negative number`)
}else{
    console.log("a must be 0")
}


//general syntax of switch statement

let num =false
switch(true){
    case num>0:
        console.log(`${num} is a positive number.`)
        break;
    case num ==0:
        console.log(`${num} is zero.`)
        break;
    case num <0:
        console.log(`${num} is a negative number.`)
        break;
    default:
        console.log("What you inputed isnt a number")
}

