const openMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.navbar');
const menuItems = document.querySelectorAll('.menu-item');

openMenu.addEventListener('click', () => {
    openMenu.classList.toggle('hide');
    mobileMenu.classList.toggle('show');
});

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        openMenu.classList.toggle('hide');
    });
});