let number = parseFloat(prompt("Nhập số nguyên bất kì"));
let count = 0;
if (number < 2) {
    alert("Không phải số nguyên tố");
} else {
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
           count++;
        }
    }
}
if (count === 0) {
    alert("Là số nguyên tố")
}else {
    alert("Không phải số nguyên tố")
}