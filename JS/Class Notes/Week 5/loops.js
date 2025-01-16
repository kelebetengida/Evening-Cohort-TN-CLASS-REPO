///////////////////////////////////Loops/////////////////////////////////////
//ie: printing 0-100
//for loop
// for(intialization;condition;increment/Decrement){
//     //task or code gose 
// }

for (let numberLine = 0; numberLine <= 100; numberLine++) {
    console.log(numberLine)
}

//ie: print nubers 5-0
for (let i = 5; i >= 0; i--) {
    console.log(i)
}


//ie: print the number 0-10 but multiply the number by it self.
// 0*0=0
//1*1=1
//2*2=4
for (let j = 0; j <= 10; j++) {
    console.log(j * j);
}

// const countries=["United States", "Norway", "Germany", "Italy"]
// let newCountryArr=[]
// for (let i = 0; i <= countries.length; i++){
//     let eachCountry=countries[i].toUpperCase()
//     newCountryArr.push(eachCountry)
// } 
// console.log(newCountryArr)


//const numbers = [1, 2, 3, 4, 5, 6, 7]
// let newarr = []//[2,4,6,8,10,12,14]
// for (let i = 0; i <= numbers.length; i++) {
//     let newarr2 = numbers[i] * 2
//     newarr.push(newarr2)
// }
// console.log(newarr)

//while loop

    //intialization
    //while(condition){
        //task 
        //increment/decrement
    //}

// let i = 0
// while (i <= 5) {
//     console.log(i)
//     i++
// }

//do while loop

//intialization
//do{
    //task
    //increment/decrement
//}while(condition)


// let i=0

// do{
//     console.log(i)
//     i++
// }while(i<=5)


// for of loop
const numbers = [1, 2, 3, 4, 5, 6, 7]

for(const num of numbers){
 console.log(num*2)
}

const countries=["United States", "Norway", "Germany", "Italy"]
let newArr=[]
for (const country of countries){
    console.log(country);
    newArr.push(country.toUpperCase());
}
console.log(newArr);