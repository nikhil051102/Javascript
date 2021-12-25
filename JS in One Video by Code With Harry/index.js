// //1. Ways to print in JavaScript
// console.log("Hello World"); // This message will appear in the console of your browser.
// alert("Welcome to JavaScript Tutorial"); // This message will appear in an alert dialog box.
// document.write("Hello World"); // This message will appear in the HTML document.

// //2. Javascript console API
// console.warn("This is a warning message"); // This message will appear in the console of your browser.
// console.error("This is an error message"); // This message will appear in the console of your browser.
// console.assert(1 === 2, "This is an error message"); // This message will appear in the console of your browser.

// //3. Javascript Variables - Containers to store data values.
// var number1 = 100;
// var number2 = 50;
// console.log(number1 + number2);

// //4. Data Types in Javascript
// var num1 = 200.10;   //number
// var str1 = "Hello World, This is a String";  //string
// var bool1 = true;  //boolean
// var marks = {
//     physics: 100,
//     maths: 90,
//     chemistry: 80
// }               //object
// var arr1 = [1, 2, 3, 4, 5];  //array
// var und1 = undefined;   //Both undefined and null are used to represent the absence of a value.
// var und2;               //This will also be undefined.

/*
At very High Level, there are 2 types of data types
1. Primitive Data Types - null, undefined, boolean, number, string, symbol
2. Reference Data Types - object, array, function, date, regexp, error
*/

// //5. Javascript Operators
// // Arithmetic Operators
// var num1 = 100;
// var num2 = 50;
// console.log(num1 + num2);   //Addition
// console.log(num1 - num2);   //Subtraction
// console.log(num1 * num2);   //Multiplication
// console.log(num1 / num2);   //Division

// // Assignment Operators
// var num1 = 100;
// num1 += 50;   //num1 = num1 + 50;
// num1 -= 50;   //num1 = num1 - 50;
// num1 *= 50;   //num1 = num1 * 50;
// num1 /= 50;   //num1 = num1 / 50;

// // Comparison Operators
// var num1 = 100;
// var num2 = 50;
// console.log(num1 == num2);   //Equal to
// console.log(num1 != num2);   //Not Equal to
// console.log(num1 > num2);    //Greater than
// console.log(num1 < num2);    //Less than
// console.log(num1 >= num2);   //Greater than or equal to
// console.log(num1 <= num2);   //Less than or equal to

// //  Logical Operators
// var num1 = 100;
// var num2 = 50;
// console.log(num1 > num2 && num2 > num1);   //And
// console.log(num1 > num2 || num2 > num1);   //Or
// console.log(!(num1 > num2));               //Not

// //  Bitwise Operators
// var num1 = 100;
// var num2 = 50;
// console.log(num1 & num2);   //Bitwise AND
// console.log(num1 | num2);   //Bitwise OR
// console.log(num1 ^ num2);   //Bitwise XOR
// console.log(~num1);         //Bitwise NOT
// console.log(num1 << 2);     //Bitwise Left Shift
// console.log(num1 >> 2);     //Bitwise Right Shift
// console.log(num1 >>> 2);    //Bitwise Right Shift with Zero Fill

// //6. Javascript Functions
// function add(num1, num2) {
//     return num1 + num2;
// }

// c = add(10, 20);
// console.log(c);

// //7. Conditional Statements
// var num1 = 100;
// var num2 = 50;
// if (num1 > num2) {
//     console.log("num1 is greater than num2");
// } else if (num1 < num2) {
//     console.log("num1 is less than num2");
// } else {
//     console.log("num1 is equal to num2");
// }

// //8. Loops
// //a. For Loop
// for (var i = 0; i < 10; i++)
// {
//          console.log(i);
// }

// //b. While Loop
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// //c. Do While Loop
// var i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i < 10);

// //d. ForEach Loop
// var arr1 = [1, 2, 3, 4, 5];
// arr1.forEach(function(element) {
//     console.log(element);
// }
// );

// // 9. JavaScript Tips
// let j = 0; //let function has very limited scope. It has limit to the block of code in which it is defined.   //let is used to declare a variable.
// const a = 10; //const is used to declare a constant.

// //10. Break and Continue Statements
// var arr1 = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(var i=0; i < arr1.length; i++)
// {
//     if(i==2)
//     {
//         continue;   //Continue means if this condition is true then it will skip the rest of the code and go to the next iteration.
//     }
//     else if(i==8)
//     {
//         break;    //Break means if this condition is true then it will stop the loop.
//     }
//     console.log(arr1[i]);
// }


// //11. Array Methods
// let newArray = ["Nikhil", 5, false, null, 10.65];
// console.log(newArray.length);
// newArray.pop();     //Removes the last element of the array.
// newArray.push("Last Element");  //Adds an element at the end of the array.
// newArray.shift();   //Removes the first element of the array.
// newArray.unshift("First Element");  //Adds an element at the beginning of the array.
// newArray.splice(2, 1);  //Removes the element at the specified index.
// newArray.splice(2, 0, "New Element");  //Adds an element at the specified index and remove 0 elements before adding the new element.
// newArray.slice(2, 4);  //Returns a shallow copy of a portion of an array into a new array object.
// newArray.join(" ");  //Joins all elements of an array into a string.
// newArray.indexOf("Nikhil");  //Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// newArray.lastIndexOf("Nikhil");  //Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// newArray.reverse();  //Reverses the order of the elements in the array.
// newArray.sort();  //Sorts the elements of an array.

// // 12. String Methods
// let str = "Nikhil";
// console.log(str.length);
// console.log(str.charAt(0));  //Returns the character at the specified index.
// console.log(str.charCodeAt(0));  //Returns the Unicode of the character at the specified index.
// console.log(str.concat(" "));  //Returns a new string by concatenating the two strings.
// console.log(str.endsWith("l"));  //Returns true if the string ends with the specified string, otherwise false.
// console.log(str.includes("h"));  //Returns true if the string contains the specified string, otherwise false.
// console.log(str.indexOf("h"));  //Returns the index of the first occurrence of a specified value in a string.
// console.log(str.lastIndexOf("h"));  //Returns the index of the last occurrence of a specified value in a string.
// console.log(str.match("h"));  //Returns a new array with a regex match
// console.log(str.repeat(2));  //Returns a new string with a specified number of copies of an existing string.
// console.log(str.replace("h", "H"));  //Returns a new string with some or all matches of a pattern replaced by a replacement.
// console.log(str.search("h"));  //Returns the index of the first match of a specified value in a string.
// console.log(str.slice(2, 4));  //Returns the characters in a string beginning at the specified location through the specified number of characters.
// console.log(str.split("h"));  //Returns an array of strings by separating the string into substrings.
// console.log(str.startsWith("N"));  //Returns true if the string begins with the specified string, otherwise false.
// console.log(str.substr(2, 4));  //Returns the characters in a string beginning at the specified location through the specified number of characters.
// console.log(str.substring(2, 4));  //Returns the characters in a string between two indexes into the string.
// console.log(str.toLowerCase());  //Returns the calling string value converted to lower case.
// console.log(str.toUpperCase());  //Returns the calling string value converted to upper case.
// console.log(str.trim());  //Returns a new string with leading and trailing white space removed.




// // 13. Dates and Times Methods
// let d = new Date();
// console.log(d);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
