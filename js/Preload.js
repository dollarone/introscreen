var PlatformerGame = PlatformerGame || {};

//loading the game assets
PlatformerGame.Preload = function(){};

PlatformerGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    // this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('sky', 'assets/images/sky.png');
    this.game.load.image('ground', 'assets/images/platform.png');
    this.game.load.image('star', 'assets/images/star.png');
    this.game.load.spritesheet('dude', 'assets/images/dude.png', 32, 48);
    this.game.load.spritesheet('logo-tiles', 'assets/images/logo-tiles.png', 17, 16);
  },
  create: function() {
    this.state.start('Game');
  }
};
