function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(${index})">Xóa</button>`;
    taskList.appendChild(li);
  });
}
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("Vui lòng nhập công việc!");
    return;
  }
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskValue);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  loadTasks();
}
function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}
loadTasks();
