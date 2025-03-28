const startTime = performance.now();
function secondsSinceStart() {
    // performance.now() is originally in milliseconds
    return (performance.now() - startTime) / 1000;
}

function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(-10, -10, 500, 500);
}

async function setup() {
    // Set up the canvas so we can actually draw on it and stuff
    const canvas = document.getElementById("thepuzzlebox");
    const ctx = canvas.getContext("2d");
    // Set the scene (drum sting)
    var scene = "loading";
    var loadingStatus = "Loading fonts..."
    var loadingProgress = 1;
    
    // Load the fonts into the canvas
    const roboto = new FontFace('Roboto', 'url(https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmZiAz0klQmz24O0g.woff)');
    roboto.load().then((font) => {
        document.fonts.add(font);
        ctx.font = '30px "Roboto"';
        ctx.fillText("Roboto", 10, 400);
    });
    loadingProcess++;
    const jbm = new FontFace('JetBrains Mono', 'url(https://fonts.gstatic.com/s/jetbrainsmono/v20/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTN1OTk6OThhvAWV8.woff)');
    jbm.load().then((font) => {
        document.fonts.add(font);
        ctx.font = '30px "JetBrains Mono"';
        ctx.fillText("JetBrains Mono", 10, 350);
    });
    loadingProcess++;
}

function drawScreen() {
    switch (scene) {
        case "loading":
            clearScreen();
            ctx.fillStyle = "white";
            ctx.font = '30px "Roboto", sans-serif';
            ctx.fillText("Loading...", 10, 450);
            break;
        default:
            clearScreen();
            ctx.fillStyle = "#FF6060";
            ctx.font = '30px "JetBrains Mono", monospace';
            ctx.fillText("Unknown scene '" + scene + "'", 10, 200);
    }
}

async function run() {
    setInterval(drawScreen, 20);
    await setup();
    ctx.fillStyle = "lime";
    ctx.font = '30px "JetBrains Mono"';
    ctx.fillText("Hello world! " + secondsSinceStart(), 100, 100);
}
