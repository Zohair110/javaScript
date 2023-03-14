// 2- Task: Create an Array Manipulation Program

// Breakdown:

// · Declare an array of strings, e.g. ["apple", "banana", "cherry", "date", "elderberry"]

// · Use array methods to perform the following manipulations:

// o Append a string to the end of the array

// o Prepend a string to the beginning of the array

// o Remove a string from a specific index in the array and replace it with another string

// · Display the array before and after each manipulation to the user as output.
export{}
let fruits:string[] = ["apple", "banana", "cherry", "date", "elderberry"]

fruits.push("watermelon");
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);


fruits.splice(2, 1, "grape");
console.log(fruits);
