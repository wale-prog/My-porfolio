const ham = document.querySelector('.ham');
const navMenu = document.querySelector(".nav-menu");
const logo = document.querySelector('.logo');


ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    navMenu.classList.toggle('active');
    logo.classList.toggle('hidden')
})

document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener("click", function () {
    ham.classList.remove('active');
    navMenu.classList.remove('active');
    logo.classList.remove('hidden');
}));

navMenu.addEventListener('click', function () {
    ham.classList.remove('active');
    navMenu.classList.remove('active');
    logo.classList.remove('hidden');
})