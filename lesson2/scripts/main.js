//Get the current year
const date = new Date();
const currentYear = date.getFullYear();
document.querySelector("#date").innerHTML = currentYear;

//Get last modified
const update = new Date(document.lastModified)

document.getElementById("last-update").textContent = `Last Update: ${update.getMonth()+1}/${update.getDate()}/${update.getFullYear()}   ${update.getHours()}:${update.getMinutes()}:${update.getSeconds()}`;
