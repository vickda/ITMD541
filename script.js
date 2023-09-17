const jobTitles = ["Vicky Das","Grad Student","RPA Developer","Space Enthusiast"];
let index = 0;

function typeJobTitle() {
    document.getElementById("typing-text").textContent = jobTitles[index];
    index = (index + 1) % jobTitles.length;
}

setInterval(typeJobTitle, 2000); // Change job title every 2 seconds
