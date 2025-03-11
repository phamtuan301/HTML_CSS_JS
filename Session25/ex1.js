function min(arr) {
    if (arr.length === 0) {
        return "Mảng không chứa phần tử";
    }
    if (arr.some(item => typeof item !== 'number')) {
        return "Mảng không hợp lệ";
    }
    return Math.min(...arr);
}
console.log("phần tử nhỏ nhất trong mảng là" + min([2, 4, 8, 1, 9]));
console.log(min([]));
console.log(min(["a", "b", "c"]));
console.log("phần tử nhỏ nhất trong mảng là" + min([5, 2, 7, 5, 4]));
