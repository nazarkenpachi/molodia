const iconGrid = document.querySelector('.icon-grid');
const gridColumns = 13;
const gridRows = 6;
const gridSize = gridColumns * gridRows;


for(let i = 0; i< gridSize; i++){
   const icon = document.createElement('i');
   icon.className = 'bx bxs-bulb';
   iconGrid.appendChild(icon); 
}

const sr = ScrollReveal ({
   distance: '30px',
   duration: 2500,
   delay: 400,
   reset: false
})

const foregroundImg = document.querySelector('.foreground-img');
document.querySelector('.slider').addEventListener('input', (e) => {
  foregroundImg.style.setProperty('width', `${e.target.value}%`);
})

var lastScrollTop = 0;
var header = document.querySelector('header');
window.addEventListener("scroll", function(){
   var scrollTop = window.pageYOffset || document
      .documentElement.scrollTop;
   if (scrollTop > lastScrollTop){
      header.style.top="-80px"
   } else {
      header.style.top="0";
   }
   lastScrollTop = scrollTop;
   header.classList.toggle("sticky", window.scrollY > 0);
   menu.classList.remove('bx-x');
   navbar.classList.remove('active');
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   navbar.classList.toggle('active');
}

function createModalHandlers(triggerId, modalId, closeId) {
   const trigger = document.querySelector(triggerId);
   const modal = document.querySelector(modalId);
   const close = document.querySelector(closeId);
   const body = document.body;

   function openModal() {
       modal.style.display = 'block';
       modal.classList.add('enable-blur');
       body.classList.add('no-scroll');
   }

   function closeModal() {
       modal.style.display = 'none';
       modal.classList.remove('enable-blur');
       body.classList.remove('no-scroll');
   }

   trigger.addEventListener('click', openModal);
   close.addEventListener('click', closeModal);
   modal.addEventListener('click', (e) => {
       if (e.target === modal) {
           closeModal();
       }
   });
}

createModalHandlers('#show-info-about', '.info-wrapper', '#close_about-record-icon');
createModalHandlers('#show-info-team', '.info-wrapper-team', '#close_record-team-icon');

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.contact-icons',{delay:200, origin:'top'})
sr.reveal('.about-text',{delay:200, origin:'left'})
sr.reveal('.img-about',{delay:200, origin:'right'})
