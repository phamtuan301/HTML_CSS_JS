let number = +prompt("Nhập số nguyên bất kì");
for (let i = 0;i<=Math.abs(number);i++){
    if (number % i === 0){
        document.write(i);
        document.write("\n");
    }
}