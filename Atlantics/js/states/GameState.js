
// Creating a global variable for layers array.
var layers = [];
var player;

var GameState = { 

    preload: function() {

        // Setting the scaling mode for the Game State.
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

		this.game.world.setBounds (0, 0, 2000, 2000);

        // Loading the background image.
        this.game.load.image('background', 'assets/images/background.jpg');

        // Loading the map in JSON and the tileset for the tilemap as a image.
        this.game.load.tilemap('tilemap', 'assets/maps/tilemap.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tileset', 'assets/maps/tileset.png', 16, 16);

		this.game.load.spritesheet('player', 'assets/images/dude.png', 288/9, 40, 9);
    },

    create: function() {

        // Setting the background as a image.
        this.background = this.game.add.sprite(0, 0, 'background');

        // Adding the map in JSON and the tileset for the tilemap as a image.
        this.map = this.game.add.tilemap('tilemap');
        this.map.addTilesetImage('tileset', 'tileset');

        // Creating all of the layers. Could be done in an array, containing all of the layers. Could be done in a single variable.
        // !!! The order is important and it could be different from the order in the JSON file. In this case IT IS.

        layers[3] = this.map.createLayer('3');   
        layers[0] = this.map.createLayer('0');
        layers[1] = this.map.createLayer('1');
        layers[2] = this.map.createLayer('2');
		
		
		player = this.game.add.sprite (500, 500, 'player');
		player.animations.add('walk-left', [0, 1, 2, 3], 10, true, 4);
		player.animations.add('walk-right', [5, 6, 7, 8], 10, true, 4);

		this.game.camera.follow (player);

    }       
};
