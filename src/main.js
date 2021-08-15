import phaser from './lib/phaser.js'
import Game from './scenes/Game.js'
import GameOver from './scenes/GameOver.js'

console.dir(phaser)

window.onclick = function() {
    if(audioCtx.state === 'running') {
      audioCtx.suspend().then(function() {
        susresBtn.textContent = 'Resume context';
      });
    } else if(audioCtx.state === 'suspended') {
      audioCtx.resume().then(function() {
        susresBtn.textContent = 'Suspend context';
      });
    }
  }

const config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    scene: [Game, GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y:200
            },
            debug: true
        }
    }
}

export default new Phaser.Game(config)