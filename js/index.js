// Your code goes here

// 1
let logo = document.querySelector('.logo-heading');
logo.addEventListener('click', () => {
    logo.style.fontSize = '100px';
});

// 2
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link){
    link.addEventListener('mouseover', function() {
        link.style.textDecoration = 'underline';
    });
});

// 3
let busImg = document.querySelector('.bus-img');
busImg.addEventListener('dblclick', () => {
    busImg.style.width = '200px';
    busImg.style.height = '50px';
});

// 4
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.style.borderBottom = "thick solid #0000FF";
});

// 5
let welcome = document.querySelector('.welcome');
window.addEventListener('keydown', (e) => {
    if(e.keyCode === 65) {
        welcome.style.border = '1px solid black';
    }
});

// 6
let funImg = document.querySelector('.img-fun');
window.addEventListener('load', () => {
    funImg.style.display = 'none';
});

// 7
let adventureTexts = document.querySelectorAll('.adventure-text');
adventureTexts.forEach(function(text) {
    window.addEventListener('resize', function() {
        text.style.color = 'green';
    });
});

// 8
let destinationImg = document.querySelector('.destination-img');
destinationImg.addEventListener('drag', () => {
    destinationImg.style.height = '500px';
});

// 9

// 10