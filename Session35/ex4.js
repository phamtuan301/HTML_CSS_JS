let employeeList = [];
employeeList = JSON.parse(localStorage.getItem("employeeList"));
let tbody = document.getElementById("tbody");
function render() {
  for (let i in employeeList) {
    employeeList[i];
    let tr = `
        <tr>
            <th scope="row">${parseInt(i) + 1}</th>
            <td>${employeeList[i].name}</td>
            <td>${employeeList[i].position}</td>
          </tr>`;
    tbody.innerHTML += tr;
  }
}
render();
let form = document.getElementById("add-form");
form.onsubmit = function (event) {
  event.preventDefault();
  let name = form.employeeName.value;
  let position = form.position.value;
  let employee = {
    id: Math.random(),
    name,
    position,
  };
  employeeList.push(employee);
  localStorage.setItem("employeeList", JSON.stringify(employeeList));
  tbody.innerHTML = "";
  render();
};
let paginationContainer = document.getElementById("pagination");
let totalPage = employeeList.length;
let pageSize = 5;
for (let i=1;i<=totalPage;i++){
    let li =`<li class="page-item"><a class="active-page page-link" href="#">${i}</a></li>`;
    paginationContainer.innerHTML +=li;
}
paginationContainer.innerHTML +=`<li class="page-item"><a class="page-link" href="#">Next</a></li>`;
let activePages = document.getElementsByClassName("active-page");
for (let page of activePages) {
    page.onclick= function (event) {
        event.preventDefault();
        let pageIndex= +page.innerText;
        let paginateList =[];
        let start = (pageIndex-1) * pageSize;
        let end = start + pageSize - 1;
        for (let i = start;i<=end;i++){
            paginateList.push(employeeList[i]);
        }
    }
}