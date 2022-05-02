let xCanvas = window.innerWidth * 0.7;
let yCanvas = xCanvas * 0.6;
let x = xCanvas;
let y = yCanvas;

if (xCanvas < window.innerWidth && yCanvas > window.innerHeight){
  yCanvas = window.innerHeight * 0.7;
  xCanvas = yCanvas / 0.6;
  x = xCanvas;
  y = yCanvas;
}

//sprites & top row
let player, firstCar, secondCar, thirdCar, streetsBG;

//bottom row
let firstCarB, secondCarB, thirdCarB;

//coordinates
let xTopRow = x * 0.89;
let xBottomRow = x * 0.01;

let xPlayer = x * 0.4725;
let yPlayer = y * 0.91;
let wPlayer = x * 0.06;
let hPlayer = y * 0.08;
let score = 0;


let xCars = [xTopRow, xTopRow, xTopRow, xBottomRow, xBottomRow, xBottomRow];
let yCars = [y*0.1, y*0.24, y*0.37, y*0.53, y*0.66, y*0.8];
let wCars = x * 0.1
let hCars = y * 0.1

function drawGame(){
  image(player, xPlayer, yPlayer, wPlayer, hPlayer);
  
  for (let i = 0; i < cars.length; i++)
  image(cars[i], xCars[i], yCars[i], wCars, hCars);
  
  fill(255);
  textAlign(CENTER);
  textSize(yCanvas * 0.06);
  text(score, (xCanvas * 0.5), (yCanvas * 0.07));
}

