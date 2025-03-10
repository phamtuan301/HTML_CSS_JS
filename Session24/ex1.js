let numbers = [];
let loop = true;
let choice;
let sum = 0;
let count = 0;
let menu = `
MENU
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tím số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
Lựa chọn của bạn là: `
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
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
            break;
        case 2:
            for (let i in numbers) {
                console.log(`${i}. ${numbers[i]}`);
            }
            break;
        case 3:
            console.log("Phần tử lớn nhất là: " + Math.max(...numbers));
            console.log("Phần tử nhỏ nhất là: " + Math.min(...numbers));
            break;
        case 4:
            console.log("Tổng các phần tử trong mảng là: " + sum);
            break;
        case 5:
            let search = +prompt("Nhập phần tử muốn tìm kiếm");
            for (let i = 0; i < numbers.length; i++) {
                if (search === numbers[i]) {
                    count++;
                }
            }
            console.log("Phần tử" + " " + search + " " + "xuất hiện" + " " + count + " " + "lần");
            break;
        case 6:
            numbers.sort((a, b) => a - b);
            console.log("Mảng sắp xếp từ bé đến lớn:" + " \n" + numbers);
            break;
        case 7:
            console.log("Kết thúc chương trình. Cảm ơn !!!!!");
            loop = false;
            break;
        default:
            alert("Lựa chọn của bạn không hợp lệ! Vui lòng chọn lại!");
            break;
    }
}