const button_set_radius = document.getElementById("button_set_radius");
const button_set_color = document.getElementById("button_set_color");
const button_set_rotation = document.getElementById("button_set_rotation");
const square = document.getElementById("square")

function change_color(){
    square.classList.toggle("square_red");
}

function change_rotation(){
    square.classList.toggle("square_rotated");
}

function change_radius(){
    square.classList.toggle("square_radius");
}

function hide_square(){
    square.classList.add("square_hidden");
}

function show_square(){
    square.classList.remove("square_hidden");
}

button_set_color.addEventListener('click', change_color);
button_set_radius.addEventListener('click', change_radius);
button_set_rotation.addEventListener('click', change_rotation);
square.addEventListener("mouseenter", hide_square);
square.addEventListener("mouseleave", show_square);