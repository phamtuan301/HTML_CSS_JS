let arr =["2025-03-10", "2024-12-25", "2023-07-01"];
function reversearr(arr) {
    return arr.map(date => date.split("-").reverse().join('/'));
}
console.log(reversearr(arr));

