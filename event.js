//event listener
//Syntaax:
//(event_target).addEventListener(<"event_type">,<function->action>);

//ex of event listener

function changeText(){
    let fpara=document.getElementById('fpara');
    fpara.textContent="Hello";
}
let fpara=document.getElementById('fpara');
fpara.addEventListener('click',changeText);
//removing the event listener
fpara.removeEventListener('click',changeText);

///////////////////Event Object
//koi bhi event trigger hota hai to uske listener function ko wo event milta hi
//ex:
function changeText(event){
    console.log(event);//here we get which event triggers the event listener
    let fpara=document.getElementById('fpara');
    fpara.textContent="Hello";
}

/////////////////////default action
let anchorElement=document.getElementById('fanchor');
anchorElement.addEventListener('click',function(event){
    event.preventDefault();//it wil prevent the default the element .In this case, when we click
    //  on the anchor element it will not take us to a particular link
})

//removing too many listeners
let paras=document.querySelectorAll('p');
function alertPara(event){
    if(event.target.nodeName==='span'){
    alert("you have clicked on para: "+event.target.textContent);
    }
}

for(int i=0;i<paras.length;i++){
    paras[i].addEventListener('click',alertPara);//saare paras ko ek hi listener se attaach ar 
    // diye...agar addEventListeer ke andar alertPara ke jagah function likhte to jitne para 
    // haai utne listener k object ban jaata
}