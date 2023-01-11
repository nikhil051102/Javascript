//Array Methods

//1. toString Methods : Converts an array to a string of comma separated values.
let num = [1, 2, 3, 34, 4]
let b = num.toString()  //b is now a string
console.log(b, typeof(b));

//2. join Method : joins all the array elements using a separator
let c = num.join(" - ")
console.log(c, typeof(c));

//3. pop Method : Deletes the last elements of array
num.pop();
console.log(num);

//and so on......refer notes for more methods.