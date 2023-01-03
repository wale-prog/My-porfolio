const ham = document.querySelector('.ham');
const navMenu = document.querySelector('.nav-menu');
const portfolioSection = document.getElementById('portfolio');

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
    featuredImageMob: 'images/To-do_list_mobile.png',
    MobImageClass: 'nodisplay-desktop',
    featuredImageDesk: 'images/To-do_list_desktop.png',
    projectName: 'To-do List',
    description: 'To-Do list a web app for tracking personal progress through the day. Users can input a list of tasks and mark them as completed once they are done. Built with JavaScript and Webpack',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
  },
];

const projectPortfolio = [
  {
    mobileHeading: 'Profesional Art Printing Data',
    desktopHeadingHealth: 'Data Dashboard Healthcare',
    desktopHeadingWebsite: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard.',
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
];

const portfolio = document.createElement('section');
portfolio.id = 'portfolio';

projectRecent.forEach((recent) => {
  portfolio.innerHTML = `<div class= "${recent.projectSecClass}">
  <h1 class="${recent.projectNameClass}">${recent.projectHeading}</h1> 
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
    <a href="#portfolio" class="btn skill-list-btn popup1-btn">See Project</a>
  </div>
  </div>`;
  portfolioSection.appendChild(portfolio);
});

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
      <a href="#" class="btn_2 ${btnClass} popup1-btn">See Project</a>
      </div>
      `;
  }
  for (let i = 1; i <= 6; i += 1) {
    if (i === 1) {
      const layout = document.createElement('div');
      const firstCard = document.querySelector(`.card${i}`);
      layout.innerHTML = cardInstancefunc('nonvisible', 'deezer', '', '');
      firstCard.appendChild(layout);
    } else if (i === 2 || i === 5) {
      const layout = document.createElement('div');
      const secondCard = document.querySelector(`.card${i}`);
      layout.innerHTML = cardInstancefunc('', 'nodisplay-desktop', '<h2 class="hidden-mobile">Data Dashboard Healthcare</h2>', 'nodisplay-desktop');
      secondCard.appendChild(layout);
    } else if (i === 3 || i === 6) {
      const layout = document.createElement('div');
      const thirdCard = document.querySelector(`.card${i}`);
      layout.innerHTML = cardInstancefunc('', 'nodisplay-desktop', '<h2 class="hidden-mobile">Website Portfolio</h2>', 'nodisplay-desktop');
      thirdCard.appendChild(layout);
    } else {
      const layout = document.createElement('div');
      const fourthCard = document.querySelector(`.card${i}`);
      layout.innerHTML = cardInstancefunc('', 'nodisplay-desktop', '', '');
      fourthCard.appendChild(layout);
    }
  }
});

const modalContent = [
  {
    projectName: 'To-do List',
    featuredImageDesk: '<img class="hidden-mobile modal-desktop" src="images/To-do_list_desktop.png" alt="portfolio snapshot">',
    featureImageMobile: '<img class="nodisplay-desktop modal-mobile" src="images/To-do_list_mobile.png" alt="portfolio snapshot">',
    closeBtn: 'images/modal-close.png',
    featureDescriptionMob: 'To-Do list a web app for tracking personal progress through the day. Users can input a list of tasks and mark them as completed once they are done. Built with JavaScript and Webpack',
    featureDescriptionDesk: 'To-Do list a web app for tracking personal progress through the day. Users can input a list of tasks and mark them as completed once they are done. Built with JavaScript and Webpack',
    technologies: ['html', 'css', 'JavaScript', 'Webpack'],
    liveLink: 'https://wale-prog.github.io/To-do-List-Project/',
    sourceLink: 'https://github.com/wale-prog/My-porfolio',
  },

];
const deezerModal = [
    {
    projectName: 'Deezer Music App',
    featuredImageDesk: '<img class="hidden-mobile modal-desktop" src="images/DeezerApp-detail.jpeg" alt="">',
    closeBtn: 'images/modal-close.png',
    featureDescriptionMob: 'Deezer Mobile Music App" is an entertainment app that sort through musical chart to bring all time music hits around the world to your doorstep and the fun part is that it comes with preview to the music if for instance the user cannot decide. It is powered by Deezer',
    featureDescriptionDesk: 'Deezer Mobile Music App" is an entertainment app that sort through musical chart to bring all time music hits around the world to your doorstep and the fun part is that it comes with preview to the music if for instance the user cannot decide. It is powered by Deezer',
    technologies: ['html', 'css', 'React', 'Redux', 'Git & Github'],
    liveLink: 'https://cheerful-crostata-ea300b.netlify.app/',
    sourceLink: 'https://github.com/wale-prog/deezer-music-app',
  },
]

modalContent.forEach((modal) => {
  const modalGen = document.getElementById('recent-work-modal');
  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalBody.innerHTML = `
  <div class="modal-header">
    <h1 class="nodisplay-desktop">${modal.projectName}</h1>
    <h1 class="hidden-mobile">Track your daily milestones and achievments</h1>
    <img class="close" src="${modal.closeBtn}" alt="close modal button">
  </div>
  <ul class="skill-list">
  ${modal.technologies.map((tech) => (
    `<li>${tech}</li>`
  ))}
  </ul>
  <div class="modal-flex">
      ${modal.featureImageMobile}
      ${modal.featuredImageDesk}
    <div>
        <p class="nodisplay-desktop modal-para-text">${modal.featureDescriptionMob}</P>
        <p class="hidden-mobile modal-para-text">${modal.featureDescriptionDesk}</p>
    
        <div class="modal-btn-container">
          <ul class="modal-buttons">
            <li class="first-btn"><a class="live-btn" href="${modal.liveLink}" target="_blank">See Live <img src="images/modal-live.png" alt="Live project page"></a></li>
            <li class="second-btn"><a class="source-btn" href="${modal.sourceLink}" target="_blank">See Source <img src="images/modal-git.png" alt="Link to source code"></a></li>
          </ul>
        </div>
    </div>
  </div>
  `;
  modalGen.appendChild(modalBody);
});

deezerModal.forEach((modal) => {
  const modalGen = document.getElementById('deezer');
  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalBody.innerHTML = `
  <div class="modal-header">
    <h1 class="nodisplay-desktop">${modal.projectName}</h1>
    <h1 class="hidden-mobile">Track your daily milestones and achievments</h1>
    <img class="close1" src="${modal.closeBtn}" alt="close modal button">
  </div>
  <ul class="skill-list">
  ${modal.technologies.map((tech) => 
  `<li>${tech}</li>`
  )}
  </ul>
  <div class="modal-flex">
      ${modal.featuredImageDesk}
    <div>
        <p class="nodisplay-desktop modal-para-text">${modal.featureDescriptionMob}</P>
        <p class="hidden-mobile modal-para-text">${modal.featureDescriptionDesk}</p>
    
        <div class="modal-btn-container">
          <ul class="modal-buttons">
            <li class="first-btn"><a class="live-btn" href="${modal.liveLink}" target="_blank">See Live <img src="images/modal-live.png" alt="Live project page"></a></li>
            <li class="second-btn"><a class="source-btn" href="${modal.sourceLink}" target="_blank">See Source <img src="images/modal-git.png" alt="Link to source code"></a></li>
          </ul>
        </div>
    </div>
  </div>
  `;
  modalGen.appendChild(modalBody);
});

/* Pop up implementation starts */
const blur = document.getElementById('blur');
const popupContent = document.getElementById('recent-work-modal');
const close = document.querySelector('.close');
const popup1 = document.querySelectorAll('.popup1-btn');

const modalOpen = () => {
  blur.classList.add('active');
  popupContent.classList.add('active');
};

const closeModal = () => {
  blur.classList.remove('active');
  popupContent.classList.remove('active');
};
for (let i = 0; i < popup1.length; i += 1) {
  if (popup1[i].classList.contains('btn'))
  popup1[i].addEventListener('click', modalOpen);
}
close.addEventListener('click', closeModal);

const deezerProject = document.querySelector('.card1')
const deezerPopup = document.getElementById('deezer')
const close1 = document.querySelector('.close1');

const closeDeezerModal = () => {
  blur.classList.remove('active');
  deezerPopup.classList.remove('active');
}

const openDeezerModal = () => {
  blur.classList.add('active');
  deezerPopup.classList.add('active');
}
deezerProject.addEventListener('click', openDeezerModal);
close1.addEventListener('click', closeDeezerModal);
