let subdomain = window.location.href;
console.log(subdomain);

if (window.location.pathname.endsWith("deepDive.html")) {
    const menuButton = document.getElementById("menuButton");
    const hireButton = document.getElementById("hireButton");
    const homeButton = document.getElementById("homeButton");

    if (menuButton) {
        menuButton.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "./menuPage.html";
        });
    }

    if (hireButton){
        hireButton.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "./hirePage.html";
        });
    }

    if (homeButton) {
        homeButton.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "./main.html";
        });
    }

}

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["./images/deepDive/deepDive gameplay.png", "./images/deepDive/Deep Dive Menu.png", "./images/deepDive/deepDive gameplay (2).png", "./images/deepDive/deep dive end screen.png"];


/* Declaring the alternative text for each image file */
const alts = ["The Cyberfrog Front", "In action", "Prototyping", "Battle Mode or really repair mode", "The Mars Opportunity Rover Award", "The team after presentation"];

/* Looping through images */
for (let i = 0; i < pics.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", ()=>{
        displayedImage.setAttribute("src", pics[i]);
        displayedImage.setAttribute("alt", alts[i]);
    });
}