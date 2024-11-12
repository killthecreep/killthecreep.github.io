const story = document.querySelector('.fortune');

let childrenNum = ["1", "2", "99", "3"];
let names = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let locations = ["the soup kitchen", "Disneyland", "the White House"];
let jobs = ["Racecar Driver", "Astronaut", "Bear Wrangler"];

var childNum = randomValueFromArray(childrenNum);
var parentName = randomValueFromArray(names);
var location = randomValueFromArray(locations);
var job = randomValueFromArray(jobs);

document.getElementById("button").addEventListener("click", function(e){
    console.log("Pressed");
    alert("testing");
    fortune(childNum, parentName, location, job);
})

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

function fortune(input1, input2, input3, input4){
    document.getElementById("paragraph").innerHTML = "This is the new text";
    console.log("testing");

    let newStory = "You will be a X in Y, and married to Z with N kids.";

    newStory = newStory.replace('X', randomValueFromArray(input4));
    newStory = newStory.replace('Y', randomValueFromArray(input3));
    newStory = newStory.replace('Z', randomValueFromArray(input2));
    newStory = newStory.replace('N', randomValueFromArray(input1));

    story.textContent = newStory;
    story.style.visibility = 'visible';
}