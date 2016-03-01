var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { 
	preload: preload, 
	create: create, 
	update: update 
});

var player;
var platforms;
var stars;
var scoreText;
var score = 0;

function preload() {

  var assetsImages = [
  	['sky', "assets/sky.png"],
  	['ground', "assets/platform.png"],
  	['star', "assets/star.png"]
  ];

  preloadImages(assetsImages);

    var assetsSprites = [
        ['dude', 'assets/dude.png', 32, 48]
    ];

    preloadSpritesheet(assetsSprites);
};

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

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

function update() {

  var bodiesCollides = [ 
      [player, platforms], 
      [stars, platforms]
  ];

  collides(bodiesCollides);

  var bodiesOverlaps = [
      [player, stars, collectStar]
  ];

  overlaps(bodiesOverlaps);

  var playerHorizontalSpeed = 150;
  var playerVerticalSpeed = 350;

  dudeMoviment(playerHorizontalSpeed, playerVerticalSpeed);
};