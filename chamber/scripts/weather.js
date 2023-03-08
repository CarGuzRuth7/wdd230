// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.description');
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector(".wind-chill");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.61315&lon=-58.37723&units=metric&appid=da3e730a4e4f39d541f4572b928edac8"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const speed = weatherData.wind.speed;
    const cToF = (desc * (9 / 5)) + 32;
    const wChill = calcWindChill(cToF, speed);

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    windSpeed.textContent = speed;
    windChill.textContent = wChill;
};

function calcWindChill(t, s){
  if(t <= 50 && s > 3.0){
  let f = 35.74 + (0.6215 * t) - ( 35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16));
  let fToC = Math.round((f - 32) * (5 / 9))

  return `${fToC}°C`;
  }
  else{ return "N/A"}
};
