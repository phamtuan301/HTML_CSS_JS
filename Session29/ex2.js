let menu = `
Quản lý sản phẩm
1. Thêm sản phẩm vào danh sách sản phẩm
2. Hiển thị tất cả sản phẩm
3. Hiển thị chi tiết sản phẩm theo Id
4. Cập nhật thông tin sản phẩm theo Id
5. Xóa sản phẩm theo Id
6. Lọc sản phẩm theo khoảng giá
7. Thoát
Lựa chọn của bạn là:`;
const products = [
  {
    id: 1,
    name: "Sữa chua",
    price: 16000,
    category: "đồ ăn",
    quantity: 1000,
  },
];
let choice;
while (choice !== 7) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
        let name = prompt("Nhập tên sản phẩm:");
        let price = +prompt("Nhập giá sản phẩm");
        let category = prompt("Nhập danh mục sản phẩm:");
        let quantity = +prompt("Nhập số lượng sản phẩm:");
        let newProducts ={
          id: Math.random(),
          name,
          price,
          category,
          quantity,
        }
        products.push(newProducts);
      break;
    case 2:
      displayProducts();
      break;
    case 3:
      let findId = +prompt("Nhập Id sản phẩm muốn tìm:");
      let findProducts = search("id", findId);
      if(findProducts === -1){
        console.log("Không tìm thấy sản phẩm có Id trên");
      }else{
        displayOneProduct(products[findProducts], findProducts);
      }
      break;
    case 4:
      let updateId = +prompt("Nhập Id sản phẩm muốn cập nhật:");
      let updateIndex = search("id", updateId);
      if(updateIndex === -1){
        console.log("Không tìm thấy sản phẩm có Id trên");
      }else{
        products[updateIndex].name = prompt("Nhập tên mới cho sản phẩm:");
        products[updateIndex].price = +prompt("Nhập giá mới cho sản phẩm:");
        products[updateIndex].category = prompt("Nhập danh mục mới cho sản phẩm:");
        products[updateIndex].quantity = prompt("Nhập số lượng mới cho sản phẩm:");
        displayOneProduct(products[updateIndex], updateIndex);
      }
      break;
    case 5:
      let deleteId = +prompt("Nhập Id sản phẩm muốn xóa:");
      let deleteIndex = search("id", deleteId);
      if(deleteIndex === -1){
        console.log("Không tìm thấy sản phẩm có Id trên");
      }else{
        products.splice(deleteIndex, 1);
        displayProducts();
      }
      break;
    case 6:
      break;
    case 7:
      console.log("Cảm ơn đã dùng chương trình!!!")
      break;
    default:
      alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
      break;
  }
}
function displayProducts() {
  contact.forEach(function (newProducts, index) {
    console.log(`Sản phẩm số ${index + 1}:`);
    console.log("Id:", newProducts.id);
    console.log("Tên sản phẩm:", newProducts.name);
    console.log("Giá:", newProducts.price);
    console.log("Danh mục:", newProducts.category);
    console.log("Số lượng:", newProducts.quantity);
  });
}
function search(key, value) {
  let findIndex = -1;
  for (let i in products) {
    if (value === products[i][key]) {
      findIndex = i;
      break;
    }
  }
  return findIndex;
}
function displayOneProduct(newProducts, index) {
  console.log(`Sản phẩm ${+index + 1}:`);
  console.log("Id:", newProducts.id);
  console.log("Tên sản phẩm:", newProducts.name);
  console.log("Giá:", newProducts.price);
  console.log("Danh mục:", newProducts.category);
  console.log("Số lượng:",newProducts.quantity);
}