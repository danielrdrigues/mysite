

var canvas = { 
    
}

var snake = { 
    snakeBody: null,
    "posX": 400,
    "posY": 400,
    "dir": 'R'
}

var game = { 
    "speed": 10
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
    snake.snakeBody = rect(snake.posX, snake.posY, 30, 20, 0);
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
    switch(snake.dir) {
        case "U":
            snake.posY -= 10;
            break;    
        case "D":
            snake.posY += 10;
            break;
        case "L":
            snake.posX -= 10;
            break;
        case "R":
            snake.posX += 10;
            break;
    }
     $("#snakeX")[0].innerText = snake.posX;
     $("#snakeY")[0].innerText = snake.posY;
    // snake.posX += 10;
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
        snake.dir = 'U';
        break;    
    case "ArrowDown":
        snake.dir = 'D';
        break;
    case "ArrowLeft":
        snake.dir = 'L';
        break;
    case "ArrowRight":
        snake.dir = 'R';
        break;
    case "Delete":
        clear();
        background("#2f2");
        console.log("clearingClean")
        break;
    }
   e.preventDefault();
   
   //drawRect();
//    clear();
      //if(key)
});

setInterval(()=>gameLoop(), 1000 / game.speed)

var cobra = [1]