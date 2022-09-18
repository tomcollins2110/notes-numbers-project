function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    });
});

var button = document.getElementById("myButton");
var number = document.getElementById("number");

number.innerHTML = "0";

var min = 1;
var max = 7;

function generateNumber() {
    var random = Math.floor((Math.random() * (max-min) + min ));
    return random;
}
 
button.addEventListener("click", function (){
    var result = generateNumber();
    number.innerHTML = result;
});