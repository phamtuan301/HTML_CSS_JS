let menu = `
Quản lý danh bạ
1. Thêm đối tượng vào danh bạ
2. Hiển thị danh bạ
3. Tìm kiếm thông tin người liên hệ theo số điện thoại
4. Cập nhật thông tin người liên hệ theo id
5. Xóa một đối tượng liên hệ khỏi danh sách theo id
6. Thoát
Lựa chọn của bạn là:
`;
const contact = [
  {
    id: 1,
    name: "Phạm Tuấn",
    email: "tuan13nt@gmail.com",
    phone: "0818418483",
  },
];
let choice;
while (choice !== 6) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      let name = prompt("Nhập tên người liên hệ mới:");
      let email = prompt("Nhập email người liên hệ mới:");
      let phone = prompt("Nhập số điện thoại người liên hệ mới:");
      let newContact = {
        id: Math.random(),
        name,
        email,
        phone,
      };
      contact.push(newContact);
      break;
    case 2:
      displayContact()
      break;
    case 3:
      let searchPhoneNumber = prompt("Nhập số điện thoại muốn tìm kiếm:");
      let findIndex = search("phone", searchPhoneNumber);
      if(findIndex === -1){
        console.log("Không có người liên hệ nào có số điện thoại này!");
      }else{
        displayOneContact(contact[findIndex], findIndex);
      }
      break;
    case 4:
      let searchId = +prompt("Mời bạn nhập vào Id người liên hệ muốn cập nhật:");
      let updateIndex = search("id", searchId);
      if(updateIndex === -1){
        console.log("Không có người liên hệ nào có Id trên!");
      }else{
        contact[updateIndex].name = prompt("Nhập tên mới cho người liên hệ này:");
        contact[updateIndex].email = prompt("Nhập email mới cho người liên hệ này:");
        contact[updateIndex].phone = prompt("Nhập số điện thoại mới cho người liên hệ này");
        displayOneContact(contact[updateIndex], updateIndex);
      }
      break;
    case 5:
      let deleteId = +prompt("Mời bạn nhập vào Id người liên hệ muốn xóa:");
      let deleteIndex = search("id", deleteId);
      if(deleteIndex === -1){
        console.log("Không tìm thấy người liên hệ có Id trên!");
      }else{
        contact.splice(deleteIndex, 1);
        displayContact();
      }
      break;
    case 6:
      console.log("Cảm ơn bạn đã dùng chương trình")
      break;
    default:
      alert("Lựa chọn không hợp lệ, vui lòng chọn lại");
      break;
  }
}
function displayContact() {
  contact.forEach(function (newContact, index) {
    console.log(`Người liên hệ ${index + 1}:`);
    console.log("Id:", newContact.id);
    console.log("Tên:", newContact.name);
    console.log("Email:", newContact.email);
    console.log("Số điện thoại:", newContact.phone);
  });
}
function search(key, value) {
  let findIndex = -1;
  for (let i in contact) {
    if (value === contact[i][key]) {
      findIndex = i;
      break;
    }
  }
  return findIndex;
}
function displayOneContact(newContact, index) {
  console.log(`Người liên hệ ${+index + 1}:`);
  console.log("Id:", newContact.id);
  console.log("Tên:", newContact.name);
  console.log("Email:", newContact.email);
  console.log("Số điện thoại:", newContact.phone);
}