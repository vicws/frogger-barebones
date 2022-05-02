//forces focus on p5js
window.onload = function() {
  this.focus();
}

let sfxQuack, sfxErrou, sfxWow, bgmMetal;

function preload(){  
  streetsBG = loadImage("sprites/bg.png");
  player = loadImage("sprites/pogchamp2.png");
  
  //top row
  firstCar = loadImage("sprites/car_1.png");
  secondCar = loadImage("sprites/car_2.png");
  thirdCar = loadImage("sprites/car_3.png");
  
  //bottom row
  firstCarB = loadImage("sprites/car_1_flipped.png");
  secondCarB = loadImage("sprites/car_3_flipped.png");
  thirdCarB = loadImage("sprites/car_2_flipped.png");
  cars = [firstCar, secondCar, thirdCar, firstCarB, secondCarB, thirdCarB]
  
  sfxQuack = loadSound("sounds/quack.mp3");
  sfxWow = loadSound("sounds/anime_wow.mp3");
  bgmMetal = loadSound("sounds/metal.wav");
  
  sfxQuack.setVolume(0.05);
  sfxWow.setVolume(0.05);
  bgmMetal.setVolume(0.05)
}

function setup() {
  createCanvas(xCanvas, yCanvas);
  bgmMetal.loop();
}

function draw() {
  background(streetsBG, x, y);
  drawGame();
  checkCollisions();
  settleScores();
  handleMovement();
}
