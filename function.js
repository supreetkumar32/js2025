function hello(){
    console.log("hello ji");
}
hello();

function a(num){
console.log(num);
}
a(5);

function b(){
    return 5;
}
let z=b();
console.log(z);

//function name is not given
let getMultiplication=function(a,b){
    return a*b;
}
let ans=getMultiplication(2,3);
console.log(ans);

//arrow function
let exp=(x,y) =>{ //function hta ke arrow lga do bracket ke baad
    return x**y;
}
console.log(exp(2,3));
console.log("hello");