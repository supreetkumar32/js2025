
let firstPromise = new Promise((resolve,reject)=>{

    setTimeout(function sayMyName(){
        console.log("my name is supreet");
    },5000);
    resolve(1);
})

let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise fulfilled");
    }else{
        reject("Promise rejected")
    }
});



//if promise1 got fulfilled it will enter into then block, if it got rejected it will enter into the catch block
// promise1.then((message)=>{
//     console.log("then ka message is"+ message)
// }).catch((error)=>{
//     console.log("Error: "+error);
// })

promise1.then((message)=>{
    console.log("first msg:"+ message)
    return "promise fulfilled second message";
}).then((message)=>{
    console.log("second msg:"+ message)
    return "promise fulfilled third message";
}).then((message)=>{
    console.log("third msg:"+ message); 
}).catch((error)=>{
    console.error(error);
}).finally((message)=>{
    console.log("i ma final, i will run");
})

///Promise.all
let promise3= new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First");
})
let promise4= new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second");
})
let promise5= new Promise((resolve,reject)=>{
    setTimeout(reject,4000,"Third");
})

//if all promise will resolve then Promise.all will fulfill otherwise it will throw an error
Promise.all([promise3,promise4,promise5])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log("error: "+error);
})