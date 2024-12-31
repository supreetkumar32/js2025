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
    event.preventDefault();
})