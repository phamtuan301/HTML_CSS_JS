function check(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 1 === 0 && numbers[i] > 0) {
            count++;
        }
    }
    if (count === 0) {
        return "mảng không có số nguyên dương";
    } else {
        return count;
    }
}
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
console.log(check(numbers));