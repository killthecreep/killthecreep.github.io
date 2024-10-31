let my_var = 100;
var my_other_var = "Boo!!!!";
const this_is_a_constant = "constant"
console.log(my_other_var);
my_other_var += "!"
// alert(my_other_var);

// How to interact with the DOM
// Document Object Model
console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert("booo!!!");
    document.getElementById("paragraph").innerHTML = "This is the new text";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("image").src = "../img/spongebob.jpg";
})

console.log(document.getElementById("button"));
document.getElementById("button").addEventListener("click", function(e){
    alert("testing");
    document.getElementById('paragraph').removeAttribute('paragraph');
    document.getElementById("paragraph").style.color = "black";
    document.getElementById("image").src = "../img/halloween pumpkins.jpg";
})

console.log(document.getElementById("my_head").innerHTML);
console.log(document.getElementById("button").innerHTML);