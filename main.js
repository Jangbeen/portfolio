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

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event) => {
    //event = 클릭이되는것
    const target = event.target;
    const link = target.dataset.link; //data-link 의 값을 가져온다
    if(link == null){
        return;
    }
    scrollIntoView(link);
})

// Handle scrolling when clicking on the contact me button
const homeBtn = document.querySelector('.home__contact');
homeBtn.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    scrollIntoView(link);
})

//Home Section slowilt fade to transparent
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

//Arrow up button to scroll up to the top
const arrowBtn = document.querySelector('.arrow__btn');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2){
        arrowBtn.classList.add('arrow__up')
    }else{
        arrowBtn.classList.remove('arrow__up');
    }
})
arrowBtn.addEventListener('click', () => {
    scrollIntoView('#home');
})

// Projects button clicked
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project'); //모든 프로젝트 요소들을 배열로 가지고옴
workBtnContainer.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }
    projectContainer.classList.add('animation-out');
    //browser api 0.3 sec later run these codes
    setTimeout(() => {
        projects.forEach((p) => {
            if(filter === '*' || filter === p.dataset.type){
                p.classList.remove('invisible')
            }else{
                p.classList.add('invisible')
            }
        })
        projectContainer.classList.remove('animation-out');
    }, 300)
})

//Helper funtion for scrolling into view
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}