//cloning an object
let src={
    age:12,
    wt:68,
    ht:180
};
//let dest=src; if we write this then object remains the same but 2 reference variable got created
let dest={...src};//in this way, object got cloned

//2nd way of cloning
let desti= Object.assign({},src);

