///////////////////////////////////Loops/////////////////////////////////////
//ie: printing 0-100
//for loop
// for(intialization;condition;increment/Decrement){
//     //task or code gose 
// }

for (let numberLine = 0; numberLine <= 100; numberLine++ ){
    console.log(numberLine)
}

//ie: print nubers 5-0
for (let i = 5; i >= 0; i--){
    console.log(i)
}


//ie: print the number 0-10 but multiply the number by it self.
// 0*0=0
//1*1=1
//2*2=4
for (let j = 0; j <= 10; j++) {
    console.log(j * j);
}

const countries=["United States", "Norway", "Germany", "Italy"]
let newCountryArr=[]
for (let i = 0; i <= countries.length; i++){
    let eachCountry=countries[i].toUpperCase()
    newCountryArr.push(eachCountry)
} 
console.log(newCountryArr)

