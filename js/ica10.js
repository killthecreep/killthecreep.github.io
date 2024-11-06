const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let names = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let locations = ["the soup kitchen", "Disneyland", "the White House"];
let actions = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {

    console.log("testing");

    if(customName.value !== '') {
    const name = customName.value;
    }

    let newStory = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14);
        const temperature =  Math.round((94 - 32) * (5/9));
        newStory = newStory.replace("300 pounds", weight + ' stone');
        newStory = newStory.replace("94 fahrenheit", temperature + ' centigrade');
    }

    newStory = newStory.replace(/:insertx:/g, randomValueFromArray(names));
    newStory = newStory.replace(':inserty:', randomValueFromArray(locations));
    newStory = newStory.replace(':insertz:', randomValueFromArray(actions));

    story.textContent = newStory;
    story.style.visibility = 'visible';

    
}



// console.log(document.getElementById("my_head"));
// document.getElementById("my_head").addEventListener("click", function(e){
//     alert("booo!!!");
//     document.getElementById("paragraph").innerHTML = "This is the new text";
//     document.getElementById("paragraph").style.color = "blue";
//     document.getElementById("image").src = "../img/spongebob.jpg";
// })