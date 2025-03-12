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
console.log("max ="+ " " +Math.max(...arr) + "\n" +"position:" + " " + arr.indexOf(Math.max(...arr)));