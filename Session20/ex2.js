let number = parseInt(prompt("Mời bạn nhập số nguyên dương bất kì: "));
let result = '';
if (number <= 0 || (number >='a' && number <='z') || (number>='A' && number <='Z')){
    alert("Dữ liệu nhập vào không hợp lệ");
}else {
for (let i=1; i<=number; i++){
    if (i % 5 === 0){
        result+=i + ", ";
    }
}
alert("Các số chia hết cho 5 từ 1 đến" + " " + number + " " + "là" +result);
}