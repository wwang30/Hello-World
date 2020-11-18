//p5.js 
//https://editor.p5js.org/wwang30/sketches/0p9Ep4gw8

let video;
let poseNet;
let leftShoulderX = 0;
let leftShoulderY = 0;
let pikachu;

function preload() {
  pikachu = loadImage("pikachu.png");
}


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    leftShoulderX = poses[0].pose.keypoints[5].position.x;
    leftShoulderY = poses[0].pose.keypoints[5].position.y;
  }
}

function draw() {
  image(video, 0, 0);
  fill(255, 0, 0);
  image(pikachu,leftShoulderX-100, leftShoulderY-170, 200,200);

}
