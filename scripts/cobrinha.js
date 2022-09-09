


const click = new Event("click");
const button = document.getElementById("navJogos");
button.dispatchEvent(click);
var canvas = { 
    
}

var Snake = { 
    snakeBody: null,
    "posX": 400,
    "posY": 400,
    "dir": 'R'
}

var Game = { 
    "speed": 10,
    "isPaused": 0
}

function setup() {
    var snakeCanva = createCanvas(900, 700);
    snakeCanva.parent("snakeCanvaContainer").id("snakeCanva");

}
  
function drawRect() {
    
   
    
    // fill("black");
    // re2 = rect(200, 300, 55, 55, 20, 20, 10, 5);
    // re2.color("black");
    // fill(255);
}
 
function drawCanva() {
   
    fill("#2f2");
    Snake.snakeBody = rect(Snake.posX, Snake.posY, 30, 20, 0);
   // re1 = rect(snake.posX, snake.posY, 30, 20, 0);
   clear()
   background("#2f2")
    // fill("black");
    // re2 = rect(200, 300, 55, 55, 20, 20, 10, 5);
    // re2.color("black");
    //  fill(255);
}

// function toLeft

function gameLoop(){
    console.log($("#snakeSpeed").val())
    Game.speed = $("#snakeSpeed").val()
    switch(Snake.dir) {
        case "U":
            Snake.posY -= 10;
            break;    
        case "D":
            Snake.posY += 10;
            break;
        case "L":
            Snake.posX -= 10;
            break;
        case "R":
            Snake.posX += 10;
            break;
    }
     $("#snakeX")[0].innerText = Snake.posX;
     $("#snakeY")[0].innerText = Snake.posY;
    // Snake.posX += 10;
    //gameLoop();
    clear();
    const canvas = document.querySelector('#snakeCanva');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,900,900);
    drawCanva();
}

document.addEventListener('keydown', (e) => {
   console.log(e.key);
   switch(key) {
    case "ArrowUp":
        Snake.dir = 'U';
        break;    
    case "ArrowDown":
        Snake.dir = 'D';
        break;
    case "ArrowLeft":
        Snake.dir = 'L';
        break;
    case "ArrowRight":
        Snake.dir = 'R';
        break;
    case "Pause":
        console.log("pause")
        if(Game.isPaused)
        clearInterval(game);
        break;
    }
   e.preventDefault();
   
   //drawRect();
//    clear();
      //if(key)
});

gameTick =  1000 / Game.speed

var game = setInterval(()=> {
    gameLoop()
},gameTick)


var cobra = [1]