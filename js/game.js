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

    gameAdd();

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