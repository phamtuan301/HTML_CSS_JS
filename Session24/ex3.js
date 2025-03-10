let numbers = [];
let loop = true;
let choice;
let sum = 0;
let count = 0;
let menu = `
MENU
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
Lựa chọn của bạn: `
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
                    if (input > 0) {
                        sum += input;
                        count++;
                    }
                }
            }
            break;
        case 2:
            for (let i in numbers) {
                console.log(`${i}. ${numbers[i]}`);
            }
            break;
        case 3:
            console.log("Phần tử lớn nhất trong mảng là" + Math.max(...numbers));
            console.log("Vị trí" + numbers.indexOf(Math.max(...numbers)));
            break;
        case 4:
            console.log("Tổng các số dương trong mảng là: " + sum);
            let average = sum / count;
            console.log("Trung bình cộng các số dương trong mảng là: " + average);
            break;
        case 5:
            for (let i = numbers.length - 1; i >= 0; i--) {
                console.log(numbers[i]);
            }
            break;
        case 6:
            let check = true;
            for (let i = 0; i < numbers.length / 2; i++) {
                if (numbers[i] !== numbers[numbers.length - 1 - i]) {
                    check = false;
                    break;
                }
            }
            if (check) {
                console.log("Mảng đối xứng");
            } else {
                console.log("Mảng không đối xứng");
            }
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