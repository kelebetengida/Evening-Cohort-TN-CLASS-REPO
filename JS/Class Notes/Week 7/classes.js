////////////////////////////////////Object oriented Programing//////////////////////

//classes: They are a blueprint to group objects (properties and methods)

//This is how we create objects in the old way manualy 
// const car1 = {
//     //properties 
//         //Key:value
//         make:"Honda",
//         model:"Accord",
//         year:2013,  
//     //behavior 
//         //Key: functions 
//         sound:function(){
//             console.log("Voom")
//         }
// }

// const car2 = {
//     //properties 
//         //Key:value
//         make:"Huandia",
//         model:"sanfe",
//         year:2011,
//     //behavior 
//         //Key: functions 
//         sound:function(){
//             console.log("Voom Voom")
//         }
// }

//With classes we are trying to create a blueprint of many objects 
//general syntax 
class Car{
    //constructors are built in methods to generat properties. They are blue prints of the the object class
    constructor(make, model, year, mpg, score){
        //intializing the properties 
        this.make="VW";
        this.model="passat";
        this.year=2016;
        this.mpg=27
        this.score=0
    }
    //this is a method of the car class 
    getInfo(){
        let info=`This is ${this.year} ${this.make} ${this.model}. This is the newest verssion of our inventory with ${this.mpg}m/g. `
        console.log(info)
    }

    //getter:its a methods that accses the value of a changing property 
    get getScore(){
        return this.score
    }

    //setter: its a method to change or set data 
    set setScore(score){
        return this.score+=score
    }

}

const car1=new Car("Honda", "Accord", 2012)
const car2=new Car("Hyundai", "Santa Fe", 2011)
const car3=new Car()//default car value
const car4=new Car()//default car value
console.log( car3.getScore)//0
car3.setScore=3
console.log( car3.getScore)

////////////////////////////////////////Inheritance////////////////////////////

