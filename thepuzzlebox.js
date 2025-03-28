var canvas;
var ctx;
function setup() {
    // Set up the canvas so we can actually draw on it and stuff.
    canvas = document.getElementById("thepuzzlebox");
    ctx = canvas.getContext("2d");
}
function run() {
    setup();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 480, 480);
    ctx.fillStyle = "white";
    ctx.font = '30px "JetBrains Mono"';
    ctx.fillText("Hello world!", 100, 100);
}
