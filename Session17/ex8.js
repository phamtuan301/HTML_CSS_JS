let d1 = prompt("Mời bạn nhập ngày thứ nhất(YYYY-MM-DD): ");
let d2 = prompt("Mời bạn nhập ngày thứ hai(YYYY-MM-DD): ");
let date1 = new Date(d1);
let date2 = new Date(d2);
let dif = Math.abs(date2.getTime() - date1.getTime());
let dif2 = Math.ceil(dif / 86400000);
alert("Chênh lệch là" + dif2 + "ngày");