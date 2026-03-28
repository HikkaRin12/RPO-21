// let a = 5;
// let b = "5"; // b is a string, not a number
// console.log(typeof(b));

// let bTonumber = Number(b);// Convert b to a number
// console.log(bTonumber, typeof(bTonumber)); // Now bTonumber is a number, and we can perform arithmetic operations with it

// let total = a * b; // JavaScript will convert b to a number automatically when performing the multiplication
// console.log(total);

// console.log(Number("45px")); //NaN потому что 45px не может быть полностью преобразовано в число

// console .log(parseInt(3.99)); // Output: 3
// console .log(parseInt("45px")); // Output: 45
// console.log(parseInt(0.99)); // бдует 0
//console.log(parseInt("px45")) //NaN

// console.log(parseFloat("12"));
// console.log(parseFloat("12.34"));
// console.log(parseFloat("12.34px"));
// console.log(parseFloat("px12.34")); // NaN, because the string does not start with a number

//Унарный плюс

// console.log(typeof(+45));

// const age = prompt("Enter your age");
// const ageToNumber = +age;
// console.log(age, typeof(age));
// console.log(age, typeof(ageToNumber));

// Mat.round классическое округление
// Math.ceil округление в вверх
// Math.floor округление в низ

// console.log(Math.random()); /// рандомное число от 0 до 1

// console.log(Math.round(Math.random() *10 )); // random 1 to 10

// Math.floor(Math.random() * (max - min + 1)) + min; // формула для конкретно заданного диапозона чисал 

// console.log(Math.floor(Math.random() * (100 - 70 + 1)) +70 );

// индекс [] всегда начинается с 0 
// .lenhgt всегда показывает от 1 

// let text = "IT Step Academy";
// // console.log(text.length);
// // console.log(text[text.length - 1]);

// let = char5