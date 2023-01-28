let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains_behind=document.getElementById('mountains_behind');
let text=document.getElementById('text');
let btn=document.getElementsByClassName('btn');
let mounatins_front=document.getElementById('mountains_front');
let header  = document.querySelector('header');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left = value*0.25 + 'px';
    moon.style.top = value*1.05 + 'px';
    mountains_behind.style.top = value*0.5 + 'px';
    mounatins_front.style.top= value*0 + 'px';
    text.style.marginRight = value*4 + 'px';
    text.style.marginTop = value*1.5 + 'px';
    btn.style.marginTop = value*1.5 + 'px';
    header.style.top = value*0.5 + 'px';
    
})

let subMenu=document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

let  dropMenu = document.getElementById("dropdown");

function toggleDropMenu(){
    dropMenu.classList.toggle("open-menu");
}