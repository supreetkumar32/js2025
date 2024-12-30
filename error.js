
//try-catch
try{
    console.log(x);
}catch(error){
    console.log("error is",error);
}

//finally: it will run definetily whether error comes or not
try{
    console.log(x);
}catch(error){
    console.log("error is",error);
}finally{
    console.log("error got catched")
}

//throw: used to make the custom error
try{
    console.log(x);
}catch(error){
    throw new Error("first declre the x");
}