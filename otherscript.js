// // // // let myString = "i am a developer";

// // // // myString = myString.split(" ");

// // // // for (let i = 0; i < myString.length; i++) {
// // // //   myString[i] = myString[i][0].toUpperCase() + myString[i].substring(1);
// // // // }
// // // // console.log(myString.toString().replaceAll(",", " "));

// // // // let x = Math.round(Math.random() * 101);
// // // // let y = Math.round(Math.random() * 51);

// // // // let sum = x + y;
// // // // let difference = x - y;
// // // // let quotient = x / y;
// // // // let remainder = x % y;
// // // // let product = x * y;

// // // // console.log(sum);
// // // // console.log(difference);
// // // // console.log(quotient);
// // // // console.log(remainder);
// // // // console.log(product);

// // // // let x;

// // // // x = [1, 2, 3];

// // // // x = Array.isArray(x);

// // // // console.log(x);

// // // // let obj1 = { a: 1, b: 2 };
// // // // let obj2 = { c: 3, d: 4 };

// // // // let obj3 = Object.assign(obj1, obj2);
// // // // console.log(obj3);

// // // // function add(...numbers) {
// // // //   let total = 0;

// // // //   for (let num of numbers) {
// // // //     total += num;
// // // //   }

// // // //   return total;
// // // // }

// // // // console.log(add(8, 3, 3, 3, 3));

// // // // function subtract(num1 = 12, num2 = 3) {
// // // //   return num1 - num2;
// // // // }

// // // // console.log(subtract());

// // // // function array(...arr) {
// // // //   const randomIndex = Math.round(Math.random() * arr.length);

// // // //   return arr[randomIndex];
// // // // }

// // // // console.log(array(1, 2, 3, 4, 5, 6, 7));

// // // // const user = "Tom";
// // // // console.log(user);
// // // // // (function (age) {
// // // // //   const user = "Tom";
// // // // //   console.log(user + " is " + age + " years old");
// // // // // })(12);

// // // // // function getCelsius(F) {
// // // // //   return Math.round(((F - 32) * 5) / 9);
// // // // // }

// // // // // console.log(`The temperature is ${getCelsius(34)} \xB0C`);

// // // // // const array = [1, 2, 3, 4, 5, 6];

// // // // // console.log({ min: Math.min(...array), max: Math.max(...array) });

// // // // // ((length, breadth) => {
// // // // //   console.log(`The length is ${length} and the breadth is ${breadth}`);
// // // // // })(12, 14);

// // // // function doMaths(num1, num2, sign) {
// // // //   if (sign === "+") {
// // // //     return num1 + num2;
// // // //   } else if (sign === "*") {
// // // //     return num1 * num2;
// // // //   } else if (sign === "-") {
// // // //     return num1 - num2;
// // // //   } else {
// // // //     return "No further Calculations";
// // // //   }
// // // // }
// // // // // console.log(doMaths(9, 4, "*"));
// // // // // console.log(doMaths(1, 2, "+"));
// // // // // console.log(doMaths(4, 2, "-"));
// // // // // console.log(doMaths(4, 2, "%"));

// // // // // for (let i = 1; i < 11; i++) {
// // // // //   console.log(i);

// // // // //   for (let j = 1; j < i; j++) {
// // // // //     console.log(j + " * " + i + " = " + j * i);
// // // // //   }
// // // // // }

// // // // const numbers = [1, 2, 3, 4, 5, 6];

// // // // for (let i = 1; i < numbers.length + 1; i++) {
// // // //   if (numbers[i] === 6) {
// // // //     console.log(numbers[i] + " is the best");
// // // //   } else {
// // // //     console.log(numbers[i]);
// // // //   }
// // // // }
// // // // for (i = 1; i <= 100; i++) {
// // // //   if (i % 3 === 0) {
// // // //     console.log("Fizz");
// // // //   }
// // // //   if (i % 5 === 0) {
// // // //     console.log("Buzz");
// // // //   }

// // // //   if (i % 3 === 0 && i % 5 === 0) {
// // // //     console.log("FizzBuzz");
// // // //   }
// // // //   console.log(i);
// // // // }

// // // const socialObj = [
// // //     { num1: "hello" },
// // //     { num2: "world" },
// // //     { num3: "coding" },
// // //     { num4: "eating" },
// // //     { num5: "resting" },
// // //   ];

// // //   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // //   let arr = [];
// // //   nums.forEach(function (num) {
// // //     if (num % 2 === 0) {
// // //       arr.push(num);
// // //     }
// // //   });
// // //   console.log(arr);
// // //   // const getSocialObj = (socialObj) => {
// // //   //   console.log(socialObj);
// // //   // };

// // //   // getSocialObj(soc);
// // //   // socialObj.forEach((social) => console.log(social));
// // //   // for (obj of socialObj) {
// // //   //   console.log(obj);
// // //   // }

// // //   // for (const key of socialObj) {
// // //   //   console.log(key);
// // //   // }

// // //   // socialObj.forEach((obj) => console.log(obj));
// // const companies = [
// //   { name: "Companny 1", category: "Finance", start: 1970, end: 2004 },
// //   { name: "Companny 2", category: "Retail", start: 1981, end: 2004 },
// //   { name: "Companny 3", category: "Wholesale", start: 1945, end: 2004 },
// //   { name: "Companny 4", category: "Auto", start: 1936, end: 2004 },
// //   { name: "Companny 5", category: "Technology", start: 1981, end: 2004 },
// //   { name: "Companny 6", category: "Retail", start: 1959, end: 2004 },
// //   { name: "Companny 7", category: "Technology", start: 1981, end: 2004 },
// //   { name: "Companny 8", category: "Auto", start: 1981, end: 2004 },
// // ];

// // const retailCompanies = [];

// // const result = companies.filter((company) => {
// //   if (company.start >= 1980 && company.end <= 2005) {
// //     retailCompanies.push(company);
// //   }
// // });
// // console.log(retailCompanies);
// const shoppingCart = [
//   { id: 1, name: "Product 1", price: 123 },
//   { id: 2, name: "Product 2", price: 250 },
//   { id: 3, name: "Product 3", price: 156 },
//   { id: 4, name: "Product 4", price: 90 },
// ];

// const totalPrice = shoppingCart.reduce((prev, curr) => {
//   return prev + curr.price;
// }, 0);

// console.log(totalPrice);

// const numbers = [1, 2, 3, 4, 5, -3, -5, -6, -8];

// const sum = numbers
//   .filter((number) => number > 0)
//   .reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);

// console.log(sum);

// const companies = [
//   { name: "Companny 1", category: "Finance", start: 1970, end: 2004 },
//   { name: "Companny 2", category: "Retail", start: 1981, end: 2004 },
//   { name: "Companny 3", category: "Wholesale", start: 1945, end: 2004 },
//   { name: "Companny 4", category: "Auto", start: 1936, end: 2004 },
//   { name: "Companny 5", category: "Technology", start: 1981, end: 2004 },
//   { name: "Companny 6", category: "Retail", start: 1959, end: 2004 },
//   { name: "Companny 7", category: "Technology", start: 1981, end: 2004 },
//   { name: "Companny 8", category: "Auto", start: 1981, end: 2004 },
// ];

// let youngerGenCompanies = [];

// const filteredCompanies = companies
//   .filter((company) => company.start > 1980)
//   .map((company) => ({
//     name: company.name,
//     category: company.category,
//     start: company.start,
//     end: company.end,
//   }));

// console.log(filteredCompanies);

// const words = ["hello", "happy", "coding"];

// const capitalized = words.map((word) => word[0].toUpperCase() + word.slice(1));

// console.log(capitalized);
