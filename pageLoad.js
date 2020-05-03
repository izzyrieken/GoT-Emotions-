// <button on="typeWriter()">Click me</button>

// document.getElementById("demo").onload = function() {typeWriter()};

var i = 0;
var txt = 'What does your heart desire?';
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
