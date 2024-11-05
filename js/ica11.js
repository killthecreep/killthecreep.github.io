
var inputName = "Sam";

document.getElementById("button").addEventListener("click", function(e)){
    alert("Pressed button")
    fortune(inputName);
}

function fortune(string){
    document.getElementById("paragraph").innerHTML = "This is the new text";
}
