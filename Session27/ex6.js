let numbers = [];
let n = +prompt("Mời bạn nhập số phần tử của danh sách số nguyên");
if (n === 0) {
    alert("Mảng không có phần tử nào");
} else if (n < 0 || isNaN(n)) {
    alert("Số phần tử không hợp lệ")
} else {
    for (let i = 0; i < n; i++) {
        do {
            let input = +prompt("Nhập phần tử cho mảng");
            if (isNaN(input) || (input % 1 !== 0) || input === " ") {
                alert("Dữ liệu bạn nhập không hợp lệ");
            } else {
                check = false;
                numbers.push(input);
            }
        } while (check)
    }
}
function checknumbers(arr) {
    let dif = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i-1] !== dif) {
            return false;
        }
    }
    return true;
}
if(checknumbers(numbers)){
    alert("TRUE")
}else{
    alert("FALSE")
}
