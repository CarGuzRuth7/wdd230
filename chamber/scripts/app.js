//Hamburger menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.querySelector("nav").classList.toggle("open");
    
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


//Get the current year
const date = new Date();
const currentYear = date.getFullYear();
document.getElementById("year").textContent = currentYear;

//Get date

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName} ${d.getDate()}, ${monthName} ${year}`;

document.getElementById("date").textContent = fulldate;

//Get last modified
const update = new Date(document.lastModified)

document.getElementById("last-update").textContent = `Last Update: ${update.getMonth()+1}/${update.getDate()}/${update.getFullYear()}   ${update.getHours()}:${update.getMinutes()}:${update.getSeconds()}`;

