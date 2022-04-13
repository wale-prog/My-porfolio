const ham = document.querySelector('.ham');
const navMenu = document.querySelector('.nav-menu');
const blur = document.getElementById('blur');
const popup1 = document.querySelector('.popup1-btn');
const close = document.querySelector('.close');
const popupContent = document.querySelector('#recent-work-modal');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach((n) => n.addEventListener('click', () => {
  ham.classList.remove('active');
  navMenu.classList.remove('active');
}));

navMenu.addEventListener('click', () => {
  ham.classList.remove('active');
  navMenu.classList.remove('active');
});
/* Pop up implementation starts*/



let closeModal = function () {
  blur.classList.remove('active');
  popupContent.classList.remove('active');
}

let modal = {
  modalOpen: () => {
    const modalBody = document.createElement('div');
    const modalHeader = document.createElement('div');
    const h1 = document.createElement('h1')


    modalBody.appendChild(modalHeader)
    popupContent.appendChild(modalBody)
    blur.classList.add('active');
    popupContent.classList.add('active');
  }
}

popup1.addEventListener('click', modal.modalOpen)
close.addEventListener('click', closeModal);
