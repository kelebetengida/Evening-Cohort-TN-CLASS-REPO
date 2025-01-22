// Declare a function fullName and it print out your full name.
function fullName2(fullName){
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

function volume(length, width, height){
    console.log(length*width*height)
}
volume(4,6,8)//192

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
    console.log("density is", mass/volume)
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


// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.


// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    // The same groups apply to both men and women.
    // Underweight: BMI is less than 18.5
    // Normal weight: BMI is 18.5 to 24.9
    // Overweight: BMI is 25 to 29.9
    // Obese: BMI is 30 or more


// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.


// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
    // console.log(findMax(0, 10, 5))
    // 10
    // console.log(findMax(0, -10, -2))
    // 0


// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
    // console.log(solveQuadratic()) // {0}
    // console.log(solveQuadratic(1, 4, 4)) // {-2}
    // console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    // console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    // console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    // console.log(solveQuadratic(1, -1, 0)) //{1, 0}


// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.


// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
    // showDateTime()
    // 08/01/2020 04:08


// Declare a function name swapValues. This function swaps value of x to y.
    // swapValues(3, 4) // x => 4, y=>3
    // swapValues(4, 5) // x = 5, y = 4


// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
    // console.log(reverseArray([1, 2, 3, 4, 5]))
    // //[5, 4, 3, 2, 1]
    // console.log(reverseArray(['A', 'B', 'C']))
    // //['C', 'B', 'A']


// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.


// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item


// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item


// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.


// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.


// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.


// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
    // evensAndOdds(100);
    // The number of odds are 50.
    // The number of evens are 51.


// Write a function which takes any number of arguments and return the sum of the arguments
    // sum(1, 2, 3) // -> 6
    // sum(1, 2, 3, 4) // -> 10


// Write a function which generates a randomUserIp.


// Write a function which generates a randomMacAddress


// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
    // console.log(randomHexaNumberGenerator());
    // '#ee33df'


// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
    // console.log(userIdGenerator());
    // 41XTDbE