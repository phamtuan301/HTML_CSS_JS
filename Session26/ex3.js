let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
// let n = +prompt("Mời bạn nhập số phần tử của mảng");
// if (n === 0) {
//     alert("Mảng không có phần tử nào");
// } else if (n < 0 || isNaN(n)) {
//     alert("Số phần tử không hợp lệ")
// } else {
//     for (let i = 0; i < n; i++) {
//         let input = prompt("Nhập email");
//         arr.push(input);
//     }
// }
if (arr.length === 0) {
    console.log("Mảng rỗng");
} else {
    let newarr = [];
    newarr = arr.filter(str => str.includes("@") && !str.includes(" ") && (str.includes(".com") || str.includes(".net")));
    console.log(newarr);
}