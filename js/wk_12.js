let ourObject = {
    "name": "casey",
    "profession": "PhD Student",
    "age": 30,
    "pets": [{"name": "boots"}]
}

console.log(ourObject);

let myData = {};

function getFact(){
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
        }
        console.log(res);
    }).then(res => {
        myData = res;
        console.log(myData["joke"]);
        document.getElementById("joke").innerHTML = myData.joke;
    })
    .catch(error => {console.log(error)})
}

getFact();

document.getElementById("generate").addEventListener("click", e=> {getFact();
    console.log("Button Pressed");
});



