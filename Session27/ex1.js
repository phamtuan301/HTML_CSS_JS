let loop = true;
let number1;
let number2;
let check = true;
let menu = `
MENU
1. Cộng hai số
2. Trừ hai số
3. Nhân hai số
4. Chia hai số
5. Thoát
Lựa chọn của bạn là:`
while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1:
            do {
                number1 = +prompt("Mời bạn nhập số thứ nhất");
                number2 = +prompt("Mời bạn nhập số thứ hai")
                if(isNaN(number1) || isNaN(number2)){
                    alert("Dữ liệu không hợp lệ");
                }else {
                    check = false;
                    let sum = number1 + number2;
                    alert("Tổng 2 số bạn nhập là:" + " " + sum);
                }
            }while(check);
            break;
        case 2:
            do {
                number1 = +prompt("Mời bạn nhập số thứ nhất");
                number2 = +prompt("Mời bạn nhập số thứ hai")
                if(isNaN(number1) || isNaN(number2)){
                    alert("Dữ liệu không hợp lệ");
                }else {
                    check = false;
                    let dif = number1 - number2;
                    alert("Hiệu 2 số bạn nhập là:" + " " + dif);
                }
            }while(check);
            break;
        case 3:
            do {
                number1 = +prompt("Mời bạn nhập số thứ nhất");
                number2 = +prompt("Mời bạn nhập số thứ hai")
                if(isNaN(number1) || isNaN(number2)){
                    alert("Dữ liệu không hợp lệ");
                }else {
                    check = false;
                    let tich = number1 * number2;
                    alert("Tích 2 số bạn nhập là:" + " " + tich);
                }
            }while(check);
            break;
        case 4:
            do {
                number1 = +prompt("Mời bạn nhập số thứ nhất");
                number2 = +prompt("Mời bạn nhập số thứ hai")
                if(isNaN(number1) || isNaN(number2)){
                    alert("Dữ liệu không hợp lệ");
                }else {
                    check = false;
                    let chia = number1 / number2;
                    alert("Thương 2 số bạn nhập là:" + " " + chia);
                }
            }while(check);
            break;
        case 5:
            loop = false;
            alert("Cảm ơn bạn đã dùng chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại");
            break;
    }
}