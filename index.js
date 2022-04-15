const ham = document.querySelector('.ham');
const navMenu = document.querySelector('.nav-menu');
const blur = document.getElementById('blur');
const popup1 = document.querySelector('.popup1-btn');
const close = document.querySelector('.close');


const portfolioSection = document.getElementById('portfolio')

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

const projectRecent = [
  {
    projectHeading: 'My Recent Works',
    projectNameClass: 'portfolio-heading',
    projectSecClass: 'portfolio-header',
    featuredImageMob: 'images/placeholder.png',
    MobImageClass: 'nodisplay-desktop',
    featuredImageDesk: 'images/placeholder-desktop.png',
    projectName: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the     industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  }
];

const projectPortfolio = [
  {
    mobileHeading: 'Profesional Art Printing Data',
    desktopHeadingHealth: 'Data Dashboard Healthcare',
    desktopHeadingWebsite: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard.',
    technologies: ['html', 'bootstrap', 'Ruby']
  }
]

const portfolio = document.createElement('section');
portfolio.id = 'portfolio';

projectRecent.forEach((recent) => {
  portfolio.innerHTML = `<div class= "${recent.projectSecClass}">
  <h1 class="${recent.projectNameClass}">${recent.projectHeading}</h1> 
  <div></div>
  </div>
  <div class="flex-port">
    <div class="portfolio-img">
      <img class="nodisplay-desktop" src="${recent.featuredImageMob}" alt="Recent works snapshot1">
      <img class="hidden-mobile" src="${recent.featuredImageDesk}" alt="Recent works snapshot 1">
    </div>
    <div class="flex-port-text">
    <h2>${recent.projectName}</h2>
    <p class="portfolio-text">${recent.description}</p>
    <ul class="skill-list">
      <li>${recent.technologies[0]}</li>
      <li>${recent.technologies[1]}</li>
      <li>${recent.technologies[2]}</li>
      <li>${recent.technologies[3]}</li>
    </ul>
    <a href="#first-page" class="btn skill-list-btn popup1-btn">See Project</a>
  </div>
  </div>`
  portfolioSection.appendChild(portfolio);
})


projectPortfolio.forEach((cards) => {
  function cardInstancefunc(visibility, btnClass, heading, heading1Class) {
    return `
    <div class="${visibility}">
    <h2 class="${heading1Class}">${cards.mobileHeading}</h2>
    ${heading}
      <p>${cards.description}</p>
      <ul class="skill-list printing-list">
        <li>${cards.technologies[0]}</li>
        <li>${cards.technologies[1]}</li>
        <li>${cards.technologies[2]}</li>
      </ul>
      </div>
      <a href="#" class="btn_2 ${btnClass}">See Project</a>
      `
  }
  for (let i = 1; i <= 6; i++) {
    if (i == 1) {
      const layout = document.createElement('div')
      const firstCard = document.querySelector(`.card${i}`)
      layout.innerHTML = cardInstancefunc("nonvisible", "", "", "");
      firstCard.appendChild(layout)

    }
    else if (i == 2 || i == 5) {

      const layout = document.createElement('div')
      const secondCard = document.querySelector(`.card${i}`)
      layout.innerHTML = cardInstancefunc("", "nodisplay-desktop", `<h2 class="hidden-mobile">Data Dashboard Healthcare</h2>`, "nodisplay-desktop")
      secondCard.appendChild(layout)
    }
    else if (i == 3 || i == 6) {
      const layout = document.createElement('div')
      const thirdCard = document.querySelector(`.card${i}`)
      layout.innerHTML = cardInstancefunc("", "nodisplay-desktop", `<h2 class="hidden-mobile">Website Portfolio</h2>`, "nodisplay-desktop");
      thirdCard.appendChild(layout)
    } else {
      const layout = document.createElement('div')
      const fourthCard = document.querySelector(`.card${i}`)
      layout.innerHTML = cardInstancefunc("", "nodisplay-desktop", "", "");
      fourthCard.appendChild(layout)
    }
  }
})


const modalContent = [
  {
    featuredImageDesk: 'images/modal-protfolio.png',
    featureImageMobile: 'images/modal-desktop.png',
    featureDiscriptionMob: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featureDiscriptionDesk: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
    type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
    galley of type and scrambled it 1960s with the releax map lapora verita.`,

  }
]







/* Pop up implementation starts*/
const popupContent = document.querySelector('#recent-work-modal');

console.log(popupContent)


let modalOpen = () => {
  blur.classList.add('active');
  popupContent.classList.add('active');
}

let closeModal = function () {
  blur.classList.remove('active');
  popupContent.classList.remove('active');
}
popup1.addEventListener('click', modalOpen);
close.addEventListener('click', closeModal);
