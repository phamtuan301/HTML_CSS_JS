let toDoList = [
  {
    id: 1,
    task: "Hit the gym",
    conpleted: false,
  },
  {
    id: 2,
    task: "Pay bills",
    conpleted: true,
  },
  {
    id: 3,
    task: "Meet george",
    conpleted: false,
  },
  {
    id: 4,
    task: "Buy eggs",
    completed: false,
  },
  {
    id: 5,
    task: "Read a book",
    completed: false,
  },
  {
    id: 6,
    task: "Organize office",
    completed: false,
  },
];
function addTodo() {
  let inputElement = document.getElementById("myInput").value;
  let id = toDoList[toDoList.length - 1] + 1;
  let todo = {
    id: id,
    task: inputElement,
    completed: false,
  };
}
