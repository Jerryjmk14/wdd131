// selecting elements
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const navTitle = document.querySelector('.top-nav');

const year = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastModified");
const date = new Date()

// Adding text content to footer elements dynamically
year.innerHTML = date.getFullYear()
lastmodified.innerHTML =`Last Modified: ${document.lastModified}`;

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	navTitle.classList.toggle('show');
});

