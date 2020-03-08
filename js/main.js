function resizeApp()
{
    "use strict";
    
    // width-height ratio of game resolution
    let game_ratio = (360 / 2) / (640 / 2);

    // make fiv full height of browser and keep the ratio of game resolution
    let div = document.getElementById("phaser-app");
    div.style.width = (window.innerHeight * game_ratio) + "px";
    div.style.height = window.innerHeight + "px";

    // check if device DPI messes up the width-height-ratio
    let canvas = document.getElementsByTagName("canvas")[0];

    let dpi_w = (parseInt(div.style.width) / canvas.width);
    let dpi_h = (parseInt(div.style.height) / canvas.height);

    let height = window.innerHeight * (dpi_w / dpi_h);
    let width = height * game_ratio;
}

function runApp() 
{
    "Use strict";

    // init the Phaser game app
    let app = new App();
    app.start();

    // scale to device

}