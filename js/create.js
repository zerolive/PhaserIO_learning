var gameAdd = function(){
  game.add.sprite(0, 0, 'sky');

  scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

  var platformsToadded = [
    [0, (game.world.height - 64), 'ground', 2],
    [400, 400, 'ground', 1],
    [-150, 250, 'ground', 1]
  ];
  createPlatforms(platformsToadded);

  var playerProperties = [32, (game.world.height - 150), 'dude', 0.2, 300];
  var playersAnimations = [
    ['left', [0, 1, 2, 3], 10, true],
    ['right', [5, 6, 7, 8], 10, true]
  ];
  createPlayer(playerProperties, playersAnimations);

  var numberOfStars = 12;
  createStars(numberOfStars);
};

var X = 0;
var Y = 1;
var KEY = 2;
var BOUNCE = 3;
var GRAVITY = 4;
var NAME = 0; //repeated in other file
var FRAMES = 1;
var FRAMERATE = 2;
var LOOP = 3;

var createPlayer = function(properties, animations){
  player = game.add.sprite(properties[X], properties[Y], properties[KEY]);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.bounce.y = properties[BOUNCE];
    player.body.gravity.y = properties[GRAVITY];
    playersAnimations(animations);

    function playersAnimations(animations){
      for(var i = 0; i<animations.length; i++){
        var animation = animations[i];
        player.animations.add(animation[NAME],
                                            animation[FRAMES],
                                            animation[FRAMERATE],
                                            animation[LOOP]);
      };
    };
};

var createPlatforms = function(platformsToadded){
  platforms = game.add.group();
    platforms.enableBody = true;
    addPlatforms(platformsToadded);

  function addPlatforms(platformsToadded){
    for(var i = 0; i < platformsToadded.length; i++){
      var platform = platformsToadded[i];

      var ground = platforms.create(platform[0], platform[1], platform[2]);
            ground.body.immovable = true;
            ground.scale.setTo(platform[3], platform[3]);
    };
  };
};

var createStars = function(numberOfStars){
  stars = game.add.group();
    stars.enableBody = true;
    addStars(numberOfStars);

  function addStars(numberOfStars){
    for(var i = 0; i < numberOfStars; i++){
      var star = stars.create(i * 70, 0, 'star');
        star.body.gravity.y = 300;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    };
  };
};