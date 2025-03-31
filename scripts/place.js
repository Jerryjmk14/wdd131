// selecting elements
const year = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastModified");
const date = new Date();
const windChillElement = document.querySelector("#wind-chill")

// Adding text content to footer elements dynamically
year.innerHTML = date.getFullYear()
lastmodified.innerHTML =`Last Modified: ${document.lastModified}`;

//function to calculate windchill in Celsius
let temperature = 10;
let windSpeed = 5;
let windChill;

function calculateWindChill(temp, windSpeed){
    if(temp <= 10 && windSpeed > 4.8){
        windChill = 13.12 + 0.6215 * temp - 11.37 * windSpeed**0.16 + 0.3965 * temp * windSpeed**0.16;
    } else {
        return "N/A";
    }
    return Math.ceil(windChill * 10)/10;
}

//displaying the windchill
windChill = calculateWindChill(temperature, windSpeed);
windChillElement.textContent = windChill;