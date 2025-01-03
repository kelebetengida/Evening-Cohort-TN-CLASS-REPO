// Declare an empty array;
let array1 = []

// Declare an array with more than 5 number of elements
let array2 = ["one", "two", "three", "four", "five"]

// Find the length of your array
console.log(array2.length)

// Get the first item, the middle item and the last item of the array
console.log(array[0, 2, 4])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [true, 1, "string", undefined, null, false, "word"]
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook" , "Google" , "Microsoft" , "Apple", "IBM" , "Oracle" , "Amazon"]

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0, 3, 6])

// Print out each company
console.log(itCompanies)

// Change each company name to uppercase one by one and print them out
console.log(itCompanies.toUpperCase())

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies} are big IT companies`)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = "Amazon"
if (itCompanies.includes(company)){
    console.log(company)
}else {
    console.log(`${company} not found`)
}

// Filter out companies which have more than one 'o' without the filter method


// Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies.sort())

// Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 2))

// Slice out the last 3 companies from the array


// Slice out the middle IT company or companies from the array


// Remove the first IT company from the array


// Remove the middle IT company or companies from the array


// Remove the last IT company from the array


// Remove all IT companies