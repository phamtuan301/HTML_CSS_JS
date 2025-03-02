let year = parseFloat(prompt("Mời bạn nhập năm bất kì: "));
if (year === null || year == " "){
    alert("Mời bạn nhập lại năm")
}else{
    if((year % 4 === 0 && year % 10 !== 0 ) || year % 400 === 0){
        alert("Năm bạn nhập là năm nhuận");
    }else{
        alert("Năm bạn nhập không phải năm nhuận");
    }
}