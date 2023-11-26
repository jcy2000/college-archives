let tutorialPhase = true;
let xPlayerPosition = 185, yPlayerPosition = 350;
let projectileInPlay = false;
let xProjectilePosition, yProjectilePosition;
let targetHits = [];

function setup() {
  createCanvas(400, 400);
  colorMode(RGB,255,255,255,1);

  for(let i = 0; i < 7; i++)
    targetHits[i] = 0;
}

function draw() {
  background(200);
  let c = color(0,200,0); fill(c); stroke(0);
  triangle(xPlayerPosition, yPlayerPosition, xPlayerPosition + 15, yPlayerPosition + 25, xPlayerPosition - 15, yPlayerPosition + 25);
  line(0,323,400,323);

  tutorial();
  playerMovement();
  drawTargets();

  if(projectileInPlay == true) {
    moveProjectile();
    collsionCheck();
  }
    
}

function tutorial() {
  if(tutorialPhase) {
    fill(0); stroke(255);
    text("This is a training exercise, shoot the targets as",60,190);
    text("many times as you'd like and exit at your leisure.",60,210);
    text("Move = WASD      Fire = Spacebar",75,230);
    text("Click the screen to disable the tuturial",75,250);
  }
}

function playerMovement() {
  let speed = 3;

  if(keyIsDown(UP_ARROW) && yPlayerPosition > 325)
    yPlayerPosition -=speed;
  else if(keyIsDown(DOWN_ARROW) && yPlayerPosition < 373)
    yPlayerPosition +=speed;
  else if(keyIsDown(LEFT_ARROW) && xPlayerPosition > 15)
    xPlayerPosition -=speed;
  else if(keyIsDown(RIGHT_ARROW) && xPlayerPosition < 385)
    xPlayerPosition +=speed;
}

function moveProjectile() {
  stroke(255);

  if(yProjectilePosition > 2)
    yProjectilePosition -=8;
  else
    projectileInPlay = false;

  line(xProjectilePosition, yProjectilePosition, xProjectilePosition, yProjectilePosition-4);
}

function drawTargets() {
  let targetCounter = 0;

  for(let i = 40; i < 375; i +=50) {
    c = color(200,0,0); fill(c); stroke(c);
    circle(i, 25, 26);

    noFill(); stroke(0);
    circle(i,25,15);

    fill(0); stroke(255)
    text(targetHits[targetCounter],i-3,50);
    targetCounter++;
  }
}

function collsionCheck() {
  if(yProjectilePosition < 38) {
    fill(0); stroke(0);
    if(xProjectilePosition > 27 && xProjectilePosition < 53) {
      targetHits[0]++;
      circle(40, 25, 26);
      projectileInPlay = false;
    }
    else if(xProjectilePosition > 77 && xProjectilePosition < 103) {
      targetHits[1]++;
      circle(90, 25, 26);
      projectileInPlay = false;
    }
    else if(xProjectilePosition > 127 && xProjectilePosition < 153) {
      targetHits[2]++;
      circle(140, 25, 26);
      projectileInPlay = false;
    }
    else if(xProjectilePosition > 177 && xProjectilePosition < 203) {
      targetHits[3]++;
      circle(190, 25, 26);
      projectileInPlay = false;
    }
    else if(xProjectilePosition > 227 && xProjectilePosition < 253) {
      targetHits[4]++;
      circle(240, 25, 26);
      projectileInPlay = false;
    }
    else if(xProjectilePosition > 277 && xProjectilePosition < 303) {
      targetHits[5]++;
      circle(290, 25, 26);
      projectileInPlay = false;
    }
    else if(xProjectilePosition > 327 && xProjectilePosition < 353) {
      targetHits[6]++;
      circle(340, 25, 26);
      projectileInPlay = false;
    }
  }
}

function keyPressed() {

  if(keyCode == 32 && projectileInPlay == false) {
    xProjectilePosition = xPlayerPosition;
    yProjectilePosition = yPlayerPosition;
    projectileInPlay = true;
  }
}

function mouseClicked() {
  tutorialPhase = false;
}