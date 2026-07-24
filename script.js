function copyCA(){
    const text = document.getElementById('ca-text').innerText;
    navigator.clipboard.writeText(text).catch(()=>{});
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(()=> toast.classList.remove('show'), 1800);
  }

  // Animate the Aura Meter from 0% to 100% once it scrolls into view
  const auraMeter = document.querySelector('.aura-meter');
  const auraPercent = document.getElementById('aura-percent');
  if(auraMeter && auraPercent){
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          auraMeter.classList.add('in-view');
          const duration = 1800, delay = 300, start = performance.now();
          function tick(now){
            const elapsed = now - start - delay;
            const progress = Math.min(Math.max(elapsed / duration, 0), 1);
            auraPercent.textContent = Math.round(progress * 100) + '%';
            if(progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });
    observer.observe(auraMeter);
  }
