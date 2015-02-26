window.onload = function()
{
    // William CS 325 Digital Assignment #4
    // Choose the Organ Recipient
    
    "use strict";
    
    var game = new Phaser.Game( 1024, 576, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render} );
   
 
    function preload() //load assets
    {
    	    game.load.image( 'back', 'assets/back.png' );
    	    game.load.image( 'endback', 'assets/endback.png' );
    	    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    	    game.load.image( 'b1', 'assets/b1.png' );
    	    game.load.image( 'b2', 'assets/b2.png' );
    	    game.load.image( 'bdown', 'assets/bdown.png' );
    	    game.load.audio('beat', 'assets/beat.mp3');
    	    game.load.audio('tick', 'assets/tick.mp3');
    }
    //variables
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
    var textTitleStyle = { font: "40px Arial", fill: "#000000", align: "center" };
    var p1text1 = ['Patient 1\nAge: 54\nEducator', 'Patient 1\nAge: 54\nEducator\nCancer Survivor', 'Patient 1\nAge: 54\nEducator\nCancer Survivor\nRecently Divorced'];
    var p2text1 = ['Patient 2\nAge: 51\nCustodian', 'Patient 2\nAge: 51\nCustodian\nDiabetic', 'Patient 2\nAge: 51\nCustodian\nDiabetic\nHas a Learning\nDisability'];
    var p1text2 = ['Patient 1\nAge: 25\nProstitute', 'Patient 1\nAge: 25\nProstitute\nMethamphetamine\nAddict', 'Patient 1\nAge: 25\nProstitute\nMethamphetamine\nAddict\nAttempted Suicide\nMultiple Times'];
    var p1text3 = ['Patient 1\nAge: 15\nWard of the State', 'Patient 1\nAge: 15\nWard of the State\nMathematical Genius', 'Patient 1\nAge: 15\nWard of the State\nMathematical Genius\nMurdered Family\nWhen Age 12'];
    var p1text4 = ['Patient 1\nAge: 33\nDay Laborer', 'Patient 1\nAge: 33\nDay Laborer\nConvicted Felon', 'Patient 1\nAge: 33\nDay Laborer\nConvicted Felon\nAvid Knitter'];
    var p1text5 = ['Patient 1\nAge: 24\nWorks Retail', 'Patient 1\nAge: 24\nWorks Retail\nNo Family', 'Patient 1\nAge: 24\nWorks Retail\nNo Family\nHIV Positive'];
    var p2text2 = ['Patient 2\nAge: 38\nExecutive', 'Patient 2\nAge: 38\nExecutive\nServed Time for\nEmbezzlement', 'Patient 2\nAge: 38\nExecutive\nServed Time for\nEmbezzlement\nDonates to\nHate Groups'];
    var p2text3 = ['Patient 2\nAge: 70\nWalmart\nEmployee', 'Patient 2\nAge: 70\nWalmart\nEmployee\nFormer Alcoholic', 'Patient 2\nAge: 70\nWalmart\nEmployee\nFormer Alcoholic\nLives Alone'];
    var p2text4 = ['Patient 2\nAge: 22\nOn Welfare', 'Patient 2\nAge: 22\nOn Welfare\nPregnant', 'Patient 2\nAge: 22\nOn Welfare\nPregnant\nHistory of\nCocaine Abuse'];
    var p2text5 = ['Patient 2\nAge: 52\nUnemployed', 'Patient 2\nAge: 52\nUnemployed\nThree Children', 'Patient 2\nAge: 52\nUnemployed\nThree Children\nConvicted Rapist'];
    var textArray1 = [p1text1, p1text2, p1text3, p1text4, p1text5];
    var textArray2 = [p2text1, p2text2, p2text3, p2text4, p2text5];
    var startTime;
    var timeText;
    var firstRun = true;
    var choiceArray = [3, 3, 3, 3, 3];
    var runCount = 0;
    var choice = ['1st', '2nd', '3rd', '4th', '5th'];
    var choiceText = ['', 'choose patient 1', 'choose patient 2', 'did not select any organ recipient'];
    var gameRunning = true;
    var hurryText;
    var beat;
    
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
    	    
    	    text1 = game.add.text(75, 75, textArray1[0][0], textStyle);
    	    text2 = game.add.text(780, 75, textArray2[0][0], textStyle);
    	    var titleText = game.add.text(280, 15, 'Choose the Organ Recipient', textTitleStyle);
    	    timeText = game.add.text(450, 75, 'PTime Left: ' + Math.floor(((15999 - (game.time.now - startTime)) / 1000) % 60), textTimeStyle);
    	    hurryText = game.add.text(470, 270, '', textTitleStyle);
    	        	        	    
    	    cursors = game.input.keyboard.createCursorKeys();
    	    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	    
    	    beat = game.add.audio('beat');
    	    beat.play('',0,0.1,true);
    	    
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
    	    	    if (firstRun) //prevent game from starting on first load
    	    	    {
    	    	    	    startTime = game.time.now;
    	    	    	    firstRun = false;
    	    	    }
    	    	    
    	    	    game.scale.startFullScreen(true);
    	    	    game.paused = false;
    	    }
    }
    
    function update() //check every frame
    {
    	    if (gameRunning) //kill game update checks when end is reached
    	    {
    	    	    timeText.setText('Time Left: ' + Math.floor(((15999 - (game.time.now - startTime)) / 1000) % 60));
    	    	       	    
    	    	    if (((game.time.now - startTime) < 5000))
    	    	    {
    	    	    	    hurryText.setText('');
    	    	    	    text1.setText(textArray1[runCount][0]);
    	    	    	    text2.setText(textArray2[runCount][0]);
    	    	    }
    	    	    else if (((game.time.now - startTime) > 5000) && ((game.time.now - startTime) < 10000))
    	    	    {
    	    	    	    hurryText.setText('');
    	    	    	    text1.setText(textArray1[runCount][1]);
    	    	    	    text2.setText(textArray2[runCount][1]);
    	    	    }
    	    	    else if (((game.time.now - startTime) > 10000) && ((game.time.now - startTime) < 15999))
    	    	    {
    	    	    	    hurryText.setText('Hurry!');
    	    	    	    text1.setText(textArray1[runCount][2]);
    	    	    	    text2.setText(textArray2[runCount][2]);  
    	    	    }
    	    
    	    	    if (Math.floor(((15999 - (game.time.now - startTime)) / 1000) % 60) <= 0)
    	    	    {
    	    	    	    startTime = game.time.now;
    	    	    	    if (choose1 === true)
    	    	    	    {
    	    	    	    	    choiceArray[runCount] = 1;
    	    	    	    	    runCount = runCount + 1;
    	    	    	    }
    	    	    	    else if (choose2 === true)
    	    	    	    {
    	    	    	    	    choiceArray[runCount] = 2;
    	    	    	    	    runCount = runCount + 1;
    	    	    	    }
    	    	    	    else
    	    	    	    {
    	    	    	    	    runCount = runCount + 1;
    	    	    	    }
    	    	    	    if (runCount === 5)
    	    	    	    {
    	    	    	    	    gameRunning = false;
    	    	    	    	    endGame();
    	    	    	    }
    	    	    }
    	    	    //player movement    	    
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
    	    }
    }
    
    function render() //housekeeping
    {
    	    //game.debug.cameraInfo(game.camera, 500, 32);
    	    //game.debug.spriteCoords(game.camera, 32, 32);
    }
    
    function touchB1() //player standing on button 1
    {
    	    bdown.x = 150;
    	    bdown.y = 450;
    	    choose1 = true;
    }
    
    function touchB2() //player standing on button 2
    {
    	    bdown.x = 874;
    	    bdown.y = 450;
    	    choose2 = true;
    }
    
    function endGame() //show the final screen and summarize decisions
    {
    	    var endback = game.add.sprite(0, 0, 'endback');
    	    var tx1 = 'For your ' + choice[0] + ' choice you ' + choiceText[choiceArray[0]] + '.\n\n';
    	    var tx2 = 'For your ' + choice[1] + ' choice you ' + choiceText[choiceArray[1]] + '.\n\n';
    	    var tx3 = 'For your ' + choice[2] + ' choice you ' + choiceText[choiceArray[2]] + '.\n\n';
    	    var tx4 = 'For your ' + choice[3] + ' choice you ' + choiceText[choiceArray[3]] + '.\n\n';
    	    var tx5 = 'For your ' + choice[4] + ' choice you ' + choiceText[choiceArray[4]] + '.\n\n';
    	    var endtext = game.add.text(110, 30, tx1 + tx2 + tx3 + tx4 + tx5 + 'Did more information make your decision easier or harder?\n\nDid the words used cause preconceptions about the patients?', textStyle);
    }
};
