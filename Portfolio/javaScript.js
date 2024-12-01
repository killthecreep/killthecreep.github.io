fetch('./effects.json')
    .then(response => {
        return response.json();
    }).then(effects => {
        console.log(effects);
        parseData(effects);
    }).catch(err => {
        console.log(`error ${err}`);
    })

function parseData(data){
    for(let i = 0; i < data.projects.length; i++){
        document.getElementById("projects").innerHTML += `<div class = "row project" id = "${data.projects[i].subdomain}">
            <div class = "projimg"><img src = "../img/Unicorns/unicorn (${i + 1}).png"></div>
            <div class = "description"><h2>${data.projects[i].name}</h2><p class ="subtitle">${data.projects[i].subtitle}</p>
            <p>${data.projects[i].abstract}</p></div></div>`;
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