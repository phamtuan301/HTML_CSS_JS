document.getElementById("add").onclick = function addTask() {
    let input = document.getElementById("inputtask").value;
    let taskText = input.trim();
    if (!taskText) return;
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="confirmDelete(this)">X</button>`;
    document.getElementById("list").appendChild(li);
    document.getElementById("inputtask").value = "";
}
function confirmDelete(button) {
    if (confirm("Bạn có chắc muốn xóa nhiệm vụ này?")) {
        button.parentElement.remove();
    }
}