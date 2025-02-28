let number=parseFloat(prompt("Mời bạn nhập số bất kì không âm: "));
let number1 = Math.sqrt(number);
let result = Number.isInteger(number1) ? number + "là số chính phương" : number + "không phải số chính phương";
alert(result);