let number = prompt("Nhập vào số bất kì: ");
let number1 = '';
if (number <= 'z' && number >='a' || number >='A' && number <='Z'){
    alert("Số không hợp lệ");
}else {
    for (let i = number.length-1 ; i>=0;i--){
        number1+=number[i];
    }
}
if (number1 === number){
    alert("Là số đối xứng")
}else{
    alert("Không phải số đối xứng")
}