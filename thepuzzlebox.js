var canvas;
var ctx;
function setup() {
    // Set up the canvas so we can actually draw on it and stuff.
    canvas = document.getElementById("thepuzzlebox");
    ctx = canvas.getContext("2d");
}
function run() {
    setup();
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 460, 460);
}
