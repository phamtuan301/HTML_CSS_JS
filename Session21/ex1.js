let sum = 0;
for (let i = 0; i < 5; i++) {
    let number = +prompt("Nhập số nguyên bất kì");
    if (number % 2 !== 0) {
        sum += number;
    }
}
alert("Tổng các số lẻ là: " + sum);