function isPalindrome(str){
    let stringreverse = str.split('').reverse().join('');
    return stringreverse === str;
}
let input = prompt("Nhập chuỗi");
if(isPalindrome(input)){
    console.log("Chuỗi đối xứng");
}else{
    console.log("Chuỗi không đối xứng");
}