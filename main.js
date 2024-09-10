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

const container = document.querySelector('.container');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.contact-icons',{delay:200, origin:'top'})
sr.reveal('.about-text',{delay:200, origin:'left'})
sr.reveal('.img-about',{delay:200, origin:'right'})