document.querySelectorAll('.btn').forEach(button => {
   button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
   });
   button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
   });
});

window.addEventListener('scroll', () => {
   const header = document.querySelector('header');
   if (window.scrollY > 50) {
      header.classList.add('scrolled');
   } else {
      header.classList.remove('scrolled');
   }
});