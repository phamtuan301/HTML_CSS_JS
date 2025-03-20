document.getElementById("add").onclick = function addSubject() {
    let name = document.getElementById("input").value.trim();
    if (name === "") {
        alert("Tên môn học không được để trống!");
        return;
    }
    let li = document.createElement("li");
    li.textContent = name;
    document.getElementById("list").appendChild(li);
    input.value = "";
}