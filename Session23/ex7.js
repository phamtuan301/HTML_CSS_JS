let numbers = [];
let n = +prompt("Mời bạn nhập số phần tử của mảng");
if (n === 0) {
    alert("Mảng không có phần tử nào");
} else if (n < 0 || isNaN(n)) {
    alert("Số phần tử không hợp lệ")
} else {
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhập phần tử cho mảng");
        numbers.push(input);
    }
}
numbers.sort((a, b) => b - a);
alert(numbers[1]);