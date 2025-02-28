
let a = parseFloat(prompt("Nhập a(khác 0): "));
let b = parseFloat(prompt("Nhập b: "));
let c = parseFloat(prompt("Nhập c: "));
let delta = b * b - 4 * a * c;
if (delta < 0) {
    alert("Phương trình vô nghiệm");
} else if (delta === 0) {
    let x = -b / (2 * a);
    alert("Phương trình có nghiệm kép: x = " + x);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Phương trình có hai nghiệm phân biệt: x1 = " + x1 + " x2 = " + x2);
}

