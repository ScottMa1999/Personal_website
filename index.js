const home = document.querySelector('.home')
const AboutMe = document.querySelector('.About-me-page')
const project = document.querySelector('.Project-Page')

const btn_AboutMe = document.getElementById('aboutMe')
const btn_AboutMe_2 = document.getElementById('aboutMe-2')
const btn_BackHome = document.getElementById('backHome')
const btn_BackHome2 = document.getElementById('backHome2')
const btn_project = document.getElementById('project')
const btn_seeMore = document.querySelectorAll('.container3-btn')
const btn_subscribe = document.querySelector('.sub-btn')

btn_AboutMe.addEventListener("click", ()=>{
  home.classList.add('hidden');
  AboutMe.classList.remove('hidden');
})

btn_AboutMe_2.addEventListener("click", ()=>{
  home.classList.add('hidden');
  AboutMe.classList.remove('hidden');
})

btn_BackHome.addEventListener("click",()=>{
  AboutMe.classList.add('hidden');
  home.classList.remove('hidden');
})

btn_BackHome2.addEventListener('click', ()=>{
  project.classList.add('hidden');
  home.classList.remove('hidden');
})

btn_project.addEventListener('click', ()=>{
  home.classList.add('hidden');
  project.classList.remove('hidden');
})

btn_seeMore.forEach(btn => {
  btn.addEventListener('click', ()=>{
    home.classList.add('hidden');
    project.classList.remove('hidden');
  })
})

btn_subscribe.addEventListener('click',()=>{
  open('https://www.linkedin.com/in/scott-ma-35846217b/details/experience/')
})