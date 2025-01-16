
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
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
  }
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  for (let i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i]);
  }
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//   Iterate 0 to 10 using for loop, do the same using while and do while loop
  
//   Iterate 10 to 0 using for loop, do the same using while and do while loop
  
//   Iterate 0 to n using for loop
  
//   Write a loop that makes the following pattern using console.log():
  
//       #
//       ##
//       ###
//       ####
//       #####
//       ######
//       #######
for (let i = 1; i <= 5; i++) {
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
  
//   Develop a small script which generate a six characters random id:
    //   5j2khz


//Develop a small script which generate any number of characters random id:
    //     fe3jo1gl124g
    //     xkqci4utda1lmbelpkm03rba


//   Write a script which generates a random hexadecimal number.
  //   '#ee33df'


//   Write a script which generates a random rgb color number.
//   rgb(240,180,80)


//   Using the above countries array, create the following new array.
    //   ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]


//   Using the above countries array, create an array for countries length'.
        //   [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]


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
//   In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
  


//   ['Finland','Ireland', 'Iceland']
//   In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
  


//   ['Albania', 'Bolivia','Ethiopia']
//   Using the above countries array, find the country containing the biggest number of characters.
//   Ethiopia




//   Using the above countries array, find the country containing only 5 characters.
//   ['Japan', 'Kenya']


//   Find the longest word in the webTechs array
  
//   Use the webTechs array to create the following array of arrays:
  
//   [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
//   An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
  
//   Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
  
//   This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
  
//   Print all the elements of array as shown below.
  
//     const fullStack = [
//       ['HTML', 'CSS', 'JS', 'React'],
//       ['Node', 'Express', 'MongoDB']
//     ]
//     HTML
//     CSS
//     JS
//     REACT
//     NODE
//     EXPRESS
//     MONGODB