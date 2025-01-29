//Higher order function is a function thattakes another function as a parm

//call back function: A function that gets called into another functions wich is why its called a call back function
function callback(n){
 return n**2
}

//Cube is the Higher order function because it takes callback as an argument 
function cube(callback,n ){
    return callback(n)*n
}
console.log(cube(callback, 7))//callback(7)=>49*7=>343

/////NOTE: Please take a look at the HigherOrderFunction pdf in class slides folder for the higher Order functions and their details. And please complete the HigherOrderFunction.js homework in the assignments folder in week 4 folder. 