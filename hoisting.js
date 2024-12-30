//HOISTING
a();//it will give the "namaste" as output with this as js moves the function declarartion up.
function a(){
    console.log("namaste");
}
a();
//Note: In case of function expression,it wont work

//But in case of variable,(var) it will only uplift the declaration part (var a) not the initialization part
console.log(ab);//it will give undefined as output (as only var ab got uplifted)
var ab="hello";
console.log(ab);
//Note: above thing is only possible in the case of var not for let and const. It will thro wthe reference error in the case of let and const