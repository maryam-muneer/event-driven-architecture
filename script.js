let button = document.getElementById('btn');
let inputField = document.getElementById('inputName');
let bgDiv = document.getElementById('bg');

button.addEventListener('dblclick', function() {
    console.log("Button was doubble clicked!");
});
inputField.addEventListener('input', function() {
    console.log(inputField.value);
});
bgDiv.addEventListener('mouseover', function() {
    bgDiv.style.backgroundColor = "pink";

    bgDiv.addEventListener('mouseout', function() {
    bgDiv.style.backgroundColor = "white"; 
});

    console.log("Mouse is over the div!");
});           
    setTimeout(function() {
    console.log("3 seconds have passed!");            
}, 3000);
//  setInterval(function() {
//     console.log(new Date().toLocaleTimeString());
// }, 1000);
inputField.addEventListener("keypress", function(event) {
    console.log("You pressed: " + event.key);
});


                                          