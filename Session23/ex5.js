let arr = [];
let sum = 0;
let count = 0;
let n = +prompt("Mời bạn nhập số phần tử của mảng");
if (n === 0) {
    alert("Mảng không có phần tử nào");
} else if (n < 0 || isNaN(n)) {
    alert("Số phần tử không hợp lệ")
} else {
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhập phần tử cho mảng");
        let number = Number(input);
        if (!isNaN(number)) {
            arr.push(number)
            sum += number;
            count++
        }else{
            arr.push(input);
        }
    }
}
if (count === 0) {
    alert("Mảng không chứa kí tự số")
}else {
    alert(sum);
}