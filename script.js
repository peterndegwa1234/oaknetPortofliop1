//Adding event listeners to the menu and navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
//Maximizing my portfolio image
let imageMaximized = document.querySelector('.photo');
imageMaximized.onclick = () =>{
    imageMaximized.classList.toggle('maximized');
}

//Adding event listeners to the read more button
let card = document.querySelector('.card');
let readMoreBtn = document.querySelector('.button');
let showParagraph = document.querySelector('.hidden');
readMoreBtn.addEventListener('click', function() {
    card.classList.toggle('expanded');
    showParagraph.classList.toggle('hidden');
});
let card1 = document.querySelector('.card1');
let readMoreBtn1 = document.querySelector('.button1');
let showParagraph1 = document.querySelector('.hidden1');
readMoreBtn1.addEventListener('click', function(){
    card1.classList.toggle('expanded');
    showParagraph1.classList.toggle('hidden1');
});
let card2 = document.querySelector('.card2');
let readMoreBtn2 = document.querySelector('.button2');
let showParagraph2 = document.querySelector('.hidden2');
readMoreBtn2.addEventListener('click', function() {
    card2.classList.toggle('expanded');
    showParagraph2.classList.toggle('hidden2');
});

//Alert Message for screen size 

if (window.matchMedia('(max-width: 400px)').matches) {
  window.addEventListener('load', function() {
    alert('This webpage is best viewed on devices with a wider screen.');
  });
}

