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
for (let i = 0; i < toDoList.length; i++) {
  const work = toDoList[i];
  const row = document.createElement("ul");
  row.innerHTML = `
          <li id="checked">${work.task}</li>
      `;
  document.getElementById("myUL").appendChild(row);
}
