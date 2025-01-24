////////////////////////////////////////////////Scope//////////////////////////////////////

//when declaring a variable we use the keywords let, const and var 
//This keywords are designed let the computer the kind of variable your declaring. 

    //Global Scope 

    //Window global object
   

    //a and b are declared outside the function 
    let a="javascript"
    let b=10
    function letsLearnScope() {
        console.log(a,b)
        if(true){
            let a="python"
            let b=100
            console.log(a,b)
        }
    }

    letsLearnScope()
    console.log(a,b)


    //local scope 