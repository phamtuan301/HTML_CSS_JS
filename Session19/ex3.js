let choice = parseInt(prompt("Mời bạn nhập lựa chọn" +"\n" +"1. VND-->USD" + "\n" + "2. USD-->VND"));
let result = 0;
let money = 0;
if (choice === 1){
    let money = parseFloat(prompt("Mời bạn nhập số tiền cần đổi:"));
    result = money /23000;
    alert(result + " " + "USD");
}else if(choice === 2){
    let money = parseFloat(prompt("Mời bạn nhập số tiền cần đổi:"));
    result = money * 23000;
    alert(result + " " + VND);
}else {
    alert("Vui lòng chọn lại!");
}