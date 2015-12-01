var PlatfomerGame = PlatformerGame || {};

//title screen
PlatformerGame.Game = function(){};

PlatformerGame.Game.prototype = {
  create: function() {

    this.player;
    this.platforms;
    this.cursors;

    this.stars;
    this.score = 0;
    this.scoreText;

    //  We're going to be using physics, so enable the Arcade Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE); //////////////////// TODO: Ninja

    //  A simple background for our game
    this.game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.platforms = this.game.add.group();

    //  We will enable physics for any object that is created in this group
    this.platforms.enableBody = true;

    // Here we create the ground.
    this.ground = this.platforms.create(0, this.game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    this.ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    this.ground.body.immovable = true;

    logo_top_x = 200;
    logo_top_y = 300;

    this.createTile(logo_top_x+16*4, logo_top_y+16*0, 2);
    this.createTile(logo_top_x+16*8, logo_top_y+16*0, 2);
    this.createTile(logo_top_x+16*10, logo_top_y+16*0, 2);

    this.createTile(logo_top_x+16*2, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*3, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*4, logo_top_y+16*1, 2);
    this.createTile(logo_top_x+16*5, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*6, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*7, logo_top_y+16*1, 4);
    this.createTile(logo_top_x+16*8, logo_top_y+16*1, 2);
    this.createTile(logo_top_x+16*10, logo_top_y+16*1, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*13, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*14, logo_top_y+16*1, 4);
    this.createTile(logo_top_x+16*15, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*16, logo_top_y+16*1, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*18, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*19, logo_top_y+16*1, 4);
    this.createTile(logo_top_x+16*20, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*21, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*22, logo_top_y+16*1, 4);
    this.createTile(logo_top_x+16*23, logo_top_y+16*1, 0);
    this.createTile(logo_top_x+16*24, logo_top_y+16*1, 1);
    this.createTile(logo_top_x+16*25, logo_top_y+16*1, 4);

    this.createTile(logo_top_x+16*2, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*4, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*5, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*7, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*8, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*10, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*14, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*15, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*19, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*20, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*22, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*23, logo_top_y+16*2, 2);
    this.createTile(logo_top_x+16*25, logo_top_y+16*2, 5);

    this.createTile(logo_top_x+16*2, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*3, logo_top_y+16*3, 1);
    this.createTile(logo_top_x+16*4, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*5, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*6, logo_top_y+16*3, 1);
    this.createTile(logo_top_x+16*7, logo_top_y+16*3, 5);
    this.createTile(logo_top_x+16*8, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*9, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*10, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*11, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*13, logo_top_y+16*3, 1);
    this.createTile(logo_top_x+16*14, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*15, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*18, logo_top_y+16*3, 1);
    this.createTile(logo_top_x+16*19, logo_top_y+16*3, 5);
    this.createTile(logo_top_x+16*20, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*22, logo_top_y+16*3, 2);
    this.createTile(logo_top_x+16*23, logo_top_y+16*3, 3);
    this.createTile(logo_top_x+16*24, logo_top_y+16*3, 1);
    this.createTile(logo_top_x+16*25, logo_top_y+16*3, 2);


// prod

    this.createTile(logo_top_x+16*19, logo_top_y+16*4, 6);

    this.createTile(logo_top_x+16*11, logo_top_y+16*5, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*5, 2);
    this.createTile(logo_top_x+16*19, logo_top_y+16*5, 7);

    this.createTile(logo_top_x+16*1, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*2, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*3, logo_top_y+16*6, 4);
    this.createTile(logo_top_x+16*4, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*5, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*6, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*7, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*8, logo_top_y+16*6, 4);
    this.createTile(logo_top_x+16*9, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*10, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*11, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*14, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*15, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*16, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*18, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*19, logo_top_y+16*6, 2);
    this.createTile(logo_top_x+16*20, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*21, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*22, logo_top_y+16*6, 4);
    this.createTile(logo_top_x+16*23, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*24, logo_top_y+16*6, 1);
    this.createTile(logo_top_x+16*25, logo_top_y+16*6, 4);
    this.createTile(logo_top_x+16*26, logo_top_y+16*6, 0);
    this.createTile(logo_top_x+16*27, logo_top_y+16*6, 2);

    this.createTile(logo_top_x+16*1, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*3, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*4, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*6, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*8, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*9, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*11, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*14, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*15, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*19, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*20, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*22, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*23, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*25, logo_top_y+16*7, 2);
    this.createTile(logo_top_x+16*26, logo_top_y+16*7, 3);
    this.createTile(logo_top_x+16*27, logo_top_y+16*7, 4);

    this.createTile(logo_top_x+16*1, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*2, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*3, logo_top_y+16*8, 5);
    this.createTile(logo_top_x+16*4, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*6, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*7, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*8, logo_top_y+16*8, 5);
    this.createTile(logo_top_x+16*9, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*10, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*11, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*12, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*13, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*14, logo_top_y+16*8, 5);
    this.createTile(logo_top_x+16*15, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*16, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*17, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*18, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*19, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*20, logo_top_y+16*8, 3);
    this.createTile(logo_top_x+16*21, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*22, logo_top_y+16*8, 5);
    this.createTile(logo_top_x+16*23, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*25, logo_top_y+16*8, 2);
    this.createTile(logo_top_x+16*26, logo_top_y+16*8, 1);
    this.createTile(logo_top_x+16*27, logo_top_y+16*8, 5);

    this.createTile(logo_top_x+16*1, logo_top_y+16*9, 2);


/// TODO: subgroups are not affected by collision detection. is that intentional?
/// Can fix by adding a flag ['solid'] or sth but seems suboptimal

    // The player and its settings
    this.player = this.game.add.sprite(logo_top_x + 16*13 +300, -16*5, 'dude');

    //  We need to enable physics on the player
    this.game.physics.arcade.enable(this.player);

    //  Player physics properties. Give the little guy a slight bounce.
//    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
 //   this.player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    //  Finally some stars to collect
    this.stars = this.game.add.group();

    //  We will enable physics for any star that is created in this group
    this.stars.enableBody = true;

    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 0; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = this.stars.create(i * 70, 0, 'star');

        //  Let gravity do its thing
        star.body.gravity.y = 300;

        //  This just gives each star a slightly random bounce value
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    //  Our controls.
    this.cursors = this.game.input.keyboard.createCursorKeys();

    //  The score
    this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    this.scoreText.visible = true;
    this.startLogoAnimationTimer = 500; 
    this.scoreText.text = this.startLogoAnimationTimer;
    this.notExploded = true;
  },

  update: function() {

    if (this.startLogoAnimationTimer == 1) {
        this.startLogoAnimationTimer--;
        ledge["logo"] = true;
        this.explodeLogo(null, ledge);

    }
    else if (this.startLogoAnimationTimer > 1) {
        this.startLogoAnimationTimer--;
        this.scoreText.text = this.startLogoAnimationTimer;

    }

    //  Collide the player and the stars with the platforms
    this.game.physics.arcade.collide(this.player, this.platforms, this.explodeLogo, null, this);
    this.game.physics.arcade.collide(this.stars, this.platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);

    //  Reset the players velocity (movement)
    this.player.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
        //  Move to the left
        this.player.body.velocity.x = -150;

        this.player.animations.play('left');
    }
    else if (this.cursors.right.isDown)
    {
        //  Move to the right
        this.player.body.velocity.x = 150;

        this.player.animations.play('right');
    }
    else
    {
        //  Stand still
        this.player.animations.stop();

        this.player.frame = 4;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (this.cursors.up.isDown && this.player.body.touching.down)
    {
        this.player.body.velocity.y = -350;
    }

  },

  explodeLogo : function(player, platform) {
    if (this.notExploded && platform["logo"]) {
        this.notExploded = false;
        this.platforms.forEach( function(platform) {
            if (platform["logo"]) {
                platform.body.velocity.y = 4 * this.game.rnd.integerInRange(0, 50) * this.game.rnd.integerInRange(-1, 1);
                platform.body.velocity.x = 4 * this.game.rnd.integerInRange(0, 50) * this.game.rnd.integerInRange(-1, 1);
            }
        }, this);
    }

  },

  createTile : function(x, y, frame) {
    ledge = this.platforms.create(x, y, 'logo-tiles');
    ledge.body.immovable = true;
    ledge.frame = frame;
    ledge["logo"] = true;

  },

  collectStar : function(player, star) {
    
    // Removes the star from the screen
    star.kill();

    //  Add and update the score
    this.score += 10;
    this.scoreText.text = 'Score: ' + this.score;

  },
};