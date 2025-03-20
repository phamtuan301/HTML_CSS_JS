let count = 18;
document.getElementById("upper").onclick = function () {
    count+=2;
    document.getElementById("text").style.fontSize = `${count}px`;
}
document.getElementById("lower").onclick = function () {
    count-=2;
    document.getElementById("text").style.fontSize = `${count}px`;
}