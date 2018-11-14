
// Inicializating the global instance for the game, which is just an object from type Phaser.Game.
// Usually we have tree more parameters. In this case we do not need them.
var game = new Phaser.Game(720, 360, Phaser.AUTO);

// Adding all of the states.
game.state.add('GameState', GameState);

// Starting the first State.
game.state.start('GameState');
