window.onload = function()
{
    // William CS 325 Digital Assignment #3
    //Murder with Revenge
    
    "use strict";
    
    var game = new Phaser.Game( 1024, 576, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render} );
   
 
    function preload() //load assets
    {
    	    /*game.load.image( 'back', 'assets/back.png' )
    	    game.load.image( 'b1', 'assets/b1.png' )
    	    game.load.image( 'b2', 'assets/b2.png' )
    	    game.load.image( 'b3', 'assets/b3.png' )
    	    game.load.image( 'b4', 'assets/b4.png' )
    	    game.load.image( 'b5', 'assets/b5.png' )
    	    game.load.image( 'b6', 'assets/b6.png' )
    	    game.load.image( 'b7', 'assets/b7.png' )
    	    game.load.image( 'b8', 'assets/b8.png' )
    	    game.load.image( 'b9', 'assets/b9.png' )
    	    game.load.image( 'wrap1', 'assets/wrap1.png' )
    	    game.load.image( 'wrap2', 'assets/wrap2.png' )
    	    game.load.image( 'wrap3', 'assets/wrap3.png' )
    	    game.load.image( 'wrap4', 'assets/wrap4.png' )
    	    game.load.image( 'wrap5', 'assets/wrap5.png' )
    	    game.load.image( 'wrap6', 'assets/wrap6.png' )
    	    game.load.image( 'wall1', 'assets/wall1.png' )
    	    game.load.image( 'wall2', 'assets/wall2.png' )
    	    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    	    game.load.spritesheet('dude2', 'assets/dude2.png', 32, 48);
    	    game.load.spritesheet('star', 'assets/star.png', 50, 50, 4, 0, 1);
    	    game.load.spritesheet('star2', 'assets/star2.png', 50, 50, 4, 0, 1);
    	    game.load.audio('music', 'assets/music.mp3');
    	    game.load.audio('death', 'assets/death.mp3');*/
    	    
    	    game.load.image( 'back', 'assets/back.png' )
    	    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    	    game.load.image( 'b1', 'assets/b1.png' )
    	    game.load.image( 'b2', 'assets/b2.png' )
    	    game.load.image( 'bdown', 'assets/bdown.png' )
    }
    //variables
   /* var player1;
    var player2;
    var b1;
    var b2;
    var b3;
    var c1;
    var c2;
    var c3;
    var w1;
    var w2;
    var w3;
    var w4;
    var cursors;
    var wKey;
    var sKey;
    var aKey;
    var dKey;
    var spaceKey;
    var enterKey;
    var player1ShootTime = 0;
    var player1Shoot;    
    var player2ShootTime = 0;
    var player2Shoot;
    var star;
    var star2;
    var player1ShootGroup;
    var player2ShootGroup;
    var moveUp = 1.0;
    var rateUp = 1.0;
    var speedUp = 1.0;
    var moveUp2 = 1.0;
    var rateUp2 = 1.0;
    var speedUp2 = 1.0;
    var player1Max = 10;
    var player2Max = 10;
    var player1MaxCount = 1;
    var player2MaxCount = 1;
    var player1Killed = 0;
    var player2Killed = 0;
    var bloodDict = {};
    var b1Time = 0;
    var b2Time = 0;
    var b3Time = 0;
    var moveB;
    var rateB;
    var speedB;
    var moveText;
    var rateText;
    var speedText;
    var statusStyle = { font: "13px Arial", fill: "#333300", align: "center" };
    var titleStyle = { font: "20px Arial", fill: "#000000", align: "center" };
    var statusText;
    var statusText2;
    var music;
    var death;*/
    
    var player;
    var cursors;
    var spaceKey;
    var b1;
    var b2;
    var bdown;
    var choose1 = false;
    var choose2 = false;
    var text1;
    var text2;
    var textStyle = { font: "30px Arial", fill: "#000000", align: "left" };
    var textTimeStyle = { font: "30px Arial", fill: "#000000", align: "center" };
    //var p1Text = 'Patient 1\nAge: 24\nWorks Retail';
    //var p2Text = 'Patient 2\nAge: 52\nIn Prison';
    //var p1Text = 'Patient 1\nAge: 24\nWorks Retail\nNo Family';
    //var p2Text = 'Patient 2\nAge: 52\nUnemployed\nThree Children';
    var p1Text = 'Patient 1\nAge: 24\nWorks Retail\nNo Family\nHIV Positive';
    var p2Text = 'Patient 2\nAge: 52\nUnemployed\nThree Children\nConvicted Rapist';
    var startTime;
    var timeText;
    
    function create() //create game objects needed to start
    {
    	    startTime = game.time.now;
    	    
    	    game.physics.startSystem(Phaser.Physics.ARCADE);
    	    game.world.setBounds(0, 0, 1024, 576);
    	    var back = game.add.sprite(0, 0, 'back');
    	    
    	    b1 = game.add.sprite(150, 450, 'b1');
    	    b1.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(b1);
    	    b1.body.immovable = true;
    	    b2 = game.add.sprite(874, 450, 'b2');
    	    b2.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(b2);
    	    b2.body.immovable = true;
    	    bdown = game.add.sprite(-500, -500, 'bdown');
    	    bdown.anchor.setTo(0.5, 0.5);
    	    
    	    player = game.add.sprite(512, 400, 'dude');
    	    game.physics.arcade.enable(player);
    	    player.body.collideWorldBounds = true;
    	    player.animations.add('left', [0, 1, 2, 3], 10, true);
    	    player.animations.add('right', [5, 6, 7, 8], 10, true);
    	    
    	    text1 = game.add.text(75, 75, p1Text, textStyle);
    	    text2 = game.add.text(780, 75, p2Text, textStyle);
    	    //timeText = game.add.text(490, 75, 'Time Left: ' + (game.time.now - startTime), textTimeStyle);
    	    timeText = game.add.text(400, 75, 'Time Left: ' + (((15000 - (game.time.now - startTime)) / 1000) % 60), textTimeStyle);
    	        	    
    	    cursors = game.input.keyboard.createCursorKeys();
    	    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	    
    	    
    	    
    	    
    	    
    	    
    	    
    	    
    	    
    	    /*game.physics.startSystem(Phaser.Physics.ARCADE);
    	    game.world.setBounds(0, 0, 1024, 576);
    	    var back = game.add.sprite(0, 0, 'back');
    	    b1 = game.add.sprite(512, 100, 'wrap1');
    	    b1.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(b1);
    	    b1.body.immovable = true;
    	    b2 = game.add.sprite(512, 288, 'wrap3');
    	    b2.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(b2);
    	    b2.body.immovable = true;
    	    b3 = game.add.sprite(512, 476, 'wrap5');
    	    b3.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(b3);
    	    b3.body.immovable = true;
    	    w1 = game.add.sprite(275, 200, 'wall1');
    	    w1.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(w1);
    	    w1.body.immovable = true;
    	    w2 = game.add.sprite(749, 376, 'wall1');
    	    w2.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(w2);
    	    w2.body.immovable = true;
    	    w3 = game.add.sprite(799, 125, 'wall2');
    	    w3.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(w3);
    	    w3.body.immovable = true;
    	    w4 = game.add.sprite(225, 451, 'wall2');
    	    w4.anchor.setTo(0.5, 0.5);
    	    game.physics.arcade.enable(w4);
    	    w4.body.immovable = true;
    	    
    	    speedB = game.add.sprite(-500, -500, 'wrap6');
    	    speedB.anchor.setTo(0.5, 0.5);
    	    rateB = game.add.sprite(-500, -500, 'wrap4');
    	    rateB.anchor.setTo(0.5, 0.5);
    	    moveB = game.add.sprite(-500, -500, 'wrap2');
    	    moveB.anchor.setTo(0.5, 0.5);
    	    
    	    player1 = game.add.sprite(50, 150, 'dude');
    	    game.physics.arcade.enable(player1);
    	    player1.body.collideWorldBounds = true;
    	    player1.animations.add('left', [0, 1, 2, 3], 10, true);
    	    player1.animations.add('right', [5, 6, 7, 8], 10, true);
    	    
    	    player2 = game.add.sprite(950, 350, 'dude2');
    	    game.physics.arcade.enable(player2);
    	    player2.body.collideWorldBounds = true;
    	    player2.animations.add('left', [0, 1, 2, 3], 10, true);
    	    player2.animations.add('right', [5, 6, 7, 8], 10, true);
    	    
    	    cursors = game.input.keyboard.createCursorKeys();
    	    wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    	    sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    	    aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    	    dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    	    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	    enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    	    
    	    player1ShootGroup = game.add.group();
    	    game.physics.arcade.enable(player1ShootGroup);
    	    player2ShootGroup = game.add.group();
    	    game.physics.arcade.enable(player2ShootGroup);
    	    
    	    bloodDict[0] = 'b1';
    	    bloodDict[1] = 'b2';
    	    bloodDict[2] = 'b3';
    	    bloodDict[3] = 'b4';
    	    bloodDict[4] = 'b5';
    	    bloodDict[5] = 'b6';
    	    bloodDict[6] = 'b7';
    	    bloodDict[7] = 'b8';
    	    bloodDict[8] = 'b9';
    	    
    	    statusText = game.add.text(15, 10, 'Player 2 Kills: ' + player2Killed, titleStyle);
    	    statusText2 = game.add.text(872, 10, 'Player 1 Kills: ' + player1Killed, titleStyle);
    	    
    	    death = game.add.audio('death');
    	    death.allowMultiple = true;
    	    
    	    music = game.add.audio('music');
    	    music.play('',0,1,true);*/
    	    
    	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    	    game.input.onDown.add(fullScreenStart, this);
    	    game.paused = true;
    	    
    	    

    }
    
    function fullScreenStart() //fullscreen and pause mode
    {
    	    if (game.scale.isFullScreen)
    	    {
    	    	    game.paused = true;
    	    	    game.scale.stopFullScreen();
    	    }
    	    else
    	    {
    	    	    game.scale.startFullScreen(true);
    	    	    game.paused = false;
    	    }
    }
    
    function update() //check every frame
    {
    	    //timeText.setText('Time Left: ' + (((15000 - (game.time.now - startTime) / 1000) % 60));
    	    
    	    player.body.velocity.x = 0;
    	    player.body.velocity.y = 0;
    	    if (cursors.up.isDown && cursors.right.isDown)
    	    {
    	    	    player.body.velocity.y = -200;
    	    	    player.body.velocity.x = 200;
    	    	    player.animations.play('right');
    	    }
    	    else if (cursors.up.isDown && cursors.left.isDown)
    	    {
    	    	    player.body.velocity.y = -200;
    	    	    player.body.velocity.x = -200;
    	    	    player.animations.play('left');
    	    }
    	    else if (cursors.down.isDown && cursors.right.isDown)
    	    {
    	    	    player.body.velocity.y = 200;
    	    	    player.body.velocity.x = 200;
    	    	    player.animations.play('right');
    	    }
    	    else if (cursors.left.isDown && cursors.down.isDown)
    	    {
    	    	    player.body.velocity.y = 200;
    	    	    player.body.velocity.x = -200;
    	    	    player.animations.play('left');
    	    }
    	    else if (cursors.up.isDown)
    	    {
    	    	    player.body.velocity.y = -200;
    	    	    player.frame = 4;
    	    }
    	    else if (cursors.down.isDown)
    	    {
    	    	    player.body.velocity.y = 200;
    	    	    player.frame = 4;
    	    }
    	    else if (cursors.left.isDown)
    	    {
    	    	    player.body.velocity.x = -200;
    	    	    player.animations.play('left');
    	    }
    	    else if (cursors.right.isDown)
    	    {
    	    	    player.body.velocity.x = 200;
    	    	    player.animations.play('right');
    	    }
    	    else
    	    {
    	    	    player.frame = 4;
    	    }
    	    
    	    choose1 = false;
    	    choose2 = false;
    	    
    	    game.physics.arcade.overlap(player, b1, touchB1, null, this);
    	    game.physics.arcade.overlap(player, b2, touchB2, null, this);
    	    
    	    if (choose1 === false && choose2 === false)
    	    {
    	    	    bdown.x = -500;
    	    	    bdown.y = -500;
    	    }
    	    
    	    
    	    
    	    
    	    
    	    
    	    
    	    
    	    
    	    /*statusText.setText('Player 2 Kills: ' + player2Killed);
    	     statusText2.setText('Player 1 Kills: ' + player1Killed);
    	     
    	       
    	     game.physics.arcade.collide(player1, w1, null, null, this);
    	     game.physics.arcade.collide(player1, w2, null, null, this);
    	     game.physics.arcade.collide(player1, w3, null, null, this);
    	     game.physics.arcade.collide(player1, w4, null, null, this);
    	     game.physics.arcade.collide(player2, w1, null, null, this);
    	     game.physics.arcade.collide(player2, w2, null, null, this);
    	     game.physics.arcade.collide(player2, w3, null, null, this);
    	     game.physics.arcade.collide(player2, w4, null, null, this);
    	     game.physics.arcade.collide(player1ShootGroup, w1, null, null, this);
    	     game.physics.arcade.collide(player1ShootGroup, w2, null, null, this);
    	     game.physics.arcade.collide(player1ShootGroup, w3, null, null, this);
    	     game.physics.arcade.collide(player1ShootGroup, w4, null, null, this);
    	     game.physics.arcade.collide(player2ShootGroup, w1, null, null, this);
    	     game.physics.arcade.collide(player2ShootGroup, w2, null, null, this);
    	     game.physics.arcade.collide(player2ShootGroup, w3, null, null, this);
    	     game.physics.arcade.collide(player2ShootGroup, w4, null, null, this);
    	     game.physics.arcade.collide(player2ShootGroup, player1ShootGroup, null, null, this);
    	     game.physics.arcade.collide(player2, player1ShootGroup, killPlayer2, null, this);
    	     game.physics.arcade.collide(player1, player2ShootGroup, killPlayer1, null, this);
    	     game.physics.arcade.overlap(player1, b1, player1Move, null, this);
    	     game.physics.arcade.overlap(player1, b2, player1Rate, null, this);
    	     game.physics.arcade.overlap(player1, b3, player1Speed, null, this);
    	     game.physics.arcade.overlap(player2, b1, player2Move, null, this);
    	     game.physics.arcade.overlap(player2, b2, player2Rate, null, this);
    	     game.physics.arcade.overlap(player2, b3, player2Speed, null, this);
    	     
    	    //movement keys
    	    //Possible bug with shoot key not working for all 8 directions on some systems.
    	    player1.body.velocity.x = 0;
    	    player1.body.velocity.y = 0;
    	    if (wKey.isDown && dKey.isDown)
    	    {
    	    	    player1.body.velocity.y = -200 * moveUp;
    	    	    player1.body.velocity.x = 200 * moveUp;
    	    	    player1.animations.play('right');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x + 25, player1.y - 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = -300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (wKey.isDown && aKey.isDown)
    	    {
    	    	    player1.body.velocity.y = -200 * moveUp;
    	    	    player1.body.velocity.x = -200 * moveUp;
    	    	    player1.animations.play('left');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown && player1MaxCount <= player1Max)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x - 25, player1.y - 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = -300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = -300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (sKey.isDown && dKey.isDown)
    	    {
    	    	    player1.body.velocity.y = 200 * moveUp;
    	    	    player1.body.velocity.x = 200 * moveUp;
    	    	    player1.animations.play('right');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x + 25, player1.y + 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = 300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (sKey.isDown && aKey.isDown)
    	    {
    	    	    player1.body.velocity.y = 200 * moveUp;
    	    	    player1.body.velocity.x = -200 * moveUp;
    	    	    player1.animations.play('left');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x - 25, player1.y + 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = -300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = 300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (wKey.isDown)
    	    {
    	    	    player1.body.velocity.y = -200 * moveUp;
    	    	    player1.frame = 4;
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x, player1.y - 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 0;
    	    	    	    player1Shoot.body.velocity.y = -300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (sKey.isDown)
    	    {
    	    	    player1.body.velocity.y = 200 * moveUp;
    	    	    player1.frame = 4;
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x, player1.y + 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 0;
    	    	    	    player1Shoot.body.velocity.y = 300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (aKey.isDown)
    	    {
    	    	    player1.body.velocity.x = -200 * moveUp;
    	    	    player1.animations.play('left');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x - 25, player1.y, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = -300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = 0;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else if (dKey.isDown)
    	    {
    	    	    player1.body.velocity.x = 200 * moveUp;
    	    	    player1.animations.play('right');
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x + 25, player1.y, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 300 * speedUp;
    	    	    	    player1Shoot.body.velocity.y = 0;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    else
    	    {
    	    	    player1.frame = 4;
    	    	    if ((game.time.now > player1ShootTime) && spaceKey.isDown)
    	    	    {
    	    	    	    player1MaxCount = player1MaxCount + 1;
    	    	    	    player1Shoot = player1ShootGroup.create(player1.x, player1.y + 25, 'star');
    	    	    	    player1Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player1Shoot);
    	    	    	    player1Shoot.body.collideWorldBounds = true;
    	    	    	    player1Shoot.body.bounce.setTo(1, 1);
    	    	    	    player1Shoot.body.velocity.x = 0;
    	    	    	    player1Shoot.body.velocity.y = 300 * speedUp;
    	    	    	    player1ShootTime = game.time.now + 1500 * rateUp;
    	    	    	    player1Shoot.animations.add('spin', [0, 1, 2, 3], 10, true);
    	    	    	    player1Shoot.animations.play('spin');
    	    	    }
    	    }
    	    
    	    player2.body.velocity.x = 0;
    	    player2.body.velocity.y = 0;
    	    if (cursors.up.isDown && cursors.right.isDown)
    	    {
    	    	    player2.body.velocity.y = -200 * moveUp2;
    	    	    player2.body.velocity.x = 200 * moveUp2;
    	    	    player2.animations.play('right');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x + 25, player2.y - 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = -300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.up.isDown && cursors.left.isDown)
    	    {
    	    	    player2.body.velocity.y = -200 * moveUp2;
    	    	    player2.body.velocity.x = -200 * moveUp2;
    	    	    player2.animations.play('left');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x - 25, player2.y - 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = -300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = -300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.down.isDown && cursors.right.isDown)
    	    {
    	    	    player2.body.velocity.y = 200 * moveUp2;
    	    	    player2.body.velocity.x = 200 * moveUp2;
    	    	    player2.animations.play('right');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x + 25, player2.y + 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = 300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.left.isDown && cursors.down.isDown)
    	    {
    	    	    player2.body.velocity.y = 200 * moveUp2;
    	    	    player2.body.velocity.x = -200 * moveUp2;
    	    	    player2.animations.play('left');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x - 25, player2.y + 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = -300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = 300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.up.isDown)
    	    {
    	    	    player2.body.velocity.y = -200 * moveUp2;
    	    	    player2.frame = 4;
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x, player2.y - 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 0;
    	    	    	    player2Shoot.body.velocity.y = -300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.down.isDown)
    	    {
    	    	    player2.body.velocity.y = 200 * moveUp2;
    	    	    player2.frame = 4;
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x, player2.y + 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 0;
    	    	    	    player2Shoot.body.velocity.y = 300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.left.isDown)
    	    {
    	    	    player2.body.velocity.x = -200 * moveUp2;
    	    	    player2.animations.play('left');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x - 25, player2.y, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = -300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = 0;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else if (cursors.right.isDown)
    	    {
    	    	    player2.body.velocity.x = 200 * moveUp2;
    	    	    player2.animations.play('right');
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x + 25, player2.y, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 300 * speedUp2;
    	    	    	    player2Shoot.body.velocity.y = 0;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    else
    	    {
    	    	    player2.frame = 4;
    	    	    if ((game.time.now > player2ShootTime) && enterKey.isDown)
    	    	    {
    	    	    	    player2MaxCount = player2MaxCount + 1;
    	    	    	    player2Shoot = player2ShootGroup.create(player2.x, player2.y + 25, 'star2');
    	    	    	    player2Shoot.scale.setTo(0.5, 0.5);
    	    	    	    game.physics.arcade.enable(player2Shoot);
    	    	    	    player2Shoot.body.collideWorldBounds = true;
    	    	    	    player2Shoot.body.bounce.setTo(1, 1);
    	    	    	    player2Shoot.body.velocity.x = 0;
    	    	    	    player2Shoot.body.velocity.y = 300 * speedUp2;
    	    	    	    player2ShootTime = game.time.now + 1500 * rateUp2;
    	    	    	    player2Shoot.animations.add('spin2', [0, 1, 2, 3], 10, true);
    	    	    	    player2Shoot.animations.play('spin2');
    	    	    }
    	    }
    	    */

       
    }
    
    function render() //housekeeping
    {
    	    //game.debug.cameraInfo(game.camera, 500, 32);
    	    //game.debug.spriteCoords(game.camera, 32, 32);
    }
    
    function touchB1()
    {
    	    bdown.x = 150;
    	    bdown.y = 450;
    	    choose1 = true;
    }
    
    function touchB2()
    {
    	    bdown.x = 874;
    	    bdown.y = 450;
    	    choose2 = true;
    }
    
    
    
    
    
    
    
    /*
    function killPlayer1(player, shot) //kill player one and reset
    {
    	    death.play();
    	    shot.destroy();
    	    player1Blood();
    	    player1.body.x = 50;
    	    player1.body.y = 150;
    	    player1Killed = player1Killed + 1;
    }
    
    function killPlayer2(player, shot) //kill player two and reset
    {
    	    death.play();
    	    shot.destroy();
    	    player2Blood();
    	    player2.body.x = 950;
    	    player2.body.y = 350;
    	    player2Killed = player2Killed + 1;
    }
    
    function player1Blood() //add some garnish to the death
    {
    	    game.add.sprite(player1.x, player1.y, bloodDict[game.rnd.integerInRange(0, 8)]);
    }
    
     function player2Blood() //add some garnish to the death
    {
    	    game.add.sprite(player2.x, player2.y, bloodDict[game.rnd.integerInRange(0, 8)]);
    }
    
    function player1Move() //movement rate powerup for player one
    {
    	    if (game.time.now > b1Time)
    	    {
    	    	    moveB.x = b1.x;
    	    	    moveB.y = b1.y;
    	    	    moveUp = 1.5;
    	    	    moveText = game.add.text(74, 550, 'Move Boost!', statusStyle);
    	    	    moveText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetMove1, null);
    	    	    b1Time = game.time.now + 7000;
    	    }
    }
    
    function player1Rate() //firing rate powerup for player one
    {
    	    if (game.time.now > b2Time)
    	    {
    	    	    rateB.x = b2.x;
    	    	    rateB.y = b2.y;
    	    	    rateUp = 0.5;
    	    	    rateText = game.add.text(174, 550, 'Rate Boost!', statusStyle);
    	    	    rateText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetRate1, null);
    	    	    b2Time = game.time.now + 7000;
    	    }
    }
    
    function player1Speed() //speed rate powerup for player one
    {
    	    if (game.time.now > b3Time)
    	    {
    	    	    speedB.x = b3.x;
    	    	    speedB.y = b3.y;
    	    	    speedUp = 1.5;
    	    	    speedText = game.add.text(274, 550, 'Speed Boost!', statusStyle);
    	    	    speedText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetSpeed1, null);
    	    	    b3Time = game.time.now + 7000;
    	    }
    }
    
    function player2Move() //movement rate powerup for player two
    {
    	    if (game.time.now > b1Time)
    	    {
    	    	    moveB.x = b1.x;
    	    	    moveB.y = b1.y;
    	    	    moveUp2 = 1.5;
    	    	    moveText = game.add.text(750, 550, 'Move Boost!', statusStyle);
    	    	    moveText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetMove2, null);
    	    	    b1Time = game.time.now + 7000;
    	    }
    }
    
    function player2Rate() //firing rate rate powerup for player two
    {
    	    if (game.time.now > b2Time)
    	    {
    	    	    rateB.x = b2.x;
    	    	    rateB.y = b2.y;
    	    	    rateUp2 = 0.5;
    	    	    rateText = game.add.text(850, 550, 'Rate Boost!', statusStyle);
    	    	    rateText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetRate2, null);
    	    	    b2Time = game.time.now + 7000;
    	    }
    }
    
    function player2Speed() //speed rate powerup for player two
    {
    	    if (game.time.now > b3Time)
    	    {
    	    	    speedB.x = b3.x;
    	    	    speedB.y = b3.y;
    	    	    speedUp2 = 1.5;
    	    	    speedText = game.add.text(950, 550, 'Speed Boost!', statusStyle);
    	    	    speedText.anchor.set(0.5);
    	    	    game.time.events.add(Phaser.Timer.SECOND * 7, resetSpeed2, null);
    	    	    b3Time = game.time.now + 7000;
    	    }
    }
    
    function resetMove1() //remove movement boost after 7 seconds for player 1
    {
    	    moveUp = 1.0;
    	    moveB.x = -500;
    	    moveB.y = -500;
    	    moveText.destroy();
    }
    
     function resetRate1() //remove firing rate boost after 7 seconds for player 1
    {
    	    rateUp = 1.0;
    	    rateB.x = -500;
    	    rateB.y = -500;
    	    rateText.destroy();
    }
    
     function resetSpeed1() //remove speed boost after 7 seconds for player 1
    {
    	    speedUp = 1.0;
    	    speedB.x = -500;
    	    speedB.y = -500;
    	    speedText.destroy();
    }
    
     function resetMove2() //remove movement boost after 7 seconds for player 2
    {
    	    moveUp2 = 1.0;
    	    moveB.x = -500;
    	    moveB.y = -500;
    	    moveText.destroy();
    }
    
     function resetRate2() //remove firing rate boost after 7 seconds for player 2
    {
    	    rateUp2 = 1.0;
    	    rateB.x = -500;
    	    rateB.y = -500;
    	    rateText.destroy();
    }
    
     function resetSpeed2() //remove speed boost after 7 seconds for player 2
    {
    	    speedUp2 = 1.0;
    	    speedB.x = -500;
    	    speedB.y = -500;
    	    speedText.destroy();
    }
     */
  
};
