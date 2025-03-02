let a = parseFloat(prompt("Mời bạn nhập cạnh thứ nhất"));
let b = parseFloat(prompt("Mời bạn nhập cạnh thứ hai"));
let c = parseFloat(prompt("Mời bạn nhập cạnh thứ ba"));
if (a + b > c && a + c >b && b + c > a){
    if(a === b & b === c){
        alert("Ba cạnh là của tam giác đều");
    }else if(a === b || b === c || a === c){
        alert("Ba cạnh là của tam giác cân");
    }else if (a*a + b*b === c*c || c*c + b*b === a*a || a*a + c*c === b*b){
        alert("Ba cạnh là của tam giác vuông");
    }else {
        alert("Ba cạnh là của tam giác thường");
    }
}else {
    alert("Ba cạnh không phải của một tam giác");
}
