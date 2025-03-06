
let input = prompt("Nhập vào một dãy số bất kỳ:");
let arr = input.split(" ");
if (arr.some(isNaN)) {
    alert("Dãy không hợp lệ");
} else {
    arr = arr.map(Number);
    let max = Math.max(...arr);
    alert(max + " " + "là số lớn nhất trong dãy số");
}