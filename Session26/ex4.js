let arr = [];
let n = +prompt("Mời bạn nhập số phần tử của mảng");
if (n === 0) {
    alert("Mảng không có phần tử nào");
} else if (n < 0 || isNaN(n)) {
    alert("Số phần tử không hợp lệ")
} else {
    for (let i = 0; i < n; i++) {
        let input = +prompt("Nhập phần tử cho mảng");
        arr.push(input);
    }
    for (let i = 0; i < n; i++) {
        if (isNaN(arr[i])) {
            console.log("Dữ liệu không hợp lệ")
        }
    }
}
function isprime(number) {
    let count = 0;
    if (number < 2) {
        return false;
    } else {
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }
    }
    if (count === 0) {
        return true;
    } else {
        return false;
    }
}
let result = [];
result = arr.filter(num => isprime(num));
console.log(result)