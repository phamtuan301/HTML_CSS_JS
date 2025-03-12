let loop = true;
let cart = [];
let products = [["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]]
let menu = `
MENU
1. Danh sách sản phẩm
2. Mua hàng
3. Tính tiền + Hóa đơn
4. Thoát
Mời bạn nhập lựa chọn:
`
while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1:
            displayproduct();
            break;
        case 2:
            let productName = prompt("Mời bạn nhập tên sản phẩm muốn mua");
            let findIndex = -1;
            for (let index in products){
                if(productName === products[index[0]]){
                    findIndex = index;
                }
            }
            if(findIndex === -1){
                console.log("Không tìm thấy sản phẩm");
            }else{

            }

            let addProduct = [...products];
            break;
        case 3:
            break;
        case 4:
            console.log("Cảm ơn bạn đã mua hàng.Hẹn gặp lại!!!");
            loop = false;
            break;
        default:
            console.log("Lựa chọn không hợp l, vui lòng chọn lại!");
            break;
    }
}

function displayproduct() {
    for (let index in products) {
        console.log(
            `${Number(index) + 1}. ${products[index][0]} - ${products[index][2]} - ${products[index][1]}`
        );
    }
}