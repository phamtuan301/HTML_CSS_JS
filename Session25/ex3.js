function check(arr) {
    let even = false;
    let evennum = [];
    if (arr.some(item => typeof item !== 'number')) {
        console.log("dữ liệu không hợp lệ")
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evennum.push(arr[i]);
                even = true;
            }
        }
        if (!even) {
            console.log("mảng không chứa số chẵn");
        } else {
            console.log(evennum);
        }
    }
}
check([11, 4, 65, 6]);
check([1, 3, 5, 17]);
check(["text"]);