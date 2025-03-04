let number = parseInt(prompt("Mời bạn nhập số nguyên dương bất kì: "));
let sum = 0;
if (number <= 0 || (number >='a' && number <='z') || (number>='A' && number <='Z')){
    alert("Dữ liệu nhập vào không hợp lệ");
}else {
for (let i=0; i<=number; i++){
    sum += i;
}
alert(sum);
}