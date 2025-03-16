let employees = [];
let menu = `
Quản lý nhân viên
1. Thêm nhân viên
2. Xóa nhân viên theo ID
3. Cập nhật lương nhân viên
4. Tìm kiếm nhân viên theo tên
5. Hiển thị danh sách nhân viên
6. Thoát
Lựa chọn của bạn là:
`
let choice;
do {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            searchEmployee();
            break;
        case 5:
            displayEmployees();
            break;
        case 6:
            console.log("Cảm ơn bạn đã dùng chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
    }
} while (choice !== "6");
function addEmployee() {
    let id = +prompt("Nhập ID nhân viên:");
    let name = prompt("Nhập tên nhân viên:");
    let position = prompt("Nhập vị trí:");
    let salary = parseFloat(prompt("Nhập mức lương:"));
    employees.push({ id, name, position, salary });
    console.log(" Nhân viên đã được thêm thành công!");
}
function findEmployeeById(id) {
    return employees.find(emp => emp.id === id);
}
function deleteEmployee() {
    let id = prompt("Nhập ID nhân viên cần xóa:");
    let employee = findEmployeeById(id);
    if (employee) {
        let confirmDelete = confirm(`Bạn có chắc muốn xóa nhân viên ${employee.name}?`);
        if (confirmDelete) {
            let index = employees.indexOf(employee);
            employees.splice(index, 1);
            console.log(`Nhân viên ${employee.name} đã bị xóa!`);
        }
    } else {
        console.log("Không tồn tại ID này");
    }
}
function updateSalary() {
    let id = +prompt("Nhập ID nhân viên cần cập nhật lương:");
    let employee = findEmployeeById(id);
    if (employee) {
        let newSalary = parseFloat(prompt(`Nhập mức lương mới cho ${employee.name}:`));
        employee.salary = newSalary;
        console.log(`Đã cập nhật lương của ${employee.name} thành ${newSalary}`);
    } else {
        console.log("Không tồn tại ID này");
    }
}
function searchEmployee() {
    let search = prompt("Nhập tên nhân viên cần tìm:");
    let results = employees.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()));
    if (search.length > 0) {
        results.forEach(emp => console.log(`ID: ${emp.id}, Tên: ${emp.name}, Vị trí: ${emp.position}, Lương: ${emp.salary}`));
    } else {
        console.log("Không tìm thấy nhân viên có tên này");
    }
}
function displayEmployees() {
    if (employees.length === 0) {
        console.log("Hiện không có nhân viên nào.");
    } else {
        employees.forEach(emp => console.log(`ID: ${emp.id}, Tên: ${emp.name}, Vị trí: ${emp.position}, Lương: ${emp.salary}`));
    }
}


