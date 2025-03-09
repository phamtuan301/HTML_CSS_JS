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
}
let check = true;
for (let i = 2; i < n; i++) {
    if (numbers[i] !== numbers[i - 1] + numbers[i - 2]) {
        check = false;
        break;
    }
}
if (check) {
    alert("Là dãy fibonacci");
} else {
    alert("Không phải dãy fibonacci");
}