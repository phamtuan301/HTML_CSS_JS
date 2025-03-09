let numbers = [];
let count = 0;
let n = +prompt("Nhập số phần tử của mảng");
if (n === 0) {
    alert("Mảng không có phần tử nào");
} else if (n < 0) {
    alert("Số phần tử không hợp lệ")
} else {
    for (let i = 0; i < n; i++) {
        let input = +prompt("Nhập phần tử cho mảng(số)");
        numbers.push(input);
        if(input<0){
            count++;
        }
    }
    alert("Mảng có" + count + "số âm");
}