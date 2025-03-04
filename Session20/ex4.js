let input = prompt("Mời bạn nhập chuỗi bất kì:");
let search = prompt("Mời bạn nhập kí tự cần tìm kiếm: ");
let found = 0;
for (let i = 0;i<=input.length;i++){
    if(search === input[i]){
        found++;
    }
}
if (found === 0){
    alert("Không tìm thấy kí tự")
}else {
    alert("Tìm thấy kí tự")
}