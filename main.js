const gridSize = 169;
const iconGrid = document.querySelector('.icon-grid')

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

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.contact-icons',{delay:200, origin:'top'})