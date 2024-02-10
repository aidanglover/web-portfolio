// Aidan Glover : web-portfolio
// Script Name : aboutScript.js
// JavaScript





// #region Scroll Functions
document.addEventListener('scroll', function () {
    // const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    // const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

    // const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    // const progress = document.getElementById('progress');
    // progress.style.width = scrollPercent + '%';

const scrollThreshold = 0; 
const scrollPosition = window.scrollY;
const amountToMove = Math.max(0, (scrollPosition - scrollThreshold) / 1.2); // Calculate the amount to move the image based on the scroll position
secondImageContainer.style.transform = `translateY(${amountToMove}px)`; // Move the second image down
});

//#endregion

// #region Function to create an image container
function createImageContainer(src, alt, title, description) {
    const container = document.createElement('div');
    container.classList.add('image-container');

    const imageOverlay = document.createElement('div');
    imageOverlay.classList.add('image-overlay');

    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;

    const imageDetails = document.createElement('div');
    imageDetails.classList.add('image-details');
    imageDetails.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
    `;

    imageOverlay.appendChild(image);
    imageOverlay.appendChild(imageDetails);
    container.appendChild(imageOverlay);

    return container;
}
//#endregion

// Create image containers
const container = document.querySelector('.container');
container.appendChild(createImageContainer('images/abstract.jpg', 'Image 1', 'Abstract', 'Super cool project with some really important stuff. Great to be a part of this.'));
container.appendChild(createImageContainer('images/orange.png', 'Image 2', 'Orange', 'Check out this orange image. Pretty neat right? I thought so too.'));
container.appendChild(createImageContainer('images/eye.jpg', 'Image 3', 'Eye', 'The cryptic eye triangle. No idea what this thing means or represents.'));
container.appendChild(createImageContainer('images/snowboard.png', 'Image 4', 'Snowboard', 'The blue and snowy background. Look at how nice it all is and this text.'));
container.appendChild(createImageContainer('images/flower.jpg', 'Image 5', 'Flower', 'In a delicate glass vase sits a single crimson rose, its velvety petals unfurling like secrets whispered in the night. Bathed in the gentle glow of sunlight streaming through a nearby window, its slender stem arches gracefully, adorned with emerald leaves that dance with every breath of air.'));
const firstImageContainer = document.querySelectorAll('.image-container')[0];
const secondImageContainer = document.querySelectorAll('.image-container')[1];
const thirdImageContainer = document.querySelectorAll('.image-container')[2];
const fourthImageContainer = document.querySelectorAll('.image-container')[3];
const fifthhImageContainer = document.querySelectorAll('.image-container')[4];


// #region Image Properties
// Ensure both containers are positioned relatively
firstImageContainer.style.position = 'absolute';
secondImageContainer.style.position = 'absolute';
thirdImageContainer.style.position = 'absolute';
fourthImageContainer.style.position = 'absolute';
fifthhImageContainer.style.position = 'absolute';
// Positioning
firstImageContainer.style.top = '20%'; 
secondImageContainer.style.top = '25%'; 
thirdImageContainer.style.top = '60%';
fourthImageContainer.style.top = '100%';
fifthhImageContainer.style.top = '150%';

secondImageContainer.style.left = '38%'; // Adjust as necessary
thirdImageContainer.style.left = '55%';  // Adjust as necessary
fourthImageContainer.style.left = '15%'; // Adjust as necessary
fifthhImageContainer.style.left = '50%'; // Adjust as necessary
// Scale
thirdImageContainer.style.transform = 'scale(0.7)';
fourthImageContainer.style.transform = 'scale(0.9)';
secondImageContainer.style.transform = 'scale(0.9)';
fifthhImageContainer.style.transform = 'scale(0.8)';
// Initial Z
firstImageContainer.style.zIndex = '2';
secondImageContainer.style.zIndex = '1';
thirdImageContainer.style.zIndex = '1';
fourthImageContainer.style.zIndex = '1';
fifthhImageContainer.style.zIndex = '1';
// Z Transition
firstImageContainer.style.transition = 'z-index 0.4s ease';
secondImageContainer.style.transition = 'z-index 0.4s ease';
thirdImageContainer.style.transition = 'z-index 0.4s ease';
fourthImageContainer.style.transition = 'z-index 0.4s ease';
fifthhImageContainer.style.transition = 'z-index 0.4s ease';
// z value controller for hover
const initialZIndexFirst = getComputedStyle(firstImageContainer).zIndex;
const initialZIndexSecond = getComputedStyle(secondImageContainer).zIndex;
const initialZIndexThird = getComputedStyle(thirdImageContainer).zIndex;
const initialZIndexFourth = getComputedStyle(fourthImageContainer).zIndex;
const initialZIndexFifth = getComputedStyle(fifthhImageContainer).zIndex;
//#region Image Z value movers
firstImageContainer.addEventListener('mouseenter', function() {
    firstImageContainer.style.zIndex = '2';
});
firstImageContainer.addEventListener('mouseleave', function() {
    firstImageContainer.style.zIndex = initialZIndexFirst;
});
secondImageContainer.addEventListener('mouseenter', function() {
    secondImageContainer.style.zIndex = '2';
});
secondImageContainer.addEventListener('mouseleave', function() {
    secondImageContainer.style.zIndex = initialZIndexSecond;
});
thirdImageContainer.addEventListener('mouseenter', function() {
    thirdImageContainer.style.zIndex = '2';
});
thirdImageContainer.addEventListener('mouseleave', function() {
    thirdImageContainer.style.zIndex = initialZIndexThird;
});
fourthImageContainer.addEventListener('mouseenter', function() {
    fourthImageContainer.style.zIndex = '2';
});
fourthImageContainer.addEventListener('mouseleave', function() {
    fourthImageContainer.style.zIndex = initialZIndexFourth;
});
fifthhImageContainer.addEventListener('mouseenter', function() {
    fifthhImageContainer.style.zIndex = '2';
})
fifthhImageContainer.addEventListener('mouseleave', function() {
    fifthhImageContainer.style.zIndex = initialZIndexFifth;
})
//#endregion

//#endregion


