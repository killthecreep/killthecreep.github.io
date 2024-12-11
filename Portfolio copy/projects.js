let subdomain = window.location.href;
console.log(subdomain);

const menuButton = document.getElementById("menuButton");
const hireButton = document.getElementById("hireButton");
const homeButton = document.getElementById("homeButton");
let proj;

fetch('./effects.json')
    .then(response => {
        return response.json();
    }).then(effects => {
        console.log(effects);
        proj = effects;
        parseData(effects);
    }).catch(err => {
        console.log(`error ${err}`);
    })

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

if (window.location.pathname.endsWith("cyberfrog.html")) {
    
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');

    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');

    /* Declaring the array of image filenames */
    const pics = ["./images/cyberfrog/cyberfrog.jpg", "./images/cyberfrog/cyberfrogAction.jpg", "./images/cyberfrog/cyberfrogPrototype.jpg", "./images/cyberfrog/cyberfrogBattleMode.jpg", "./images/cyberfrog/cyberfrogAward.jpg", "./images/cyberfrog/Space Grant.jpg"];

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
} else if (window.location.pathname.endsWith("artwork.html")) {
    
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');

    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');

    /* Declaring the array of image filenames */
    const pics = ["./images/artwork/Untitled_Artwork 1.jpg", "./images/artwork/Untitled_Artwork 2.jpg", "./images/artwork/Untitled_Artwork 3.jpg", "./images/artwork/Untitled_Artwork 4.jpg", "./images/artwork/Untitled_Artwork 5.jpg", "./images/artwork/Untitled_Artwork 6.jpg", "./images/artwork/Untitled_Artwork 7.jpg", "./images/artwork/Untitled_Artwork 8.jpg" ];


    /* Declaring the alternative text for each image file */
    const alts = ["Ghostbusters 3 Digital", "Kuchi Kopi's Digital", "Imagination Digital", "Tattooed Bender Digital", "Imagination Luise Digital", "Imagination Bart Digital", "Creepy Cipher Digital", "Glitchy Cipher Digital"];

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
} else if (window.location.pathname.endsWith("blender.html")) {
    
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');

    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');

    /* Declaring the array of image filenames */
    const pics = ["./images/blender/projectChlipshot (2).png", "./images/blender/Jack-O-Lantern Cycles Final.png", "./images/blender/Spooky Ghost Happy Halloween.png", "./images/blender/Rocket w_ flame.png", "./images/blender/Sushi Animation for insta anaimation.png", "./images/cyberfrog/Cyberfrog breakable body blender V2.png"];


    /* Declaring the alternative text for each image file */
    const alts = ["Bender Futurama", "Jack-O-Lantern", "Cloth Sim ghost", "Rocket-ship", "Sushi Swimming", "Cyberfrog Body 3D model"];

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
} else if (window.location.pathname.endsWith("deepDive.html")){
    
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
} else if (window.location.pathname.endsWith("aboutMe.html")){
    
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');

    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');

    /* Declaring the array of image filenames */
    const pics = ["./images/aboutMe/bishopCastle.jpg", "./images/aboutMe/skateSam.jpg", "./images/aboutMe/sam over the years.jpg", "./images/aboutMe/pirateSam.JPEG", "./images/aboutMe/onewheel.jpg", "./images/aboutMe/workingSam.jpg", "./images/aboutMe/rug.jpg"];


    /* Declaring the alternative text for each image file */
    const alts = ["Sam up at Bishop's Castle", "Sam after winning contests", "Sam skate start and present", "Pirate Sam", "Onewheel shot", "Sam Working on Projects", "Futurama Rug"];

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
}

