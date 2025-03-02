let math = parseFloat(prompt("Mời bạn nhập điểm Toán: "));
let literature = parseFloat(prompt("Mời bạn nhập điểm Văn: "));
let eng = parseFloat(prompt("Mời bạn nhập điểm Tiếng Anh: "));
let average = (math + eng + literature) / 3;
if (average >= 8){
    alert("Giỏi");
} else if (6.5<=average && average <=7.9 ) {
    alert("Khá");
} else if (5 <= average && average <= 6.4) {
    alert("Trung bình");
} else {
    alert("Yếu");
}