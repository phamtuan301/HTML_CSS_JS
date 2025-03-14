let numbers = [];
let sum = 0;
let n = +prompt("Mời bạn nhập số phần tử của mảng");
if (n === 0) {
    alert("Mảng không có phần tử nào");
} else if (n < 0 || isNaN(n)) {
    alert("Số phần tử không hợp lệ")
} else {
    for (let i = 0; i < n; i++) {
        let input = +prompt("Nhập phần tử cho mảng");
        numbers.push(input);
        sum += input;
    }
}
function findnumber (arr){
    let m = arr.length + 1;
    let truesum = (arr[arr.length-1] + arr[0]) * (m/2);
    return truesum - sum;
}
console.log(findnumber(numbers));