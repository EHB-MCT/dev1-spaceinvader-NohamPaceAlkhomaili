"use strict";
window.onresize = spaceInvader;
function spaceInvader(){
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.rect(100, 100, 300, 300);
    context.fill();

    context.fillStyle = "#00ff00";
    context.beginPath();
    context.rect(225, 125, 50, 50);
    context.rect(175, 175, 50, 50);
    context.rect(275, 175, 50, 50);
    context.rect(175, 325, 50, 50);
    context.rect(175, 275, 150, 50);
    context.rect(275, 325, 50, 50);


    context.fill();

    
}
spaceInvader();
// alert("Draw your space invader here");