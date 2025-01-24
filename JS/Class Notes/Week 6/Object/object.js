////////////////////////////////////////Object////////////////////////////////////////////////
//They are non primitive data type 
//general syntax of object \
const nameOfObject = {
    //properties 
        //Key:value
    //behavior 
        //Key: functions 
}

const personOne = {
    firstName: "Kaitlin",
    lastName: "Jenkins",
    livesWhere: "TN",
    age: 32,
    gender:"female",
    hasKids: true,
    skills: ["HTML", "Javascript", "CSS"],

    greeting: function(name) {
        console.log(`Hello ${name}! Welcome to the JS class`)
    }
}

const personTwo = {
    firstName: "Decarus",
    lastName:"Brown",
    skills: ["HTML, CSS, Javascript"]
     
}

//accsesing object data with dot notation
console.log(personOne.age)
console.log(personOne.greeting("kelebet"))
console.log(personTwo.lastName)


//accsesing data with bracket notation

console.log(personOne["age"])
console.log(personOne["greeting('kelebet')"])//undfined
console.log(personTwo["lastName"])
