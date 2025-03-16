const rectangle = {
    width: 10,
    height: 5,
    getArea: function(){
        return rectangle.width * rectangle.height;
    }
};
let result = rectangle.getArea();
console.log(result);