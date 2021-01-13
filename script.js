const btnNav = document.querySelector(".navBtn");
const header = document.querySelector("header");
const headerContent = document.querySelector(".headerContent");
const mobileNav = document.querySelector(".mobile-nav")
btnNav.addEventListener('click', () => {
    btnNav.classList.toggle('open');
    header.classList.toggle("openNavBar");
    headerContent.classList.toggle("removeContent");
    mobileNav.classList.toggle("showList")
    
})