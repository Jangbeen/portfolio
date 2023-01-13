'use strict';


//Make Navbar transparent when it is on the top
//As it scrolled down add class ('navbar--scrolled') and change it's background in style.css
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //스크롤이 될떄마다 컬리블록안의 코드가 실행
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--scrolled')
    }else{
        navbar.classList.remove('navbar--scrolled')
    }
})