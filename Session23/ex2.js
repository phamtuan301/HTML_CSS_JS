let numbers = [];
for (let i = 0; i < 10; i++) {
    let input = +prompt("Nhập phần tử cho mảng(số)");
    numbers.push(input);
}
if (numbers.length === 0) {
    alert("Không có số lớn nhất")
} else {
    let max = Math.max(...numbers);
    alert("Số lớn nhất" + max + "\n" + "Vị trí" + (numbers.indexOf(max) + 1));
}