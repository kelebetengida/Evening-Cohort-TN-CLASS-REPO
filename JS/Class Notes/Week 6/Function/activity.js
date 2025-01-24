// Declare a function fullName and it print out your full name.
function fullName2(fullName) {
    console.log("Decarus Brown")
}
fullName2()
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    console.log(`${firstName}` + "" + `${lastName}`)
}
fullName(Kaitlin, Jenkins)
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(sum1, sum2) {
    return sum1 + sum2
}
console.log(addNumbers(3, 8))
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    console.log(length * width)
}
areaOfRectangle(9, 6)

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    console.log((length + width) * 2)
}

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volume(length, width, height) {
    console.log(length * width * height)
}
volume(4, 6, 8)//192

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
    console.log(Math.PI * radius * radius)
}
areaOfCircle(7)
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumferenceOfCircle(radius) {
    console.log(2 * Math.PI * radius)
}
circumferenceOfCircle(3)
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityCalc(mass, volume) {
    if (volume === 0) {
        console.log("Can't be 0");
    } else {
        console.log("density is", mass / volume)
    }

}
densityCalc(4, 5)

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedOfObject(distance, time) {
    if (time === 0) {
        console.log("time can't be zero")
    } else {
        console.log("speed is ", distance / time)
    }
}

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightCalculate(mass, weight) {
    if (mass <= 0 || gravity <= 0) {
        gravity = gravity || 9.8;
        const weight = mass * gravity;
        console.log("Weight calculated is " `${weight}`)
    }
}
weightCalculator(9, 10)

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius}` + " converted to fahrenheit is " + `${fahrenheit}`)
}
convertCelsiusToFahrenheit(29)

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function bmiCalculation(weight, height) {
    const bmi = weight / (height * height);
    console.log(`${BMI} is ${bmi.toFixed(2)}`);
    if (bmi < 18.5) {
        console.log("You are underweight.")
    } else if (bmi >= 18.5 && bmi < 24.9) {
        console.log("Your weight is normal.")
    } else if (bmi >= 24.9 && bmi < 29.9) {
        console.log("You are overweight.")
    } else {
        console.log("You are obese.")
    }
}
bmiCalculation(60, 1.7)//weight in kg & height in meters.

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    if (["December", "January", "February".includes(month)]) {
        console.log("Winter");
    } else if (["March", "April", "May"].includes(month)) {
        console.log("Spring")
    } else if (["June", "July", "August"].includes(month)) {
        console.log("Summer")
    } else {
        console.log("Fall")
    }
}
checkSeason("May")

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
function findMax(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a)
    } else if (b >= a && a >= c) {
        console.log(b)
    } else {
        console.log(c)
    }
}
findMax(6, 3, 9)

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(ax, by, c, d) {
    const y = (-a * x - c) / b;
    console.log("x = " + `${x}` + " y = " `${y}`)
}
solveLinEquation(3, 5, 8, 7)

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}


// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
    array.forEach(item => console.log(item));
}
printArray([1, 2, 3, 4, 5]);
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
function showDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}
showDateTime();
// Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues(x, y) {
    [x, y] = [y, , x];
    console.log()
}

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
function reverseArray(array) {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(array) {
    return array.map(item => item.toString().toUpperCase());
}
console.log(capitalizeArray(["a", "b", "c"]));
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(array, item) {
    array.push(item);
    return array;
}
console.log(addItem([1, 2, 3,], 4));
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(array, index) {
    array.splice(index, 1);
    return array;
}
console.log(removeItem([1, 2, 3,], 1));
// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(5));
// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) sum += i;
    }
    return sum;
}
console.log(sumOfOdds(5));
// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) sum += i;
    }
    return sum;
}
console.log(sumOfEven(5));



// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
function evensAndOdds(n) {
    let evens = 0, odds = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) sum += i;
    }
    return sum;
}
console.log(`The number of odds are ${odds}.`)
console.log(`The number of evens are ${evens}.`)
// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
// Write a function which generates a randomUserIp.
function randomUserIp() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}
console.log(randomUserIp());
// Write a function which generates a randomMacAddress
function randomMacAddress() {
    const hexDigits = "0123456789ABCDEF";
    return array(6)
        .fill()
        .map(() => `${hexDigits[Math.floor(Math.random() * 16)]} ${hexDigits[Math.floor(Math.random() * 16)]}`)
        .join(":");
}
console.log(randomMacAddress())
// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'
function randomHexaNumberGenerator() {
    const hexDigits = "0123456789ABCDEF";
    return `#${array(6)
        .fill()
        .map(() => hexDigits[Math.floor(Math.random() * 16)])
        .join("")}`;
}
console.log(randomHexaNumberGenerator());
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE
function userIdGenerator() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array(7)
        .fill()
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("");
}
console.log(userIdGenerator());