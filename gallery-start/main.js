const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ["images/SpongeBob_SquarePants_character.svg.png", "images/Squidward.png", "images/Patrick.jpg", "images/gary.jpg", "images/sandy.png"];


/* Declaring the alternative text for each image file */
const alts = ["Spongebob", "Squidward", "Patrick", "Gary", "Sandy"];

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

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', ()=>{
    const button = btn.getAttribute("class");
    if (button == "dark"){
        btn.setAttribute('class', 'light');
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
    
});
