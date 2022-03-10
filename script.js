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

// ADD SPEAKERS DYNAMICALLY TO PAGE
// Speaker details
const speakers = [
  {
    speakerName: 'Amanda Wheeler',
    speakerTitle: 'Executive Director, Trondheim Science Museum',
    speakerProfile: 'Amanda is the Executive Director of the Trondheim Science Museum. She is this year’s host of The International Biodiversity Conservation Summit.',
    speakerImg: './images/speaker-1.png',
  },
  {
    speakerName: 'Oliver Quist',
    speakerTitle: 'Professor of Conservation Science, University of Cambridge',
    speakerProfile: 'Oliver is the head of the Centre for Biodiversity Dynamics (CBD). His current work focuses on the use of applied population dynamics for conservation and management.',
    speakerImg: './images/speaker-2.png',
  },
  {
    speakerName: 'Martha Roberts',
    speakerTitle: 'Professor of Marine Sciences, Western University College',
    speakerProfile: 'Martha is a biological oceanographer with strong interests in plankton ecology. Her current work has to do with how climate change affects marine food webs.',
    speakerImg: './images/speaker-3.png',
  },
  {
    speakerName: 'Donald Ressler',
    speakerTitle: 'Executive Director, International Biodiversity Conservation Group',
    speakerProfile: 'Donald is a fellow of the American Museum of Natural History. He is the co-host of The International Biodiversity Conservation Summit.',
    speakerImg: './images/speaker-4.png',
  },
  {
    speakerName: 'Samantha Smith',
    speakerTitle: 'Associate Professor of Ornithology, University of Twente',
    speakerProfile: 'Samantha is the head of the lead researcher at the Centre for Ornithological Studies (COS). Her work focuses on the use of population dynamics for conservation.',
    speakerImg: './images/speaker-5.png',
  },
  {
    speakerName: 'Ryan Merkley',
    speakerTitle: 'Professor of Anthropology, University of Oslo',
    speakerProfile: 'Ryan is a Anthropologist with interests in how social relations affect wildlife conservation and the utilization of natural resources.',
    speakerImg: './images/speaker-6.png',
  },
];

function speakerCard(speaker) {
  return `
        <article class="speaker-desc">
            <div>
                <img class="speaker-img" src="${speaker.speakerImg}" alt="${speaker.speakerName}">
            </div>
            <div class="speaker-profile">
                <h3 class="speaker-name">${speaker.speakerName}</h3>
                <h4 class="speaker-position">${speaker.speakerTitle}</h4>
                <p class="speaker-text">${speaker.speakerProfile}</p>
            </div>
        </article>
    `;
}

const speakersSection = document.querySelector('.speakers-container');

speakersSection.innerHTML = `
    ${speakers.map(speakerCard).join('')}
`;