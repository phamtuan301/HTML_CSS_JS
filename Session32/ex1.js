document.getElementById("switch").onclick = function () {
let a= Math.floor(Math.random() * 256 );
let b= Math.floor(Math.random() * 256 );
let c= Math.floor(Math.random() * 256 );
document.getElementById("background").style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}