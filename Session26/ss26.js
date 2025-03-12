// function myFn(fn){
//     fn();
//     return () => 10;
// }

// myFn(()=>{});
let numbers = [10,20,30,40,50,60,7,0];
//.forEach()
numbers.forEach(function (element, index) {
    console.log(index, element);
});

//.map()
let newarr  = numbers.map(function (element, index){
    return `Phần tử: ${element}`;
});


//filter
let result = numbers.filter(function (element, index) {
    return element > 20;
});
console.log(result)

//reduce
numbers.reduce(function(acc, cur){
    console.log("acc",  acc);
    console.log("cur",  cur);
    return 10;
}, 0 )

