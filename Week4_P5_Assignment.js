//p5.js 
//https://editor.p5js.org/wwang30/present/ISDnK_E0q

function setup() {
  createCanvas(900, 500);
}


function draw() {
  
  background(255);

  var r = random();
  var g = random();
  var b = random();

  fill(r, g, b);
  noStroke();
  
  if (mouseX > 0 && mouseX < 300) {
    fill(0, 100, b);
  }
  
  if (mouseX > 300 && mouseX < 600) {
    fill(100, g, 0);
  }
  
  if (mouseX > 600 && mouseX < 900) {
    fill(r, 0, 100);
  }

  
  for (var x = 0; x <= width; x = x + 50) {
    for (var y = 0; y <= height; y = y + 50) {
      ellipse(x, y, 50 * random(), 50 * random());
    }
  }

}
