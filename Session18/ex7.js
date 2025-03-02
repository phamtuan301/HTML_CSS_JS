let numbera = parseFloat(prompt("Mời bạn nhập số a"));
let numberb = parseFloat(prompt("Mời bạn nhập số b"));
let choice = prompt("Mời bạn nhập vào các phép tính (+, -,*,/)");
switch (choice) {
    case "+" :
        alert("Kết quả phép tính là: " + (numbera + numberb));
        break;
    case "-" :
        alert("Kết quả phép tính là: " + (numbera - numberb));
        break;
    case "*" :
        alert("Kết quả phép tính là: " + (numbera * numberb));
        break;
    case "/" :
        alert("Kết quả phép tính là: " + (numbera / numberb));
        break;
}