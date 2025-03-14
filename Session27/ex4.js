let loop = true;
let check = true;
let sum = 0;
let numbers = [];
let evennumber = [];
let oddnumber = [];
let menu = `
MENU
1. Nhập danh sách số nguyên
2. Tính trung bình các số
3. Tìm số chẵn lớn nhất
4. Tìm số lẻ nhỏ nhất
5. Thoát
Lựa chọn của bạn:`
while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1:
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
                            sum += input;
                        }
                    } while (check)
                }
            }
            break;
        case 2:
            let average = sum / numbers.length;
            alert("Trung bình các số trong dãy số là" + ' ' + average);
            break;
        case 3:
            evennumber = numbers.filter(num => num % 2 === 0);
            let max = Math.max(...evennumber);
            alert("Số chẵn lớn nhất trong danh sách là:" + ' ' + max);
            break;
        case 4:
            oddnumber = numbers.filter(num => num % 2 !== 0);
            let min = Math.min(...oddnumber);
            alert("Số lẻ nhỏ nhất trong danh sách là" + " " + min);
            break;
        case 5:
            loop = false;
            alert("Cảm ơn bạn đã dùng chương trình")
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại");
            break;
    }
}