var database;
var gameState, playerCount;
var form, game, player;

function setup(){

    gameState = 0;

    database = firebase.database();

    createCanvas(500,500)

    playerCount = 0;

   game = new Game();

   game.readState();
    console.log("sketch.js")
   game.startGame();


  

}

function draw(){
    background("white");

    
    
}


