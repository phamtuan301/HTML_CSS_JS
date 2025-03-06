let number = [2,5,7,4,1,8,6];
let input = +prompt("Mời bạn đoán số bất kì");
for (let i = 0; i<number.length;i++){
    if (number.includes(input)){
        console.log("Bingo");
    }else {
        console.log("Chúc bạn may mắn lần sau");
    }
}