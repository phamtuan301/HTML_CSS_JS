let password = "javascript";
while(true){
    let input = prompt("Mời bạn nhập mật khẩu");
    if(input === password){
        alert("Mật khẩu đúng")
        break;
    }else{
        alert("Sai mật khẩu")
    }
}
