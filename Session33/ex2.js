let count = 0;
document.getElementById("check").onclick = function(){
    let input = document.getElementById("text").value;
    count = input.length;
    document.getElementById("count").textContent = `${count} ký tự`;
} 