// let salary = parseFloat(prompt("Mời bạn nhập thu nhập cá nhân: "));
// let tax = 0;
// if(salary < 5000000) {
//     alert("Bạn không cần phải nộp thuế thu nhập cá nhân")
// } else if(5000000 <= salary && salary<10000000){
//     tax = salary * 0.05;
//     alert("Thuế thu nhập cá nhân của bạn là: " + tax + "VND");
// } else if(10000000<= salary && salary< 18000000) {
//     tax = salary * 0.1;
//     alert("Thuế thu nhập cá nhân của bạn là: " + tax) + "VND";
// } else if(18000000<= salary && salary<32000000) {
//     tax = salary * 0.15;
//     alert("Thuế thu nhập cá nhân của bạn là: " + tax + "VND");
// } else if(32000000<=salary) {
//     tax = salary * 0.2;
//     alert("Thuế thu nhập cá nhân của bạn là: " + tax + "VND");
// } else {
//     alert("Vui lòng nhập lại!");
// }
let httpstatus = parseInt(prompt("Mời bạn nhập trạng thái HTTP(200, 201, 400, 404, 500): "));
switch(httpstatus){
    case 200:
        alert("Thành công");
        break;
    case 201:
        alert("Thêm thành công");
        break;
    case 400:
        alert("Lỗi request");
        break;
    case 404:
        alert("Không tìm thấy");
        break;
    case 500:
        alert("Lỗi server");
        break;
    default:
        alert("Mời nhập lại!");    
}
