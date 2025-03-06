let arr = [];
while (true) {
    let choice = +prompt("MENU" + "\n"+ "1. Nhập vào mảng\n"+"2. Hiển thị mảng\n" +"3. Thêm phần tử\n" +"4. Sửa phần tử\n"+"5. Xóa phần tử\n"+"6. Thoát\n" + "Mời bạn nhập lựa chọn");
    switch (choice) {
        case 1:
            let n = +prompt("Nhập số phần tử của mảng:");
            for (let i = 0; i < n; i++) {
                let input = prompt("Nhập phần tử cho mảng");
                arr.push(input);
            }
            break;
        case 2:
            document.write(arr);
            break;
        case 3:

    }
}