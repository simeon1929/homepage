var triger = document.querySelector('.triger')
var body = document.querySelector('body')
var header = document.querySelector('header')
var nav = document.querySelector('nav')

triger.addEventListener('click', ()=>{
    triger.classList.toggle('activeMenu')
    body.classList.toggle('activeMenu')
    //header.classList.toggle('activeMenu')
    nav.classList.toggle('activeMenu')
})