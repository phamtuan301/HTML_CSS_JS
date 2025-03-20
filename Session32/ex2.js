let count = 0;
document.getElementById("clickme").onclick = function () {
    count++;
    document.getElementById("count").textContent = count;
}