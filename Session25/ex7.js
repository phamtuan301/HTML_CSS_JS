function upper(str) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}
let input = prompt("Nhập chuỗi");
alert(upper(input));