/////////////////////////////////Destructuring/////////////////////////////////
//Taking a part or unpacking is objects and arrays to assign a variable




//destructuring objects 
let person={
    firstName:"kelebet",
    lastName:"Engida",
    age:34,
    haveKids:undefined, 
}
//before destructuring the person object i will accsess "kelebet" using dot notation 
console.log(person.firstName)
const {firstName:f, lastName, age, haveKids=6} = person //desturcturing of person array
//after destructuring i will accses "kelebet" using only the key firstName 
console.log(f)//kelebet because I am renaming the key firstName to f
console.log(haveKids)//6 because even tho in the orignal object its value is undefined in the destructuring I have reasigned the value 6



let skills=["HTML","CSS","JS"]
//destructured version of of the skills array 
let [a,b,c]=skills
console.log(b)
console.log(c)


const names = ['Asabeneh', 'Brook', 'David', 'John']
let [nameOne, nameTwo, nameThree, nameFour] = names
console.log(nameTwo)
console.log(nameFour)


const skill=[[undefined,"HTML", "CSS", "JS", ["React", "Vue", "Angular"]], ["Node", "Express", "MangoDB", "SQL"]]
//Bigger Array/////////////////////////0////////////////////////////////////////////1//////////////////////
//secound Array/0///////1/////2/////////////////3////////////////////0//////1////////////2///////3/////
//Third Array/////////////////////////0////////1////////2/////////////////////////////////////////////
console.log(skill[0][3][2]) //This is accsesing data inside a complex array with out destructuring
let [[word1="typescript", set1, word2, word3, [set2, word4, word5,]],[set3, word6, word7, word8]] = skill//destructuring the array
//we are accsesing the destructured array with the variables 
console.log(set1)//HTML
console.log(word3)//JS
console.log(set2)//React
console.log(set3)//Node
console.log(word5) //Angular
console.log(word1)//typescript Default value of undfined 


//you can destructure only the data you need 
const numbers=[1,2,3,4,5,6,7]
let [A,B,C, ...rest]=numbers
console.log(A,B,C)//1,2,3
console.log(rest)//4,5,6,7

//Destructuring during itteration(looping through)
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, capitalCity] of countries) {
    console.log(country, capitalCity)//
}

//example of destructuring during itteration 
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for (const [skill1, skill2, skill3, skill4] of fullStack) {
    console.log(skill3, skill4)
}



