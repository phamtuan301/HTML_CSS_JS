let numbers = [];
let loop = true;
let choice;
let sum = 0;
let odd = [];
let even = [];
let menu = ` 
MENU
1. Nhập mảng
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
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
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 === 0) {
                    even.push(numbers[i]);
                } else {
                    odd.push(numbers[i]);
                }
            }
            console.log("Các phần tử chẵn của mảng là:" + even);
            console.log("Các phần tử lẻ của mảng là: " + odd);
            break;
        case 4:
            let average = sum / numbers.length;
            console.log("Trung bình cộng của mảng là: " + average);
            break;
        case 5:
            let index = +prompt("Nhập vị trí của phần tử muốn xóa(bắt đầu từ 0):");
            numbers.splice(index, 1);
            console.log("Mảng sau khi xóa phần tử: " + "\n");
            console.log(numbers);
            break;
        case 6:
            numbers.sort((a, b) => b - a);
            console.log("Phần tử lớn thứ hai của mảng là: " + numbers[1]);
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
