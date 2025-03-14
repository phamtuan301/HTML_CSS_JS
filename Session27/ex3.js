let loop = true;
let check = true;
let bankinh;
let chieudai;
let chieurong;
let menu = `
MENU
1. Tính diện tích hình tròn
2. Tính chu vi hình tròn
3. Tính diện tích hình chữ nhật
4. Tính chu vi hình chữ nhật
5. Thoát
Lựa chọn của bạn là:`
while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1:
            do {
                bankinh = +prompt("Mời bạn nhập bán kính hình tròn:");
                if (isNaN(bankinh)) {
                    alert("Dữ liệu bạn nhập không hợp lệ");
                } else {
                    check = false;
                    let area = (bankinh ** 2) * 3.14;
                    alert("Diện tích hình tròn là:" + " " + area);
                }
            } while (check)
            break;
        case 2:
            do {
                bankinh = +prompt("Mời bạn nhập bán kính hình tròn:");
                if (isNaN(bankinh)) {
                    alert("Dữ liệu bạn nhập không hợp lệ");
                } else {
                    check = false;
                    let chuvi = bankinh * 2 * 3.14;
                    alert("Chu vi hình tròn là:" + " " + chuvi);
                }
            } while (check)
            break;
        case 3:
            do {
                chieudai = +prompt("Mời bạn nhập chiều dài hình chữ nhật");
                chieurong = +prompt("Mời bạn nhập chiều rộng hình chữ nhật")
                if (isNaN(chieudai) || isNaN(chieurong)) {
                    alert("Dữ liệu không hợp lệ");
                } else {
                    check = false;
                    let dientichhcn = chieudai * chieurong;
                    alert("Diện tích hình chữ nhật là:" + " " + dientichhcn);
                }
            } while (check);
            break;
        case 4:
            do {
                chieudai = +prompt("Mời bạn nhập chiều dài hình chữ nhật");
                chieurong = +prompt("Mời bạn nhập chiều rộng hình chữ nhật")
                if (isNaN(chieudai) || isNaN(chieurong)) {
                    alert("Dữ liệu không hợp lệ");
                } else {
                    check = false;
                    let chuvihcn = (chieudai + chieurong) * 2;
                    alert("Chu vi hình chữ nhật là:" + " " + chuvihcn);
                }
            } while (check);
            break;
        case 5:
            loop = false;
            alert("Cảm ơn bạn đã dùng chương trình");
            break;
        default:
            alert("Lựa chọn của bạn không hợp lệ");
            break;
    }
}