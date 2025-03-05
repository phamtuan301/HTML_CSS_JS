let result = 0;
while (true) {
    let money = +prompt("Nhập số tiền muốn gửi");
    let interestrate = +prompt("Nhập lãi suất");
    let month = +prompt("Nhập số tháng muốn gửi");
    if (money <= 0) {
        alert("Nhập lại số tiền muốn gửi")
    } else if (interestrate <= 0) {
        alert("Nhập lại lãi suất")
    } else if (month <= 0) {
        alert("Nhập lại số tháng muốn gửi")
    } else {
        let interest = (1 + interestrate / 100) ** month
        result = money * interest;
        let money1 = result - money;
        alert("Số tiền lãi: " + " " + money1);
        alert("Số tiền nhận được: " + " " + result);
        break;
    }
}

