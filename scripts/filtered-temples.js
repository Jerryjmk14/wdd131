// selecting elements
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const navTitle = document.querySelector('.top-nav');
const mainGrid = document.querySelector('.main-grid');
const homeLink = document.querySelector('#home');
const oldLink = document.querySelector('#old');
const newLink = document.querySelector('#new');
const largeLink = document.querySelector('#large');
const smallLink = document.querySelector('#small');

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

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Accra Ghana Temple",
		location: "Accra, Ghana",
		dedicated: "2004, January, 11",
		area: 17500,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13753.jpg"
	},
	{
		templeName: "Durban South Africa Temple",
		location: "Umhlanga city, South Africa",
		dedicated: "2020, February, 16",
		area: 19860,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-49122.jpg"
	},
	{
		templeName: "Seoul Korea Temple",
		location: "Seoul, Korea",
		dedicated: "1985, December, 14-15",
		area: 28057,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22311-thumb.jpg"
	}
  ];

  function createTempleCard(filteredTemples){
	mainGrid.innerHTML = "";
	filteredTemples.forEach(temple => {
		//creating elements
		let card = document.createElement('section');
		let name = document.createElement('h3');
		let location = document.createElement('p');
		let dedication = document.createElement('p');
		let size = document.createElement('p');
		let img = document.createElement('img');

		//adding content to elements
		name.textContent = temple.templeName;
		location.textContent = `LOCATION: ${temple.location}`;
		dedication.textContent = `DEDICATED: ${temple.dedicated}`;
		size.innerHTML = `SIZE: <span>${temple.area}</span> sqr ft`;
		img.setAttribute('src', temple.imageUrl);
		img.setAttribute('alt', temple.templeName);
		img.setAttribute('loading', "lazy");
		img.setAttribute('width', "400");
		img.setAttribute('heigth', "250");

		//adding elements to card
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(size);
		card.appendChild(img);
		
		//adding card to main grid
		mainGrid.appendChild(card);
		
	});
  }

  createTempleCard(temples);

//display old temples
  oldLink.addEventListener("click",()=>{
	let oldTemples = temples.filter(temple => {
		const num = parseInt(temple.dedicated, 10); // Convert the string to a number
		return num < 1900})
	createTempleCard(oldTemples)
  })
//display new temples
  newLink.addEventListener("click",()=>{
	let newTemples = temples.filter(temple => {
		const num = parseInt(temple.dedicated, 10); // Convert the string to a number
		return num > 2000})
	createTempleCard(newTemples);
  })
//display large temples
  largeLink.addEventListener("click", ()=>{
	let largeTemples = temples.filter(temple => temple.area > 90000);
	createTempleCard(largeTemples)
})
//display small temples
  smallLink.addEventListener("click",()=>{
	let smallTemples = temples.filter(temple => temple.area < 10000);
	createTempleCard(smallTemples);
  })
//display home temples
  homeLink.addEventListener("click",()=>{
	let home = temples.filter(temple => temple.area > 1);
	createTempleCard(home);
  })
  
 
  