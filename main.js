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
   distance: '60px',
   duration: 2500,
   delay: 400,
   reset: true
})

// const backgroundColors = [
//    'radial-gradient(circle, #ffebaa, #ffe28a, #ffd868, #ffce43, #ffc300)', 
//    '#fff',
//    'linear-gradient(to left top, #ffffff, #cacaca, #979797, #676767, #3b3b3b)'
//    ];
// let currentColorIndex = 0;

// function updateBackgroundColor() {
//    const scrollPosition = window.scrollY;
//    const windowHeight = window.innerHeight;
//    const bodyHeight = document.body.offsetHeight;
   
//    const scrollPercentage = scrollPosition / (bodyHeight - windowHeight);
//    const colorIndex = Math.floor(scrollPercentage * backgroundColors.length);

//    if (backgroundColors[colorIndex] === '#fff'){
//       document.body.style.backgroundColor = backgroundColors[colorIndex];
//    }
//    else {
//       document.body.style.background = backgroundColors[colorIndex];
//    } 
// }

// window.addEventListener('scroll', updateBackgroundColor);

// updateBackgroundColor();

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
})


sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.contact-icons',{delay:200, origin:'top'})
sr.reveal('.about-text',{delay:200, origin:'left'})
sr.reveal('.img-about',{delay:200, origin:'right'})
sr.reveal('.container',{delay:200, origin:'top'})