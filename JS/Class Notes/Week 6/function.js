//////////////////////////////////////////Function////////////////////////////////////////////////
//A function is a reusable block of code designed to perform a specific task. 
//a function is decalared we use a function key word, the name of the function and a perenthesis.And the tsak will go in a curly bracket. 
//what are some benefits
//reusable 
//we can customize the code but it also makes it easy to test the code 
//clean and easy to read 

//Few different kind of functions
//declarative function 

    function functionName() {
        // task code goes here 
    }
    functionName()//calling the function 
    //function with out a perametere 
    //     function square(){
    //         let num=2
    //         console.log(num*num)
    //     }

    // //function with a perameter
    //     function square(num) {
    //         console.log(num*num)
    //     }

    //     square(2)//4
    //     square(3)//9
    //     square(4)//16
    //     square(5)//25

    function sum(a, b) {
        console.log(a + b)
    }
    sum(3, 5)
    sum(7, 8)

    // function nameGreeting(firstName) {
    //     console.log("Hello! " + `${firstName} ` + " Welcome to Javascript!")
    // }

    // nameGreeting("Kaitlin")
    //function with many perameters 

    // function functionName(parm1, pram2, pram3,...){
    //     // task code goes here 
    // }
    // functionName(parm1, pram2, pram3,...)//calling the function 

    function adding() {
        let num = 0
        for (let i = 0; i <= arguments.length; i++) {
            num += arguments[i]
        }
        return num
    }
    console.log(adding(1, 3, 5, 4, 6, 7)) //26

//Expression function 
    const square = function (n) {
        console.log(n * n)
    }
    square(6)

//Anonymus function (self ivoking functions)
    let squaredNum = (function (n) {
        console.log(n * n)
    })(10)
//Arrow function 
    // const functionName = () => {

    // }
    // functionName()//calling the function 

    const square2 = (number) => {
        console.log(number * number)
    }
    square2(6)

    //function with a defualt pram
    //jane Doe is the data put in by default if someone forgets to add a parm 
    function nameGreeting(firstName="Jane Doe") {
        console.log("Hello! " + `${firstName} ` + " Welcome to Javascript!")
    }
    nameGreeting()

