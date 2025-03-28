var canvas;
var ctx;
function setup() {
    // Set up the canvas so we can actually draw on it and stuff
    canvas = document.getElementById("thepuzzlebox");
    ctx = canvas.getContext("2d");
    // Make a simple loading screen. It doesn't have to pretty, just functional
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 480, 480);
    ctx.fillStyle = "white";
    ctx.font = '30px sans-serif';
    ctx.fillText("Loading...", 10, 450);
    // Load Roboto and JetBrains Mono
    const roboto = new FontFace('Roboto', 'url(https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmZiAz0klQmz24O0g.woff)');
    roboto.load().then((font) => {
        document.fonts.add(font);
        ctx.fillText("Roboto", 10, 400);
    });
    const jbm = new FontFace('JetBrains Mono', 'url(https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OTk6OThhvAWV8.woff)');
    jbm.load().then((font) => {
        document.fonts.add(font);
        ctx.fillText("JetBrains Mono", 10, 350);
    });
}

function run() {
    setup();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 480, 480);
    ctx.fillStyle = "white";
    ctx.font = '30px "JetBrains Mono"';
    ctx.fillText("Hello world!", 100, 100);
}
