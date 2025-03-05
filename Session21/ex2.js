let countodd = 0;
let counteven = 0;
for (let i=0;i<5;i++){
    let number = +prompt("Nhập số nguyên bất kì:");
    if (number % 2 === 0){
        counteven++;
    }else{
        countodd++;
    }
}
alert("Có" + " " + countodd + "số lẻ trong các số vừa nhập" + "\n" + "Có" + " " + counteven + "số chẵn trong các số vừa nhập");