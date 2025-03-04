let number = parseFloat(prompt("Nhập số nguyên bất kì"));
if (number <2){
    alert("Không phải số nguyên tố");
}else {
    for(let i = 2;i*i<=number;i++){
        if(number % i === 0){
            alert("Không phải số nguyên tố");
            break;
        }
        alert("Là số nguyên tố");
    }
    
}