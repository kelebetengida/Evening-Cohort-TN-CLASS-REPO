
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//   Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let j = 0;
while (j <= 10) {
    console.log(i);
    j++;
}

let k = 0;
do {
    console.log(k);
    k++;
} while (k <= 10);

//   Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let y = 10;
while (y >= 0) {
    console.log(y);
    y--;
}

let d = 10;
do {
    console.log(d);
    d--;
} while (d >= 0);
//   Iterate 0 to n using for loop
  n =10
  for (let i = 0; i <= n; i++){
    console.log(i);
  }
//   Write a loop that makes the following pattern using console.log():
  
//       #
//       ##
//       ###
//       ####
//       #####
//       ######
//       #######
for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
}

//   Use loop to print the following pattern:
  
//   0 x 0 = 0
//   1 x 1 = 1
//   2 x 2 = 4
//   3 x 3 = 9
//   4 x 4 = 16
//   5 x 5 = 25
//   6 x 6 = 36
//   7 x 7 = 49
//   8 x 8 = 64
//   9 x 9 = 81
//   10 x 10 = 100

for (let i = 0; i<= 10; i++) {
    let result = i * i;
    console.log(`${i} * ${i} = ${result}`);
}

//   Using loop print the following pattern
  
//    i    i^2   i^3
//    0    0     0
//    1    1     1
//    2    4     8
//    3    9     27
//    4    16    64
//    5    25    125
//    6    36    216
//    7    49    343
//    8    64    512
//    9    81    729
//    10   100   1000
for (let i = 0; i <= 10; i++) {
    
}

//   Use for loop to iterate from 0 to 100 and print only even numbers
  for (let i = 0; i<= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
  }
//   Use for loop to iterate from 0 to 100 and print only odd numbers
  for (let i = 0; i<= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
  }
//   Use for loop to iterate from 0 to 100 and print only prime numbers
  for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
  }
//   Use for loop to iterate from 0 to 100 and print the sum of all numbers.
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }console.log(sum);
//   The sum of all numbers from 0 to 100 is 5050.
//   Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i ;
    }
  } console.log("Even Numbers" + sumEven);
  console.log("odd Numbers" + sumOdd);
//   The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
//   Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
    //     [2550, 2500]
    let even = 0;
    let odd = 0;
    
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            even += i;
        } else {
            odd += i;
        }
    }
//   Develop a small script which generate array of 5 random numbers
  function generateRandomArray() {
    let randomArray = [];
    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        randomArray.push(randomNumber);
    }
    return randomArray;
  }
  let result = generateRandomArray();
  console.log(result);
//   Develop a small script which generate array of 5 random numbers and the numbers must be unique
  const randomNumbers = [];
  while (randomNumbers.length < 5){
    const randomNumber = Math.floor(Math.random() * 100) * 1;
    if (randomNumbers.includes(randomNumber)){
      randomNumbers.push(randomNumber);
    }
  }
  console.log(randomNumbers);
//   Develop a small script which generate a six characters random id:
    //   5j2khz
let randomId = Math.random().toString(36).substring(2, 8);
console.log(randomId);

//Develop a small script which generate any number of characters random id:
    //     fe3jo1gl124g
    //     xkqci4utda1lmbelpkm03rba

function generateRandomId(numChars){
//a list or a string of characters 
  const characters = "abcdefghijlkmnopqrstuvwxyz0123456789"
  //the randomly generated characters 
  let randomId = "";
    //loop that goues through the characters for how evere long the numChars is 
  for (let i = 0; i < numChars; i++) {
    //adding a randomly slected character from characters variable 
   randomId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomId;
}
  console.log(generateRandomId(10));
  console.log(generateRandomId(20));


//   Write a script which generates a random hexadecimal number.
  //   '#ee33df'
  function randomHexColor() {
    let hex = '#';
    const charactersThree = '0123456789abcdef';
  for (let i = 0; i < 6; i++) {
    let randomIndex3 = Math.floor(Math.random() * charactersThree.length) {
      hex += charactersThree[randomIndex3];
    }
    return hex;
  }}
  let random4 = randomHexColor();
  console.log(random4)

//   Write a script which generates a random rgb color number.
//   rgb(240,180,80)
function generateRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  return `rgb(${r},${g},${b})`;
}

let randomRGBColor = generateRandomRGB();
console.log(randomRGBColor);


//   Using the above countries array, create the following new array.
    //   ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    const countries1 = [
      "Albania", "Bolivia", "Canada", "Denmark", 
      "Ethiopia", "Finland", "Germany", "Hungary", 
      "Ireland", "Japan", "Kenya"
  ];
  
  const countries2 = countries1.map(country => country.toUpperCase());
  
  console.log(countries2);

//   Using the above countries array, create an array for countries length'.
        //   [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
        const countriesLengths = countries1.map(country => country.length);
      
        console.log(countriesLengths);
        

//   Use the countries array to create the following array of arrays:
  
//     [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]
const countries3 = [
  "Albania", "Bolivia", "Canada", "Denmark", 
  "Ethiopia", "Finland", "Germany", "Hungary", 
  "Ireland", "Iceland", "Japan", "Kenya"
];

//   In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const countriesLand = countries3.map(country => {
  return [country, country.slice(0, 3).toUpperCase(), country.length];
});

console.log(countriesLand);


//   ['Finland','Ireland', 'Iceland']
//   In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const countries4 = ['Finland', 'Ireland', 'Iceland'];

const countriesEndingWithIA = countries4.filter(country => country.endsWith('ia'));

if (countriesEndingWithIA.length > 0) {
    console.log(countriesEndingWithIA);
} else {
    console.log('Countries that end without ia');
}



//   ['Albania', 'Bolivia','Ethiopia']
//   Using the above countries array, find the country containing the biggest number of characters.
//   Ethiopia

const countries5 = ['Albania', 'Bolivia', 'Ethiopia'];

const countryWithMostCharacters = countries5.reduce((longest, current) => 
    current.length > longest.length ? current : longest
);

console.log(countryWithMostCharacters);


//   Using the above countries array, find the country containing only 5 characters.
//   ['Japan', 'Kenya']
const countries6 = ['Albania', 'Bolivia', 'Ethiopia', 'Japan', 'Kenya'];

const countriesWith5Characters = countries6.filter(country => country.length === 5);

console.log(countriesWith5Characters);

//   Find the longest word in the webTechs array
  let longestTech = webTechs[0];
  for (let i = 1; i < webTechs.length; i++){
    if (webTechs[i].length > longestTech.length){
      longestTech = webTechs[i];
    }
  }
  console.log(${longestTech})
//   Use the webTechs array to create the following array of arrays:
const webTechs2 = webTechs.map(tech => [tech, tech.length]);

console.log(webTechs2);

//   [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
//   An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

const acronym = mernStack.map(tech => tech[0]).join('');

console.log(acronym);
//   Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
  const array = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
//   This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
  let fruits = ["banana", "orange", "mango", "lemon"]
  for (let i = 0; i < Math.floor(fruits.length / 2); i++ ) {
    let reverseFruits = fruits[i];
    fruits[i] = fruits[fruits.length - 1 - i];
    fruits[fruits.length - 1 - i] - reverseFruits;
  }
  console.log(fruits)
//   Print all the elements of array as shown below.
//     ]
//     HTML
//     CSS
//     JS
//     REACT
//     NODE
//     EXPRESS
//     MONGODB
const fullStack =
  ['HTML', 'CSS', 'JS', 'React'],
 ['Node', 'Express', 'MongoDB']
 
for (const item of fullStack.flat()) {
  console.log(item.toUpperCase())
}