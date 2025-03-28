function secondsSinceStart() {
    // Performance.now() is originally in milliseconds
    return (Performance.now() - startTime) / 1000;
}

async function setup() {
    // Set the scene *drum sting*
    const canvas = document.getElementById("thepuzzlebox");
    const ctx = canvas.getContext("2d");
    var scene = "loading";
    var loadingStatus = "Loading fonts..."
    var loadingProgress = 1;
    const startTime = Performance.now();
    
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
    scene = "main";
}


function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(-10, -10, 500, 500);
}

function drawScreen() {
    log("Drawing!")
    try {
        scene = scene;
    } catch {
        return undefined;
    }
    switch (scene) {
        case "":
            break;
        case "loading":
            clearScreen();
            // "Loading..." + status
            ctx.textAlign = "center";
            ctx.fillStyle = "white";
            ctx.font = '30px "Roboto", sans-serif';
            ctx.fillText("Loading...", 240, 240);
            ctx.font = '20px "Roboto", sans-serif';
            ctx.fillText(loadingStatus, 240, 270);
            // Loading bar
            ctx.fillStyle = "#00F040";
            ctx.fillRect(0, 300, Math.round(loadingProgres/3 * 480), 20));
            break;
        case "main":
            ctx.fillStyle = "lime";
            ctx.font = '30px "JetBrains Mono"';
            ctx.fillText("Hello world! " + secondsSinceStart(), 100, 100);
            break;
        default:
            clearScreen();
            ctx.fillStyle = "#FF6060";
            ctx.font = '30px "JetBrains Mono", monospace';
            ctx.fillText("Unknown scene '" + scene + "'", 10, 200);
    }
}

/***********************************************************
 * SECTION 3: RUNNING                                      *
 ***********************************************************/
function log(msg) {
    errorBox = document.getElementById("errorbox");
    errorBox.innerText += e + "\n";
}

async function run() {
    try {
        setInterval(drawScreen, 20);
        await setup();
    } catch (e) {
        log(e);
    }
}
