let number = prompt("Nhập số a:");
let number1 = prompt("Nhập số b:");
let number2 = 1;
if ((number >= 'a' && number <= 'z') || (number >= 'A' && number <= 'Z') ||  (number1 >= 'a' && number1 <= 'z') || (number1 >= 'A' && number1 <= 'Z')){
    alert("Không hợp lệ");
}else{
    for(let i = 0; i<number1;i++){
        number2*=number;
    }
    alert(number2);
}