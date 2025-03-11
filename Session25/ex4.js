function check(a) {
    let count = 0;
    if (isNaN(a)) {
        return "dữ liệu không hợp lệ"
    } else {
        if (a < 2) {
            alert("không phải số nguyên tố");
        } else {
            for (let i = 2; i * i <= a; i++) {
                if (a % i === 0) {
                    count++;
                }
            }
        }
        if (count === 0) {
            return "là số nguyên tố";
        } else {
            return "không phải số nguyên tố";
        }
    }
}
console.log(check(17));
console.log(check(6));
console.log(check("text"));