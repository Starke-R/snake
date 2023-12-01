import { drawPlayer, playerMovement } from "./snakeMovement.js";

//let bgImg = document.getElementById("backgroundImage");


//import { drawEnemies, updateEnemies, spawnEnemy, tickEnemySpawning } from "./enemies.js";
//import { playerLaser, laser } from "./playerlaser.js";
//import { enemyLaser, laserEnemy } from "./enemylaser.js";


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 900;



//event-listener som lyssnar om någon pil-knapp trycks ner
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        game.player.keys.left = true;

    } if (event.key === "ArrowRight") {
        game.player.keys.right = true;

    } if (event.key === "ArrowUp") {
        game.player.keys.up = true;

    } if (event.key === "ArrowDown") {
        game.player.keys.down = true;
    }
    //event-listener för att skjuta (om mellanslag trycks ner)
    if (event.key === " ") {
        laser.shoot = true,
            laser(game);
        //console.log("skjut")
    }
});

//event-listener som lyssnar om någon pil-knapp släpps (åker upp)
window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") {
        game.player.keys.left = false;
    } if (event.key === "ArrowRight") {
        game.player.keys.right = false;
    } if (event.key === "ArrowUp") {
        game.player.keys.up = false;
    } if (event.key === "ArrowDown") {
        game.player.keys.down = false;
    }
    //för att sluta skjuta (känner av om mellanslag släpps upp)
    if (event.key === " ") {
        game.player.shoot = false
    }
});





let game = initGame(canvas.width, canvas.height);


function initGame(gameWidth, gameHeight) {

    requestAnimationFrame(() => tick(ctx, game));

    return {
        
        player: {
            x: canvas.width / 2 - 25,
            y: canvas.height / 2 - 25,
            width: 20,
            height: 10,
            speed: 300,
            angle: 0, 
            keys: {
                left: false,
                right: false,
                up: false,
                down: false,
                shoot: false,
            },
        },
        
        enemies: [],
        enemySpawnTimer: 1,


        points: 0,
        health: 3,
        level: 1,

        gameWidth,
        gameHeight,

        lastTime: Date.now(),
        deltaTime: 0,
        levelSpeed: 1,

        gameWidth,
        gameHeight,
    }
}


let levelSpeed = 1;

function tick(ctx, game, levelSpeed) {
  
  
  //function tick(game)  
    let now = Date.now();
    game.deltaTime = (now - game.lastTime) / 1000;
    game.lastTime = now;

   
  



    //ctx.drawImage(bgImg, 0, 0, gameWidth, gameHeight);


   // Laddar in spelaren
    drawPlayer(ctx, game.player);
    playerMovement(game);



    /*
    // Laddar in fiender
    drawEnemies(ctx, game);
    updateEnemies(game);
    tickEnemySpawning(game);
    */


    requestAnimationFrame(() => tick(ctx, game));

}