// WAYS TO LOG:

// alert("Hello world")
// console.log("Hello world");
// console.table({a:0,b:2});
// console.error("This is error");
// console.warn("This is a warning");
// console.time("Hello");
// console.timeEnd("Hello");

// Primitive types:

// // String
// const name = "Saurabh";
// console.log(typeof name);

// // Number
// const age = 23;
// console.log(typeof age);

// // Boolean
// const hasKids = false;
// console.log(typeof hasKids);

// // Null
// const car = null;
// console.log(typeof car);

// // Undefined
// let test;
// console.log(typeof test);

// // Symbol
// const sym = Symbol();
// console.log(typeof sym);

// // Reference types: Objects

// // Array
// const hobbies = ['Playing', 'movies']
// console.log(typeof hobbies);

// // Object literal
// const address ={city:'Bangalore', State:'Karnataka'}
// console.log(typeof address);

// // Date
// const today = new Date();
// console.log(typeof today);



// // Convert number to String

// let val;

// val = String(5+5); //Prints 10
//      // or
// val = (5).toString();
// console.log(val);


// // Anything to Number

// val = Number('5');
// val = Number(null); // 0
// val = Number("Hello") // NaN
// val = parseInt('100.30') // 100
// val = parseFloat('100.34') // 100.3
// console.log(val.toFixed(2)); // 100.34

// // Type coersion = automatic type conversion
// const val1 = '5';
// const val2 = 5;
// console.log(val1+val2);


// MATH object

// let m1 = Math.PI;
// m1 = Math.round(2.4) // 2
// m1 = Math.ceil(2.1) // 3 
// m1 = Math.floor(2.9) // 2
// m1 = Math.floor(Math.random()*20+1) // random number 1-20
// console.log(m1);


// Strings
// let str = 'That\'s quite good, i\'ll be there'; // Escaping
// str = str.toLowerCase();
// //str = str[3]; // Indexing like arrays in Java lol
// let n = str.length; // not length();
// //str = str.slice(-3) // last three
// console.log(str);
// let isPresent = str.includes("that's") // true


// Template literal

// let firstName = 'Saurabh';
// let lastName = 'Kushwaha';
// let age = 23;
// let fullName = 
// `<ul>
//     <li>First name: ${firstName}</li>
//     <li>Last name: ${lastName}</li>
//     <li>Age: ${age > 30? 'Over 30':'Under 30'}</li>
// </ul> `;
// document.body.innerHTML=fullName;
// console.log(fullName);