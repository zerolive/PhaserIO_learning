describe("Game File", function(){
	describe("has a variable game", function(){
		it("is defined", function(){
			expect(game).toBeDefined();
		});
		it("contains something", function(){
			expect(game).not.toBeNull();
		});
		it("has argument width equal to 800", function(){
			var argumentWidth = 800;

			expect(game.width).toEqual(argumentWidth);
		});
		it("has argument height equal to 600", function(){
			var argumentHeight = 600;

			expect(game.height).toEqual(argumentHeight);
		});
		it("has argument renderer defined", function(){
			expect(game.renderer).toBeDefined();
		});
		it("argument renderer contais something", function(){
			expect(game.renderer).not.toBeNull();
		});
		it("argument parent is an empty string", function(){
			var parentArgument = '';

			expect(game.parent).toEqual(parentArgument);
		});
	});
	describe("has a method preload", function(){
		it("is defined", function(){
			expect(preload).toBeDefined();
		});
	});
	describe("has a method create", function(){
		it("is defined", function(){
			expect(create).toBeDefined();
		});
	});
	describe("has a method update", function(){
		it("is defined", function(){
			expect(update).toBeDefined();
		});
	});
});