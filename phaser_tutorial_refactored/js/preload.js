var NAME = 0;
var ROUTE = 1;
var FRAMEWIDHT = 2;
var FRAMEHEIGHT = 3;

var preloadImages = function(assetsImages){

	for(var i = 0; i < assetsImages.length; i++){
		var assetsImage = assetsImages[i];
		game.load.image(assetsImage[NAME], assetsImage[ROUTE]);
	};
};

var preloadSpritesheet = function(sprites){

	for(var i = 0; i < sprites.length; i++){
		var sprite = sprites[i];
		game.load.spritesheet(sprite[NAME], 
							sprite[ROUTE], 
							sprite[FRAMEWIDHT], 
							sprite[FRAMEHEIGHT]
		);
	};
};