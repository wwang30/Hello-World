//reference:The Coding Train Tutorial
//https://editor.p5js.org/wwang30/sketches/C3iAISYay

let snake;
let resolution = 20;
let food;
let w;
let h; 

class Snake {

  constructor() {
    this.length = 1; 
    this.body = []; 
    this.body[0] = createVector(floor(w / 2), floor(h / 2));

    this.xdir = 0;
    this.ydir = 0; 
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift(); 
    head.x += this.xdir;
    head.y += this.ydir; 
    this.body.push(head);
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.length++;
    this.body.push(head); 
  }

  eat(position) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y; 
    
    if (x == position.x && y == position.y) {
      this.grow();
      return true;
    }
    return false; 
  }

  endGame() {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    
    if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
      return true;
    } 

    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (part.x == x && part.y == y) {
        return true;
      }
    } 
    return false;
  } 

  show() {
    for (let i = 0; i < this.body.length; i++) {
      
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

}

function setup() {
  createCanvas(400, 400);
  frameRate(5); 

  w = floor(width / resolution); 
  h = floor(height / resolution);

  foodLocation();
  
  snake = new Snake();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y); 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  }
}


function draw() {
  scale(resolution);
  background(220);

  if (snake.eat(food)) {
    foodLocation();
  } 

  snake.update(); 
  snake.show(); 

  if (snake.endGame()) {
    print("End Game");
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
