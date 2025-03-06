let arr = [];
let sumodd = 0;
let sumeven = 0;
for (let i = 0; i<5;i++){
    let input = +prompt("Nhập phần tử cho mảng");
    arr.push(input);
}
for (let i = 0;i<5;i++){
    if (arr[i] % 2 === 0){
        sumeven+=arr[i];
    }else {
        sumodd+=arr[i];
    }
}
alert("Tổng các số chẵn là" + ' ' + sumeven + "\n" + "Tổng các số lẻ là" + ' ' + sumodd);
