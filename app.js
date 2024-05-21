const mobileMenu = document.querySelector('.mobile-menu');

const show = document.querySelector('.open');
const hide = document.querySelector('.close');

show.addEventListener('click', () => {
    mobileMenu.style.right = '1rem';
})

hide.addEventListener('click', () => {
  mobileMenu.style.right = '-1000px';
});

