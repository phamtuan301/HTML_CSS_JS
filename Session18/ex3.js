let username = prompt("Mời bạn nhập tên người dùng: ");
if (username === "ADMIN") {
    let password = prompt("Mời bạn nhập mật khẩu:");
    if(password === "TheMaster") {
        alert("Welcome");
    }else if (password === null) {
        alert("Cancelled");
    }else {
        alert("Wrong password")
    }
}else if (username === null) {
        alert("Cancelled");
}else {
    alert("I don't know you");
}