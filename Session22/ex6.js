let numbers = [2,5,7,4,1,8,6,2,5,7];
let count = 0;
let search = +prompt("Nhập vào số cần tìm trong mảng");
for (let i=0; i<numbers.length;i++){
    if (numbers[i] === search){
        count++;
    }
}
alert("Số" + ' ' + search +' '+ "xuất hiện" + ' ' +count + " " +'lần');