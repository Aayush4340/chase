let circle1 = document.querySelector('.c1');
let circle2 = document.querySelector('.c2');
let img = document.querySelector('.img');

let confirm = document.querySelector('.confirm')
let yes = document.querySelector('#yesBtn')
let no = document.querySelector('#noBtn')

let mode = 1;

document.addEventListener('mousemove', (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    circle1.style.top = (mouseY-33) +'px'
    circle1.style.left = (mouseX-33) +'px'
    if(mode){
        circle2.style.top = (mouseY-33) +'px'
        circle2.style.left = (mouseX-33-78) +'px'
        changemood();
    }
});


function changemood(){
    img.setAttribute('src',"sad.png")
    setTimeout(() => {
        img.setAttribute('src',"happy.png")        
    }, 750);
}



// <----CONFIRMATION BOX--->
setTimeout(() => {
    confirm.style.display = 'block';
}, 15000);
yes.addEventListener('click',yesButtonClicked);
no.addEventListener('click',noButtonClicked);

function yesButtonClicked(){
    mode = 0;
    confirm.style.display = 'none';
    circle2.style.left ='-80px'

    setTimeout(() => {
        mode = 1;
        img.setAttribute('src',"sad.png")
        circle2.style.top = '50%'
        circle2.style.left = '50%'
    }, 15000);
}

function noButtonClicked(){
    confirm.style.display = 'none';
}








