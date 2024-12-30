//map,reduce,filter

//map
let arr=[10,20,30];
let ansArray = arr.map((number)=>{
    return number*number;
})

arr.map((number,index)=>{
    console.log(number+1);
    console.log(index);
})
console.log(ansArray);

//filter
let a=[11,12,13,14,15,16]
let evenarray=a.filter((number)=>{
    if(number%2==0){
        return true;
    }else{
        return false;
    }
})
console.log(evenarray);

//reduce
let s=[10,20,30,40];
let ans=s.reduce((acc,curr)=>{
    return acc+curr;
},0);//acc value is 0 in beginning and curr value is 10
console.log(ans);