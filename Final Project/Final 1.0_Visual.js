//Please check it on the P5 Editor:
//https://editor.p5js.org/wwang30/sketches/OjOu4lcRD

//Brief Overview:

// bubble.js:

class Bubble {

  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  move() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }

  show() {

    noStroke();

    c.r = random(25, 0);
    c.g = random(155, 0);
    c.b = random(255, 0);
    c.t = random(15, 35);
    fill(c.r, c.g, c.b, c.t);

    ellipse(this.x, this.y, this.r, this.r);

  }

}


// sketch.js:

let bubbles = [];
var c = {
  r: 0,
  g: 0,
  b: 0,
  t: 0
};


function setup() {
  createCanvas(800, 500);
}


function mousePressed() {
  let r = random(50, 100);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}


function mouseDragged() {
  let r = random(50, 100);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}


function draw() {

  background(255,255,245);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

  if (bubbles.length > 20) {
    bubbles.splice(0, 1)
  }

}
