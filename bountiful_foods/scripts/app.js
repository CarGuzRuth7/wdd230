//Get last modified
const update = new Date(document.lastModified)

document.getElementById("last-update").textContent = `Last Update: ${update.getMonth()+1}/${update.getDate()}/${update.getFullYear()}   ${update.getHours()}:${update.getMinutes()}:${update.getSeconds()}`;

//Menu icon
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.querySelector("nav").classList.toggle("open");
    
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;