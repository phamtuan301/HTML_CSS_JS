const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];
function money(cart) {
    let result = 0;
    for (const item of cart) {
        result += item.price * item.quantity;
    }
    return result;
}
console.log(money(cart) + "VND");