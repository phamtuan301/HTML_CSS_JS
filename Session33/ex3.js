let dish = [
    {name: 'Rau sạch', category: 'Đồ ăn'},
    {name: 'Thịt lợn', category: 'Đồ ăn'},
    {name: 'Pepsi không calo', category: 'Nước'},
    {name: 'Cocacola', category: 'Nước'},
    {name: 'Cờ lê', category: 'Dụng cụ'},
    {name: 'Tuy vít', category: 'Dụng cụ'},
];
document.getElementById("filter").onclick = function () {
    let input = document.getElementById("select");
    let list = document.getElementById("result");
    list.innerHTML = '';
    let filterDish = dish.filter(product => product.category ===  input.value);
    filterDish.forEach (function (product) {
        let li = document.createElement('li');
        li.textContent ="Tên đồ ăn:" + " " + product.name +" " + '-' +" "+ "Danh mục:"+ product.category;
        list.appendChild(li);
    });   
}
