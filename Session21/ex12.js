for (let i=0;i<10;i++){
    let a= Math.floor(Math.random() * 256 );
    let b= Math.floor(Math.random() * 256 );
    let c= Math.floor(Math.random() * 256 );
    console.log('%c Màu đã được thay đổi ' , 'color: rgb(' + a + ', ' + b + ', ' + c + '); font-weight: bold;');
}