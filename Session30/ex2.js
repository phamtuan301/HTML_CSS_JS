let library = [
  {
    id: 1,
    name: "Dế Mèn phiêu lưu ký",
    price: 20000,
    quantity: 30,
    category: "truyện",
  },
];
let cart = [];
let menu = `
Quản lý sách
1. Hiển thị danh sách sách theo thể loại
2. Thêm sách mới vào thư viện
3. Tìm kiếm sách theo tên hoặc id
4. Mua sách
5. Sắp xếp sách theo giá
6. In hóa đơn mua sách
7. Hiển thị tổng số lượng sách trong thư viện
8. Thoát chương trình
Lựa chọn của bạn là:`;
let choice;
while (choice !== 8) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      let findCategory = prompt("Nhập tên thể loại muốn tìm kiếm:");
      let findIndex = search("category", findCategory);
      if (findIndex === -1) {
        console.log("Không có sách nào thuộc danh mục trên!");
      } else {
        for (let i in library) {
          if (library[i].category === findCategory) {
            console.log(library[i]);
          }
        }
      }
      break;
    case 2:
      let name = prompt("Nhập tên sách:");
      let price = +prompt("Nhập giá của sách:");
      let quantity = +prompt("Nhập số lượng sách:");
      let category = prompt("Nhập thể loại sách:");
      let newBooks = {
        id: Math.random(),
        name,
        price,
        quantity,
        category,
      };
      library.push(newBooks);
      displayBooks();
      break;
    case 3:
      let select = prompt(
        "Chọn phương thức tìm kiếm sách:" +
          "\n" +
          "1. Theo tên" +
          "\n" +
          "2. Theo id"
      );
      if (select == 1) {
        let searchName = prompt("Mời bạn nhập tên sách muốn tìm kiếm:");
        let searchIndex = search("name", searchName);
        if (searchIndex === -1) {
          console.log("Sách không có sẵn trong thư viện");
        } else {
          displayOneBook(library[searchIndex], searchIndex);
        }
      } else if (select == 2) {
        let searchId = +prompt("Mời bạn nhập id sách muốn tìm kiếm:");
        let searchIndex1 = search("id", searchId);
        if (searchIndex1 === -1) {
          console.log("Sách không có sẵn trong thư viện");
        } else {
          displayOneBook(library[searchIndex1], searchIndex1);
        }
      }
      break;
    case 4:
      let buyId = +prompt("Nhập ID sách muốn mua:");
      let findId = search("id", buyId);
      if (findId === -1) {
        console.log("Không có sách nào có ID trên!");
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
          if (findId >= 0 && findId < library.length) {
            let book = library[findId];
            if (book.quantity < quantityBuy) {
              console.log("Số lượng sản phẩm trong kho không đủ!");
            } else {
              if (isInCart === -1) {
                let newBook = { ...book, quantity: quantityBuy };
                cart.push(newBook);
              } else {
                cart[isInCart].quantity += quantityBuy;
              }
              library[findId].quantity -= quantityBuy;
              console.log("Giỏ hàng:", cart);
              console.log("Danh sách sản phẩm:", library);
            }
          } else {
            console.log("Sản phẩm không hợp lệ!");
          }
        }
      }
      break;
    case 5:
      let select1 = prompt(
        "Mời bạn chọn cách sắp xếp:" +
          "\n" +
          "1. Tăng dần" +
          "\n" +
          "2. Giảm dần"
      );
      if (select1 == 1) {
        library.sort((a, b) => a.price - b.price);
        displayBooks();
      } else if (select1 == 2) {
        library.sort((a, b) => b.price - a.price);
        displayBooks();
      }
      break;
    case 6:
      console.log("Sản phẩm trong giỏ hàng của bạn là:");
      for (let i in cart) {
        console.log(cart[i]);
      }
      let sum = 0;
      let sumBooks = 0;
      for (let i in cart) {
        sum = sum + cart[i].price * cart[i].quantity;
        sumBooks = sumBooks + cart[i].quantity;
      }
      console.log("Tổng số lượng sách trong giỏ hàng của bạn là:" + sumBooks);
      console.log("Tổng số tiền bạn cần thanh toán là:" + sum + " " + "VND");
      break;
    case 7:
      let number = 0;
      for (let i in library) {
        number = number + library[i].quantity;
      }
      console.log("Tổng số lượng sách trong thư viện là:" + " " + number);
      break;
    case 8:
      console.log("Cảm ơn bạn đã dùng chương trình!!!");
      break;
    default:
      alert("Lựa chọn không hợp lệ, vui lòng chọn lại");
      break;
  }
}
function displayBooks() {
  library.forEach(function (newBooks, index) {
    console.log(`Sách ${index + 1}:`);
    console.log("Id:", newBooks.id);
    console.log("Tên sách:", newBooks.name);
    console.log("Giá:", newBooks.price);
    console.log("Số lượng:", newBooks.quantity);
    console.log("Thể loại sách:", newBooks.category);
  });
}
function search(key, value) {
  let findIndex = -1;
  for (let i in library) {
    if (value === library[i][key]) {
      findIndex = i;
      break;
    }
  }
  return findIndex;
}
function displayOneBook(newBooks, index) {
  console.log(`Quyển sách ${+index + 1}:`);
  console.log("Id:", newBooks.id);
  console.log("Tên sách:", newBooks.name);
  console.log("Giá:", newBooks.price);
  console.log("Số lượng:", newBooks.quantity);
  console.log("Thể loại:", newBooks.category);
}
