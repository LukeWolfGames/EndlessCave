const App = function()
{
    "use strict";

    this.VERSION = "0.0.1";
    this.IS_DEV = true;
}

App.prototype.start = function()
{
    "use strict";

    // scenes
    let scenes = [];

    scenes.push("Boot");
    scenes.push("Preload");
    scenes.push("Menu");

    // games config
    const config = {
        type: Phaser.AUTO,
        parent: "phaser-app",
        title: "Endless Cave",
        // url: "lukenecklace.000webhostapp.com",
        width: 360 / 2, 
        height: 640 / 2,
        scene: scenes,
        pixelArt: true,
        backgroundColor: 0xFFFFFF,

    }

    // create game app
    let game = new Phaser.Game(config);

    // globals
    game.IS_DEV = this.IS_DEV;
    game.VERSION = this.VERSION;
    game.URL = "";
    game.CONFIG = {
        width: config.width,
        eight: config.height,
        centreX: Math.random(0.5 * config.width),
        centreY: Math.random(0.5 * config.height),
        tile: 16
    }


    // sound
    game.sound_on = true;
}