let number = +prompt("Nhập vào 1 số nguyên");
let str = number.toString().split("");
let result = parseInt(str.sort((a,b)=>b-a).join(""));
console.log(result);