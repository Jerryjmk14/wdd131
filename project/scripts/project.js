// selecting elements
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const navTitle = document.querySelector('.top-nav');
const formSelect = document.querySelector("#inquiry-type");


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


const typeOfInquiry = [
    {
      id: "1",
      name: "General Inquiry",
    },
    {
      id: "2",
      name: "Partnership",
     
    },
    {
      id: "3",
      name: "Support",
     
    },
    {
      id: "4",
      name: "Project Consultationr",
      
    },
    {
      id: "5",
      name: "Others",
      
    }
  ];


  //create form select options
  function createFormSelectOption(){
    typeOfInquiry.forEach(type => {
        const option = document.createElement("option");
        option.setAttribute("value", `${type.id}`);
        option.textContent = type.name;
        formSelect.appendChild(option);
    })
  }

  createFormSelectOption();