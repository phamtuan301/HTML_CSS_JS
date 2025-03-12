let numbers = [];
let n = +prompt("Mời bạn nhập số phần tử của mảng");
if (n === 0) {
    alert("Mảng không có phần tử nào");
} else if (n < 0 || isNaN(n)) {
    alert("Số phần tử không hợp lệ")
} else {
    for (let i = 0; i < n; i++) {
        let input = +prompt("Nhập phần tử cho mảng");
        numbers.push(input);
    }
    for (let i = 0; i < n; i++) {
        if (numbers[i] % 1 !== 0 || isNaN(numbers[i])) {
            console.log("Dữ liệu không hợp lệ");
        }
    }
}
let squarenumber = numbers.map(num => num ** 2);
let evennumber = squarenumber.filter(num => num % 2 === 0);
console.log(evennumber);