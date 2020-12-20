//Please check it on the P5 Editor:
//https://editor.p5js.org/wwang30/sketches/dHWstXGKT

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
    c.t = random(5, 35);
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
}; //c for color

let model;
let targetLabel = 'C';
let state = 'collection';

//variation of sound
let notes = {
  C: 261.6256,
  D: 293.6648,
  E: 329.6276,
  F: 349.2282,
  G: 391.9954,
  A: 440.0000,
  B: 493.8833
};

let env, wave;



function setup() {

  createCanvas(800, 500);

  //import the sound
  env = new p5.Envelope();
  env.setADSR(0.05, 0.1, 0.5, 0.7);
  env.setRange(1.2, 0);
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start();
  wave.freq(440);
  wave.amp(env);

  let options = {
    inputs: ['x', 'y'],
    outputs: ['label'],
    task: 'classification',
    debug: 'true'
  };

  model = ml5.neuralNetwork(options);
  
  const modelDetails = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin'
  }

  model.load(modelDetails, modelLoaded);

}



function modelLoaded() {

  console.log('Model Loaded');
  state = 'prediction';

}



function keyPressed() {

  if (key == 't') {
    state = 'training';
    console.log('starting training');
    model.normalizeData();
    //function in ml5: look at the minimums and maximums of all of your input data and normalize it. Call it before training the model.
    let options = {
      epochs: 200
      //epochs:sending stuff through the neural network xxx times
    }
    model.train(options, whileTraining, finishedTraining);
    //Train Model

  } else if (key == 's') {
    model.saveData('mouse-notes');
    //Save the collected data after defining

  } else if (key == 'm') {
    model.save('model');
    //Save the model

  } else {
    targetLabel = key.toUpperCase();
    //targetLabel: for collecting for different catagories
  }

}



//These callbacks work as debugging tools to look at how the training process is going
function whileTraining(epoch, loss) {
  console.log(epoch);
}



//These callbacks work as debugging tools to look at how the training process is going
function finishedTraining() {
  console.log('Finished Traininig');
  state = 'prediction';
}



function mousePressed() {

  let r = random(50, 120);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);

  let inputs = {
    x: mouseX,
    y: mouseY
  }

  if (state == 'collection') {

    let target = {
      label: targetLabel
    }

    model.addData(inputs, target);
    //function in the ml5 neural network class where the model can accept training data as pairs of inputs and targets

    wave.freq(notes[targetLabel]);
    //this will look up the numeric frequency associated with that label and set the sound oscillator to that frequency
    env.play();

  } else if (state == 'prediction') {
    model.classify(inputs, gotResults);
  }

}



function mouseDragged() {

  let r = random(50, 100);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);

  let inputs = {
    x: mouseX,
    y: mouseY
  }

  if (state == 'collection') {

    let target = {
      label: targetLabel
    }

    model.addData(inputs, target);
    //function in the ml5 neural network class where the model can accept training data as pairs of inputs and targets

    wave.freq(notes[targetLabel]);
    //this will look up the numeric frequency associated with that label and set the sound oscillator to that frequency
    env.play();

  } else if (state == 'prediction') {
    model.classify(inputs, gotResults);
  }

}



function gotResults(error, results) {

  if (error) {
    cosole.error(error);
    return;
  }

  console.log(results);
  let label = results[0].label
  wave.freq(notes[label]);
  env.play();

}



function draw() {

  background(255, 255, 245);

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

  if (bubbles.length > 20) {
    bubbles.splice(0, 1)
  }

}
