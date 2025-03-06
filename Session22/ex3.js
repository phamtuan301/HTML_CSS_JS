let input = prompt("Nhập dãy số cách nhau bằng dấu phẩy:");
let numbers = input.split(",").map(num => parseFloat(num.trim()));
if (numbers.some(isNaN)) {
    console.log("Dãy không hợp lệ");
} else {
    let reversedNumbers = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reversedNumbers.push(numbers[i]);
    }
    console.log( reversedNumbers.join(" "));
}
