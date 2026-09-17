    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) toTop.classList.add('show');
      else toTop.classList.remove('show');
    });

    const weddingDate = new Date('2026-09-18T19:00:00');
    function updateCountdown() {
      const now = new Date();
      let diff = weddingDate - now;
      if (diff < 0) diff = 0;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('mins').textContent = String(mins).padStart(2, '0');
      document.getElementById('secs').textContent = String(secs).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
    // ==============================================

// function createHeart() { 
//   const heart = document.createElement('div');
//   heart.classList.add('floating-heart');
//   heart.innerHTML = '❤'; 

//   const randomLeft = Math.random() * 90 + 5;
//   heart.style.left = `${randomLeft}vw`;

//   const randomSize = Math.floor(Math.random() * 16) + 16; 
//   heart.style.fontSize = `${randomSize}px`;

//   const randomDuration = (Math.random() * 1 + 2).toFixed(1);
//   heart.style.animationDuration = `${randomDuration}s`;

//   document.body.appendChild(heart);

//   setTimeout(() => {
//     heart.remove();
//   }, randomDuration * 1000);
// }

// let isScrolling = false;
// window.addEventListener('scroll', () => {

//   if (!isScrolling) {
//     isScrolling = true;
//     createHeart();
//     setTimeout(() => {
//       isScrolling = false;
//     }, 120); 
//   }
// });