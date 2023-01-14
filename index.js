import { projectData } from './helper.js';

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
    featuredImageDesk: 'images/To-do_list_desktop.png',
    MobImageClass: 'nodisplay-desktop',
    projectName: 'To-do List',
    description: 'To-Do list a web app for tracking personal progress through the day. Users can input a list of tasks and mark them as completed once they are done. Built with JavaScript and Webpack',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
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
      ${recent.technologies.map((tech) => `<li>${tech}</li>`).join('')}
    </ul>
    <a href="#portfolio" class="btn skill-list-btn popup1-btn">See Project</a>
  </div>
  </div>`;
  portfolioSection.appendChild(portfolio);
});

projectData.forEach((project, index) => {
  const projects = document.createElement('div');
  projects.classList.add('project');
  const projectsContainer = document.querySelector('.grid-container')
  projects.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <ul class="project-tech">
      <em>built with => </em>
      ${project.tech.map((tech) => `<li>${tech}</li>`).join('')}
    </ul>
    <img class="project-image nodisplay-desktop" src=${project.image} alt=${project.title}/>
    <img class="project-image hidden-mobile" src=${project.imageDesktop} alt=${project.title}/>
    <p>${project.description}</p>
    <button id=${project.id} class="btn skill-list-btn project-popup">See Project</button>
  `;
  projects.classList.add(`card${index + 1}`)
  projectsContainer.appendChild(projects)
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

// const deezerModal = [
//     {
//     projectName: 'Deezer Music App',
//     featuredImageDesk: '<img class="hidden-mobile modal-desktop" src="images/DeezerApp-detail.jpeg" alt="">',
//     closeBtn: 'images/modal-close.png',
//     featureDescriptionMob: 'Deezer Mobile Music App" is an entertainment app that sort through musical chart to bring all time music hits around the world to your doorstep and the fun part is that it comes with preview to the music if for instance the user cannot decide. It is powered by Deezer',
//     featureDescriptionDesk: 'Deezer Mobile Music App" is an entertainment app that sort through musical chart to bring all time music hits around the world to your doorstep and the fun part is that it comes with preview to the music if for instance the user cannot decide. It is powered by Deezer',
//     technologies: ['html', 'css', 'React', 'Redux', 'Git & Github'],
//     liveLink: 'https://cheerful-crostata-ea300b.netlify.app/',
//     sourceLink: 'https://github.com/wale-prog/deezer-music-app',
//   },
// ]

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
  )).join('')}
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

// deezerModal.forEach((modal) => {
//   const modalGen = document.getElementById('deezer');
//   const modalBody = document.createElement('div');
//   modalBody.classList.add('modal-body');
//   modalBody.innerHTML = `
//   <div class="modal-header">
//     <h1 class="nodisplay-desktop">${modal.projectName}</h1>
//     <h1 class="hidden-mobile">Track your daily milestones and achievments</h1>
//     <img class="close1" src="${modal.closeBtn}" alt="close modal button">
//   </div>
//   <ul class="skill-list">
//   ${modal.technologies.map((tech) => 
//   `<li>${tech}</li>`
//   )}
//   </ul>
//   <div class="modal-flex">
//       ${modal.featuredImageDesk}
//     <div>
//         <p class="nodisplay-desktop modal-para-text">${modal.featureDescriptionMob}</P>
//         <p class="hidden-mobile modal-para-text">${modal.featureDescriptionDesk}</p>
    
//         <div class="modal-btn-container">
//           <ul class="modal-buttons">
//             <li class="first-btn"><a class="live-btn" href="${modal.liveLink}" target="_blank">See Live <img src="images/modal-live.png" alt="Live project page"></a></li>
//             <li class="second-btn"><a class="source-btn" href="${modal.sourceLink}" target="_blank">See Source <img src="images/modal-git.png" alt="Link to source code"></a></li>
//           </ul>
//         </div>
//     </div>
//   </div>
//   `;
//   modalGen.appendChild(modalBody);
// });

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

const btnClicked = document.querySelectorAll('.btn');
const modalDiv = document.querySelector('.project-modal')
for (let i = 0; i < btnClicked.length; i += 1) {
  btnClicked[i].addEventListener('click', (event) => {
   const projectId = +event.target.id;
   if (projectId) {
    const project = projectData.find((project) => project.id === projectId)
    const projects = document.createElement('div');
    projects.classList.add('modal-project-body');
    blur.classList.add('active');
    projects.innerHTML = `
    <div class="modal-header">
      <h3 class="project-title">${project.title}</h3>
      <img class="close-modal" src="images/modal-close.png" alt="close modal button">
    </div>
    <ul class="project-tech">
      <em>built with &#8658;</em>
      ${project.tech.map((tech) => `<li>${tech}</li>`).join('')}
    </ul>
    <div class="modal-img">
      <div>
        <img class="project-image-modal nodisplay-desktop" src=${project.image} alt=${project.title}/>
        <img class="project-image-modal hidden-mobile" src=${project.imageDesktop} alt=${project.title}/>
      </div>
      <p>${project.description}</p>
    </div>
    <div class="icon-img">
      <a href=${project.liveLink} target=__blank class="btn skill-list-btn">See Live<img src=${project.liveImage} alt="Live Icon" /> </a>
      <a href=${project.sourceLink} class="btn skill-list-btn">See Source <img src=${project.sourceImage} alt="Live Icon" /> </a>
    </div>
    `;
    modalDiv.appendChild(projects)
    document.querySelectorAll('.project-popup').forEach((project) => {
      project.addEventListener('click', () => {
        document.querySelector('.modal-project-body').classList.add('active');
      })
    })
    document.querySelector('.close-modal').addEventListener('click', () => {
      blur.classList.remove('active');
      const projectModal = document.querySelector('.modal-project-body');
      const projectModalParent = projectModal.parentNode;
      projectModalParent.removeChild(projectModal);
    })
   }
  })
};


