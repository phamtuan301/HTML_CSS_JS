let m;
let n;
let matrix = [];
let choice;
let loop = true;
let sum = 0;
let menu = `
MENU
1. Nhập vào mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhât trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một mảng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát
Lựa chọn của bạn:`
while (loop) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            m = +prompt("Nhập số hàng:");
            n = +prompt("Nhập số cột");
            if (isNaN(m) || isNaN(n) || m <= 0 || n <= 0) {
                console.log("Số hàng và cột không hợp lệ")
            } else {
                matrix = new Array(m).fill(null).map(() => new Array(n).fill(0));
                for (let i = 0; i < m; i++) {
                    for (let j = 0; j < n; j++) {
                        matrix[i][j] = +prompt(`Nhập phần tử cho mảng:`);
                    }
                }
            }
            break;
        case 2:
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    console.log(matrix[[i][j]]);
                }
            }
            break;
        case 3:
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    sum += matrix[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng là" + sum);
            break;
        case 4:
            let max = Math.max(matrix);
            console.log("Phần tử lớn nhất trong mảng là: " + max);
            console.log("Vị trí " + matrix.indexOf(max));
            break;
        case 5:
            let sum1 = 0;
            let average;
            let row = +prompt("Nhập hàng cần tính trung bình");
            if (row > 0 && row <= m) {
                for (let j = 0; j < n; j++) {
                    sum1 += matrix[row][j];
                }
                average = sum1 / n;
                console.log("Trung bình cộng các phần tử ở hàng" + row + "là" + average);
            } else {
                console.log("Hàng bạn nhập không hợp lệ");
            }
            break;
        case 6:
            console.log(matrix.reverse());
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



