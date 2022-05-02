let hit = false
function checkCollisions() {
  for (let i = 0; i < cars.length; i++){
    
    hit = collideRectRect(xCars[i], yCars[i], wCars, hCars, xPlayer, yPlayer, wPlayer, hPlayer)
    
    if (hit) {
      sfxQuack.play();
      xPlayer = x * 0.4725;
      yPlayer = y * 0.91;
      
      if (score > 0){
        score--;
      }      
      if(speed > x * 0.004){
        speed /= 1.25;
      }
    }
  }
}

function settleScores(){
  if (yPlayer <= y * 0.01){
    score++;
    sfxWow.play();
    
    //resets player
    xPlayer = x * 0.4725;
    yPlayer = y * 0.91;
    
    //increases cars' speed
    speed *= 1.25;
  }
}

let speed = x * 0.004;
function handleMovement(){
//car movement
  xCars[0] -= speed * 1.1;
  xCars[1] -= speed * 1.5;
  xCars[2] -= speed * 1.25;

  xCars[3] += speed * 1.4;
  xCars[4] += speed * 1.2;
  xCars[5] += speed * 1;

//loops top row
  if (xCars[0] < -wCars){
    xCars[0] = x + wCars / 5  
  }
  if (xCars[1] < -wCars){
    xCars[1] = x + wCars / 5  
  }
  if (xCars[2] < -wCars){
    xCars[2] = x + wCars / 5  
  }
//loops bottom row
  if (xCars[3] > x + wCars / 5){
    xCars[3] = -wCars
  }
  if (xCars[4] > x + wCars / 5){
    xCars[4] = -wCars
  }
  if (xCars[5] > x + wCars / 5){
    xCars[5] = -wCars
  }

//player movement  
  if (yPlayer > y * 0.01 && keyIsDown(UP_ARROW)){
    yPlayer -= y * 0.01;
  }
  if (yPlayer < y * 0.91 && keyIsDown(DOWN_ARROW)){
    yPlayer += y * 0.01;
  }
  if (xPlayer > 0 && keyIsDown(LEFT_ARROW)){
    xPlayer -= x * 0.006;
  }
  if (xPlayer < x * 0.94 && keyIsDown(RIGHT_ARROW)){
    xPlayer += x * 0.006;
  }
}