class Preload extends Phaser.Scene
{
    constructor()
    {
        super({ key: "Preload", active: false });
    }

    init() 
    {
        
    }

    preload()
    {

    }

    create()
    {
        this.scene.staart("Menu");
    }

}