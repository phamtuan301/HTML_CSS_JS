// // Function declaration

// // input
// // process
// //out put
// function calculate(number1, number2) {
//     //logic
//     //let number1 = 10;
//     //let number2 = 20;
//     return number1 + number2;
// }
// //Function execution
// //Thục thi hàm
// //đối số thực tế
// let sum = calculate(10, 20);  // output 30
// calculate(1, 2);   // output 3
// calculate(-2, 3);   // output 1
// console.log(sum);


// //Hàm không tên
// // IIFE - Imediately Invoking Function Expression
// let result = (function (a, b) {
//     return a * b;
// })(10, 20);
// console.log(result);


// // Function expression
// let calculateResult = function (a, b) {
//     return a / b;
// }
let result = calculateSum(10, 20);
console.log(result);
// calculateResult(10, 20);
function calculateSum (a, b) {
    return a + b;
}


//Arrow Function
let sum = (a, b) => {
    return a + b;
}
let sum2 = (a, b) => a + b;
console.log(sum);
