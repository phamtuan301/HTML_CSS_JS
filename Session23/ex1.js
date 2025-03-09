let numbers = [];
let arr = [];
let count = 0;
for (let i =0;i<10;i++){
    let input = +prompt("Nhập phần tử cho mảng(số)");
    numbers.push(input);
    if (input >= 10){
        arr.push(input);
        count++;
    }
}
if (count === 0){
    alert("Mảng không có số nào lớn hơn hoặc bằng 10");
}else {
    alert(arr.join(" "));
}