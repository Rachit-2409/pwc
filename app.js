/*Navigation*/ 
window.onscroll = function(){
    stickynav()
    console.log(window.pageYOffset)
}

let nav =  document.querySelector('header');
let nav_position  =  100 ;

function stickynav(){
    if(window.pageYOffset >= nav_position){
        nav.classList.add("sticky")
    }
    else{
        nav.classList.remove("sticky")
    }
}