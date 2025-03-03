let firstNumber = parseFloat(prompt("Mời bạn nhập số thứ nhất:"));
let secondNumber = parseFloat(prompt("Mời bạn nhập số thứ hai(Khác số thứ nhất):"));
let thirdNumber = parseFloat(prompt("Mời bạn nhập số thứ ba(Khác hai số đầu tiên):"));
if(firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
    alert("Vui lòng nhập 3 số khác nhau!");
} else {
    let maxNumber = Math.max(firstNumber,secondNumber,thirdNumber);
    document.write("Số lớn nhất trong ba số vừa nhập là: " + maxNumber);
}