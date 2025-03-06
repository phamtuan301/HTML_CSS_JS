let arr = [];
for (let i = 0; i < 10; i++) {
    let input = +prompt("Nhập phần tử cho mảng");
    arr.push(input);
}
alert(arr.sort());