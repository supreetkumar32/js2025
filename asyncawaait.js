//async await is used to handle a promise efficiently
//it helps in running the asyncronous code syncronously
//async function always returns a promise
import fetch from 'node-fetch';



async function getData(){
    //get request - async
    let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');//yahan par await lga kar isko syncronous way se run karenge
    //parse json-async
    let data=await response.json();
    console.log(data);
}

getData();

//we can write teh funcions for post also,put and delete also
//ex/;

async function getData(){
    //get request - async
    let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');//yahan par await lga kar isko syncronous way se run karenge
    //parse json-async
    let data=await response.json();
    console.log(data);
}

// async function postData(){
//     const response= await(url,options);
//     let data= await response.json();
//     console.log("post dataa response", data)
// }

// async function processData(){
//     await postData();
//     await getData();
// }

// processData();
