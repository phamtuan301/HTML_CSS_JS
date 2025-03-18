let products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
let cart = [];
let menu = `
Quản lý sản phẩm
1. Hiển thị các sản phẩm theo danh mục
2. Chọn sản phẩm để mua bằng cách nhập id
3. Sắp xếp các phẩm trong cửa hàng theo giá
4. Tính số tiền thanh toán trong giỏ hàng
5. Thoát
Lựa chọn của bạn:`;
let choice;
while (choice !== 5) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      let findCategory = prompt("Nhập tên danh mục muốn tìm kiếm:");
      let findIndex = search("category", findCategory);
      if (findIndex === -1) {
        console.log("Không có sản phẩm nào có danh mục trên!");
      } else {
        for (let i in products) {
          if (products[i].category === findCategory) {
            console.log(products[i]);
          }
        }
      }
      break;
    case 2:
      let buyId = +prompt("Nhập ID sản phẩm muốn mua:");
      let findId = search("id", buyId);
      if (findId === -1) {
        console.log("Không có sản phẩm nào có ID trên!");
      } else {
        let quantityBuy = parseInt(prompt("Nhập số lượng muốn mua:"));
        if (isNaN(quantityBuy) || quantityBuy <= 0) {
          console.log("Số lượng không hợp lệ!");
        } else {
          let isInCart = -1;
          for (let [index, item] of cart.entries()) {
            if (item.id === buyId) {
              isInCart = index;
              break;
            }
          }
          if (findId >= 0 && findId < products.length) {
            let product = products[findId];
            if (product.quantity < quantityBuy) {
              console.log("Số lượng sản phẩm trong kho không đủ!");
            } else {
              if (isInCart === -1) {
                let newProduct = { ...product, quantity: quantityBuy };
                cart.push(newProduct);
              } else {
                cart[isInCart].quantity += quantityBuy;
              }
              products[findId].quantity -= quantityBuy;
              console.log("Giỏ hàng:", cart);
              console.log("Danh sách sản phẩm:", products);
            }
          } else {
            console.log("Sản phẩm không hợp lệ!");
          }
        }
      }
      break;
    case 3:
      let select = prompt(
        "Mời bạn nhập lựa chọn" +
          "\n" +
          "a. Sắp xếp tăng dần" +
          "\n" +
          "b. Sắp xếp giảm dần"
      );
      if (select === "a") {
        products.sort((a, b) => a.price - b.price);
        for (let i in products) {
          console.log(products[i]);
        }
      } else if (select === "b") {
        products.sort((a, b) => b.price - a.price);
        for (let i in products) {
          console.log(products[i]);
        }
      }
      break;
    case 4:
      console.log("Sản phẩm trong giỏ hàng của bạn là:");
      for (let i in cart) {
        console.log(cart[i]);
      }
      let sum = 0;
      for (let i in cart) {
        sum = sum + cart[i].price * cart[i].quantity;
      }
      console.log("Tổng số tiền bạn cần thanh toán là:" + sum + " "+"VND");
      break;
    case 5:
      console.log("Cảm ơn bạn đã dùng chương trình!!!");
      break;
    default:
      alert("Lựa chọn không hợp lệ, vui lòng chọn lại");
      break;
  }
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
