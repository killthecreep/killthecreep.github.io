var outputElement = document.getElementById("image");
var outputTitle = document.getElementById("comic");
var outputCreatedOn = document.getElementById("creationDate");

function getFact(){
    fetch(`https://corsproxy.io/?https://xkcd.com/${getRandomNumber(1, 3000)}/info.0.json`)
    .then(res => {

        if(!res.ok){
            throw new Error("Could not fetch resource");
        }
        return res.json();
    })
    .then(data => {
        console.log(data.img);
        const imageURL = data.img;
        const imgElement = outputElement;
        const imageAlt = data.alt;
        imgElement.src = imageURL;
        imgElement.alt = imageAlt;
        imgElement.style.display = "block";

        const imageTitle = data.safe_title;
        const titleElement = outputTitle;
        titleElement.innerText = imageTitle;
        titleElement.style.display = "block"

        const imageCreationMonth = data.month;
        const imageCreationYear = data.year;
        const imageCreatedDate = outputCreatedOn;
        imageCreatedDate.innerText = "Created " + imageCreationMonth + " / " + imageCreationYear;
        imageCreatedDate.style.display = "block"

    })
    .catch(error =>{
        console.log('Error: ', error);
    })
    .catch(error => console.error(error));
    
    

}

function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

document.getElementById("generate").addEventListener("click", e=> {getFact();
    console.log("Button Pressed");
});

