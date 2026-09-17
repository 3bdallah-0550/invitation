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


