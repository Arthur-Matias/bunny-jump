import phaser from "../lib/phaser.js";

export default class GameOver extends Phaser.Scene{
    constructor(){
        super('game-over')
    }

    create(){
        const width = this.scale.width;
        const height = this.scale.height;

        this.add.text(width / 2, height / 2, 'Game Over', {
            fontSize: 48,
            fontStyle: "bold"
        }).setOrigin(0.5)

        this.input.keyboard.once('keydown-SPACE', ()=>{
            this.scene.start('game');
        })
    }
}