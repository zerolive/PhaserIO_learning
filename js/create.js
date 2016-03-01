var gameAdd = function(){
    game.add.sprite(0, 0, 'sky');

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    platforms = game.add.group();
        platforms.enableBody = true;
        var ground = platforms.create(0, game.world.height - 64, 'ground');
            ground.body.immovable = true;
            ground.scale.setTo(2, 2);
        var ledgeright = platforms.create(400, 400, 'ground');
            ledgeright.body.immovable = true;
        var ledgeleft = platforms.create(-150, 250, 'ground');
            ledgeleft.body.immovable = true;

    player = game.add.sprite(32, game.world.height - 150, 'dude');
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;
        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);

    stars = game.add.group();
        stars.enableBody = true;
        createStars(12);
};

function createStars(numberOfStars){
    for(var i = 0; i < numberOfStars; i++){
        var star = stars.create(i * 70, 0, 'star');
            star.body.gravity.y = 300;
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
    };
};