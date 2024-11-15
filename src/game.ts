import 'phaser';
import BootScene from '@scenes/BootScene'; // Importe sua BootScene
import MainScene from '@scenes/MainScene'; // Importe sua MainScene
import GameScene from '@scenes/GameScene'; // Importe sua GameScene

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.addEventListener('load', () => {
  const cfg: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game',
    width: window.innerWidth, // Ajusta a largura para ocupar toda a janela
    height: window.innerHeight, // Ajusta a altura para ocupar toda a janela
    scene: [BootScene, MainScene, GameScene], // Adicione todas as scenes aqui
    backgroundColor: '#222',
    scale: {
      mode: Phaser.Scale.RESIZE, // Torna o jogo responsivo ao redimensionar a janela
      autoCenter: Phaser.Scale.CENTER_BOTH, // Centraliza o canvas
    },
    render: {
      pixelArt: true,
      antialias: false,
    },
  };

  const game = new Game(cfg);

  // Adicione um listener para redimensionar a janela
  window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
  });
});
