"use strict";
// 2- Task: Create an Array Manipulation Program
exports.__esModule = true;
var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.push("watermelon");
console.log(fruits);
fruits.unshift("mango");
console.log(fruits);
fruits.splice(2, 1, "grape");
console.log(fruits);
