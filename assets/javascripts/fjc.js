(function(){
  function initFjc(){
    const home=document.querySelector('.fjc-home');
    if(!home)return;
    const revealItems=home.querySelectorAll('[data-fjc-reveal]');
    if('IntersectionObserver'in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('fjc-is-visible');observer.unobserve(entry.target);}});},{threshold:.08});
      revealItems.forEach((item)=>observer.observe(item));
    }else revealItems.forEach((item)=>item.classList.add('fjc-is-visible'));
    const track=home.querySelector('[data-fjc-carousel]');
    if(track){const delta=()=>Math.min(track.clientWidth*.85,380);home.querySelector('[data-carousel-prev]')?.addEventListener('click',()=>track.scrollBy({left:-delta(),behavior:'smooth'}));home.querySelector('[data-carousel-next]')?.addEventListener('click',()=>track.scrollBy({left:delta(),behavior:'smooth'}));}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initFjc);else initFjc();
  if(typeof document$!=='undefined')document$.subscribe(initFjc);
})();
