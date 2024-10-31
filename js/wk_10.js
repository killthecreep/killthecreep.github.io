let my_var = 100;
var my_other_var = "hello world";
const this_is_a_constant = "constant"
console.log(my_other_var);
my_other_var += "!"
// alert(my_other_var);

// How to interact with the DOM
// Document Object Model
console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert("Clicked the h1");
    document.getElementById("paragraph").innerHTML = "This is the new text";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("image").src = "../img/newBalance.png";
})

console.log(document.getElementById("my_head").innerHTML);