var FIRSTBODY = 0;
var SECONDBODY = 1;
var METHODOVERLAP = 2;

var collides = function(bodiesCollides){

    for(var i = 0; i < bodiesCollides.length; i++){
        var bodiesCollide = bodiesCollides[i];
        game.physics.arcade.collide(bodiesCollide[FIRSTBODY], bodiesCollide[SECONDBODY]);
    };
};

var overlaps = function(bodiesOverlaps){

    for(var i = 0; i < bodiesOverlaps.length; i++){
        var bodiesOverlap = bodiesOverlaps[i];
        game.physics.arcade.overlap(bodiesOverlap[FIRSTBODY], 
                                    bodiesOverlap[SECONDBODY], 
                                    bodiesOverlap[METHODOVERLAP], 
                                    null, this
        );
    };
};

var collectStar = function(player, star) {

    star.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
};

var dudeMoviment = function(hSpeed, vSpeed){

    var cursors = game.input.keyboard.createCursorKeys();

    player.body.velocity.x = 0;

    if(cursors.left.isDown){
        player.body.velocity.x = -hSpeed;
        player.animations.play('left');
    };
    if(cursors.right.isDown){
        player.body.velocity.x = hSpeed;
        player.animations.play('right');
    };
    if(!cursors.right.isDown && !cursors.left.isDown){
        player.animations.stop();
    };

    if(cursors.up.isDown && player.body.touching.down){
        player.body.velocity.y = -vSpeed;
    };
};