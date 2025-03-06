let students = ["doraemon", "nobita", "shizuka"];
console.log(students)
let random = [1, "hello world",false, true, []]
console.log(random);
// for (let i=0;i<students.length;i++){
//     console.log(students[i]);
// }
// for (let i = students.length-1;i>=0;i--){
//     console.log(students[i])
// }
// for(let student of students){
//     console.log(student);
// }
// for (let index in students){
//     console.log(index);
// }
// students.unshift("Nguyễn Văn A"); // thêm vào đầu
// students.push("Nguyễn Văn B"); // thêm vào cuốicuối
// students.splice(1, 0, "hello world");
// console.log(students);
// students[4] = "Nguyên Văn C"
// console.log(students)
students.splice(2, 1);
console.log(students)