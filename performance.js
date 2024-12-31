const t1=performnace.now();
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is para" +i;
    document.body.appendChild(para);
}

const t2=performance.now();
console.log("total time taken " +(t2-t1));

//code 2
const t3=performance.now();
let mydiv=document.createElement('div');
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    paragraph.textContent="This is para " +i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4=performance.now();
console.log("total time taken " +(t4-t3));

//reflow
//->It is the process of calculating the position/dimension of element
//->It is computationally intensive task

//repaint
//process of displaying content/element pixel by pixel
//->It is faster 

/////////////DOCUMENT FRAGMENT (NO REFLOW,NO REPAINT)
let fragment=document.createDocumentFragment();
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is para "+i;
    //no reflow and repaint for the line below
    fragment.appendChild(para);
}
//the below line take 1 reflow and 1 repaint
document.body.appendChild(fragment);