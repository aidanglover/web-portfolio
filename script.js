// JavaScript source code

document.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const progress = document.getElementById('progress');
    progress.style.width = scrollPercent + '%';
});


// image fade with hover
// Function to create an image container
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

// Usage example
const container = document.querySelector('.container');

// Create and append multiple image containers
container.appendChild(createImageContainer('images/abstract.jpg', 'Image 1', 'Abstract', 'Super cool project with some really important stuff. Great to be a part of this.'));
container.appendChild(createImageContainer('images/orange.png', 'Image 2', 'Orange', 'Check out this orange image. Pretty neat right? I thought so too.'));
// Add more images as needed

const firstImageContainer = document.querySelectorAll('.image-container')[0];
const secondImageContainer = document.querySelectorAll('.image-container')[1];

// Ensure both containers are positioned relatively
firstImageContainer.style.position = 'relative';
secondImageContainer.style.position = 'relative';

firstImageContainer.style.top = '200px'; // Adjust the value as needed
secondImageContainer.style.top = '300px'; // Adjust the value as needed

// Adjust the left position of the second image container
secondImageContainer.style.left = '-300px'; // Adjust the value as needed

// Optionally, adjust the z-index to ensure proper layering
firstImageContainer.style.zIndex = '2';
secondImageContainer.style.zIndex = '1';




// z value controller for hover

const initialZIndexFirst = getComputedStyle(firstImageContainer).zIndex;
const initialZIndexSecond = getComputedStyle(secondImageContainer).zIndex;

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