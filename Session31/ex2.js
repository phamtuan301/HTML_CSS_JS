document.getElementById("switch").onclick = function () {
    if(document.getElementById("body").style.backgroundColor == "black"){
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("body").style.color = "black";
    }else {
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("body").style.color = "white";
    }
};