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

if (window.location.pathname.endsWith("main.html")){
    function parseData(data){
        for(let i = 0; i < data.projects.length; i++){
            document.getElementById("projects").innerHTML += ` <a href = "/Portfolio/${data.projects[i].subdomain}.html">
            <div class = "row project" id = "${data.projects[i].subdomain}">
                <div class = "project"><img src = "./images/projectClipshots/projectClipshot (${i + 1}).png"></div>
                <div class = "description"><h2>${data.projects[i].name}</h2><p class ="subtitle">${data.projects[i].subtitle}</p>
                <p>${data.projects[i].abstract}</p></div></div></a>`;
        }   
    }

    for(b of document.querySelectorAll("#filter .btn2")){
        b.addEventListener("click", e=> {
            console.log(e.target.value);
            sortProjects(e.target.value);
        })
    }
    
    function sortProjects(button){
        if(button == "clear"){
            for(i=0; i< proj.projects.length; i++){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }
        }else if(button != undefined){
            for(i = 0; i< proj.projects.length; i++){
                if(proj.projects[i].category.includes(button) == true){
                    document.getElementById(proj.projects[i].subdomain).style.display = "flex";
                }
                else{
                    document.getElementById(proj.projects[i].subdomain).style.display = "none";
                }
            }
        }else{
            console.log("error, button calue is undefined");
        }
    }

}

if (window.location.pathname.endsWith("main.html")) {
    const menuButton = document.getElementById("menuButton");
    const hireButton = document.getElementById("hireButton");

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

} else if (window.location.pathname.endsWith("menuPage.html")) {
    const homeButton = document.getElementById("homeButton");
    const hireButton = document.getElementById("hireButton");
    const instagram = document.getElementById("instagram");
    const github = document.getElementById("github");
    const mail = document.getElementById("mail");
    const aboutSam = document.getElementById("aboutSam");
    const projectPage = document.getElementById("projectPage");

    if (homeButton) {
        homeButton.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "./main.html";
        });
    }

    if (hireButton){
        hireButton.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "./hirePage.html";
        });
    }

    if (instagram){
        instagram.addEventListener("click", (e) => {
            console.log("Instagram Button Pressed");
            window.location.href = "https://www.instagram.com/kastencreations/";
        });
    }

    if (github){
        github.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "https://github.com/killthecreep";
        });
    }

    if (mail){
        mail.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "mailto:sam.kasten@colorado.edu";
        });
    }

    if (aboutSam){
        aboutSam.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "./aboutMe.html";
        });
    }

    if (projectPage){
        projectPage.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "./main.html#projects";
        });
    }

} else if (window.location.pathname.endsWith("hirePage.html")) {
    const homeButton = document.getElementById("homeButton");
    const menuButton = document.getElementById("menuButton");

    if (homeButton) {
        homeButton.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "./main.html";
        });
    }

    if (menuButton) {
        menuButton.addEventListener("click", (e) => {
            console.log("Button Pressed");
            window.location.href = "./menuPage.html";
        });
    }
} 

// //character position property
// let char = {};
// char = document.getElementById("char").getBoundingClientRect();

// //obstacle position property
// let obst = {};
// obst = document.querySelector(".obstacle").getBoundingClientRect();

// //container position property
// let container = {}
// container = document.getElementById("container").getBoundingClientRect();


// let score = 0;


// //character properties
// let charProp = {};
// charProp.jumpHeight = 0;
// charProp.elem = document.getElementById("char");
// charProp.maxJump = 80;
// charProp.doubleJump = false;
// charProp.jumping = false;
// charProp.hangTime = 0;
// charProp.maxHang = 4;

// setInterval(() => {
//     obst = document.querySelector(".obstacle").getBoundingClientRect();
//     char = document.getElementById("char").getBoundingClientRect();
//     if(char.right >= obst.x && char.bottom > obst.y){
//         alert("you lose");
//         document.querySelector(".obstacle").style.animation ="none";
//     }else if(obst.x < container.x){
//         score += 1;
//         document.getElementById("score").innerHTML = `Score: ${score}`;
//     }
// }, 100) //unit milliseconds

// document.addEventListener("keydown", e=>{
//     if(e.code == "Space"){
//         jumping();
//     }
// })


// function jumping(){
//     charProp.jumping = true;
//     let jump = setInterval(() =>{
//         // going up
//         if(charProp.jumpHeight < charProp.maxJump && charProp.jumping == true){
//             charProp.jumpHeight += 10;
//         }
//         // top of jump
//         else if(charProp.jumpHeight >= charProp.maxJump && charProp.jumping == true){
//             charProp.jumping = false;
//             // charProp.jumpHeight -= 10;
//         }
//         //hang time
//         else if(charProp.jumping == false && charProp.hangTime < charProp.maxHang){
//             charProp.jumpHeight = charProp.maxJump;
//             charProp.hangTime += 1;
//         }
//         //falling
//         else if(charProp.jumpHeight > 0 && charProp.jumping == false && charProp.hangTime >= charProp.maxHang){
//             charProp.jumpHeight -= 10;
//         }
//         //at bottom?
//         else{
//             console.log("at bottom")
//             charProp.falling = false;
//             clearInterval(jump);
//         }
//         charProp.elem.style.bottom = `${charProp.jumpHeight}px`;
//     }, 100)
// }