//forEach
let a=[10,20,30];
a.forEach(element => {
    console.log(element);
});

a.forEach((value,index)=>{
    console.log("Number:",value,"Index:", index);
})

//for in
let obj={
    name:"Supreet",
    age:24,
    height:6,
    greet: function(){
        console.log("namaste");
    }
}
//it will give all the keys
for(let key in obj){
    console.log(key," ",obj[key]);
}