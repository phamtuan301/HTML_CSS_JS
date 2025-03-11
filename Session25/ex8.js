function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    } else {
        let checkupper = false;
        let checklower = false;
        let checknumber = false;
        for (let char of password) {
            if (char >= 'A' && char <= 'Z') {
                checkupper = true;
            } else if (char >= 'a' && char <= 'z') {
                checklower = true;
            } else if (char >= '0' && char <= '9') {
                checknumber = true;
            }
        }
        if (checkupper && checklower && checknumber) {
            return true;
        }
    }
    return false;
}
let input = prompt("Nhập mật khẩu");
console.log(isStrongPassword(input));