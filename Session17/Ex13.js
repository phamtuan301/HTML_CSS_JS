let money = parseFloat(prompt("Mời bạn nhập số tiền muốn gửi: "));
let month = parseInt(prompt("Mời bạn nhập số tháng muốn gửi: "));
const monthinterest = 0.043 / 12;
let interestrate = money * month * monthinterest;
alert("Số tiền lãi là" + interestrate + "VND");