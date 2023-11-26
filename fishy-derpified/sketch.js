var playerFish, fishes = [];
var backgroundImg, playerImgs = [], smallFishImgs = [], bigFishImgs = [];
var minFishSize = 1, maxFishSize = 30;
var sickChance = .25, poisonChance = .1, yummyChance = .125;
var started = false, gameOver = false, win = false;
var music, deathSound, fishSound;
var mute = false; sfx = true;

function preload() {
  backgroundImg = loadImage("resources/backgroundImage.jpg");
  playerImgs[0] = loadImage("resources/playerFish.png");
  playerImgs[1] = loadImage("resources/playerFishReversed.png");
  playerImgs[2] = loadImage("resources/playerSickFish.png");
  playerImgs[3] = loadImage("resources/playerSickFishReversed.png");
  smallFishImgs[0] = loadImage("resources/smallFish.png");
  smallFishImgs[1] = loadImage("resources/smallFishReversed.png");
  smallFishImgs[2] = loadImage("resources/smallYummyFish.png");
  smallFishImgs[3] = loadImage("resources/smallYummyFishReversed.png");
  smallFishImgs[4] = loadImage("resources/smallPoisonFish.png");
  smallFishImgs[5] = loadImage("resources/smallPoisonFishReversed.png");
  smallFishImgs[6] = loadImage("resources/smallSickFish.png");
  smallFishImgs[7] = loadImage("resources/smallSickFishReversed.png");
  bigFishImgs[0] = loadImage("resources/bigFish.png");
  bigFishImgs[1] = loadImage("resources/bigFishReversed.png");
  bigFishImgs[2] = loadImage("resources/bigYummyFish.png");
  bigFishImgs[3] = loadImage("resources/bigYummyFishReversed.png");
  bigFishImgs[4] = loadImage("resources/bigPoisonFish.png");
  bigFishImgs[5] = loadImage("resources/bigPoisonFishReversed.png");
  bigFishImgs[6] = loadImage("resources/bigSickFish.png");
  bigFishImgs[7] = loadImage("resources/bigSickFishReversed.png");
  music = loadSound("resources/backgroundMusic.mp3")
  deathSound = loadSound("resources/deathSound.mp3");
  fishSound = loadSound("resources/fishSound.mp3");
}

function setup() {
  createCanvas(600, 400);
  music.setVolume(.4);
  fishSound.setVolume(.5);
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  textAlign(CENTER);

  if(!started) {
    text("Fishy: Derpified", width/2, height/4);
    push(); textAlign(LEFT);
    text("Enable Sound for Maximum Derpiness", 0, 10);
    pop();
    text("Click to play", width/2, height/4 + 40);
  }
  else if(gameOver) {
    text("Game Over", width/2, height/4);
    text("Play Again?", width/2, height/4 + 20);
  }
  else if(!win){
    playerFish.move();
    playerFish.display();
    textAlign(LEFT);
    text("M: Toggle Music", 0, 10);
    text("N: Toggle SFX", 0, 30);
    text("Score: " + playerFish.size, 0, 50);

    for(var i = 0; i < fishes.length; i++) {
      fishes[i].move();
      fishes[i].display();

      if(fishes[i].goingRight && fishes[i].x > width) {
        fishes[i] = new Fish();
      }
      if(!fishes[i].goingRight && fishes[i].x < -100) {
        fishes[i] = new Fish();
      }

      if(collisionCheck(playerFish, fishes[i])) {
        if(playerFish.size > fishes[i].size) {
          playerFish.grow(fishes[i]);
          fishes[i] = new Fish();
        }
        else {
          if(sfx) {
            deathSound.play();
          }

          music.stop();
          gameOver = true;
        }
      }
    }

    if(playerFish.size >= 100) {
      win = !win;
      music.stop();
    }
  }
  else {
    text("**Derpiness Eliminated**", width/2, height/4 - 20);
    text("Having grown so big, the normal looking fish", width/2, height/4);
    text("ate all derpiness off the planet.", width/2, height/4 + 20);
    text("Good Job", width/2, height/4 + 40);
  }
}

function mouseClicked() {
  if(!started || gameOver) {
    started = true;
    gameOver = false;

    music.play();
    playerFish = new Player(width/2, height/2);
    for(var i = 0; i < 15; i++) {
      fishes[i] = new Fish();
    }
  }
}

function keyPressed() {
  if(keyCode == 77) {
    (!mute) ? music.stop() : music.play();
    mute = !mute;
  }
  if(keyCode == 78) {
    sfx = !sfx;
  }
}
function collisionCheck (player, fish) {
  var playerObjects = [];
  var fishObjects = [];

  if(player.goingRight) {
    playerObjects[0] = new CollisionObject(player.x + player.size * 1.5, player.y + player.size * 1.5, player.size * 2);
    playerObjects[1] = new CollisionObject(player.x + player.size * 3, player.y + player.size * 2, player.size);
    playerObjects[2] = new CollisionObject(player.x + player.size * 3, player.y + player.size, player.size);
  }
  else {
    playerObjects[0] = new CollisionObject(player.x + player.size * 2.5, player.y + player.size * 1.5, player.size * 2);
    playerObjects[1] = new CollisionObject(player.x + player.size, player.y + player.size * 2, player.size);
    playerObjects[2] = new CollisionObject(player.x + player.size, player.y + player.size, player.size);
  }

  if(fish.size < maxFishSize/2) {
    if(fish.goingRight) {
      fishObjects[0] = new CollisionObject(fish.x + fish.size * 2.75, fish.y + fish.size* 1.5, fish.size * 2);
      fishObjects[1] = new CollisionObject(fish.x + fish.size * 3, fish.y + fish.size* 1.5, fish.size * 1.5);
    }
    else {
      fishObjects[0] = new CollisionObject(fish.x + fish.size * 1.25, fish.y + fish.size * 1.5, fish.size * 2);
      fishObjects[1] = new CollisionObject(fish.x + fish.size * 3, fish.y + fish.size* 1.5, fish.size * 1.5);
    }
  }
  else {
    if(fish.goingRight) {
      fishObjects[0] = new CollisionObject(fish.x + fish.size * 1.5, fish.y + fish.size * 1.6, fish.size * 1.5);
      fishObjects[1] = new CollisionObject(fish.x + fish.size * 3, fish.y + fish.size * 1.5, fish.size * 2);
      fishObjects[2] = new CollisionObject(fish.x + fish.size * 2, fish.y + fish.size * .5, fish.size);
      fishObjects[3] = new CollisionObject(fish.x + fish.size * 2, fish.y + fish.size * 2.5, fish.size);
      fishObjects[4] = new CollisionObject(fish.x + fish.size * .5, fish.y + fish.size, fish.size * .75);
      fishObjects[5] = new CollisionObject(fish.x + fish.size * .5, fish.y + fish.size * 2.25, fish.size * .75);
    }
    else {
      fishObjects[0] = new CollisionObject(fish.x + fish.size, fish.y + fish.size * 1.6, fish.size * 2);
      fishObjects[1] = new CollisionObject(fish.x + fish.size * 2.5, fish.y + fish.size * 1.6, fish.size * 1.5);
      fishObjects[2] = new CollisionObject(fish.x + fish.size * 1.9, fish.y + fish.size * .5, fish.size);
      fishObjects[3] = new CollisionObject(fish.x + fish.size * 1.9, fish.y + fish.size * 2.5, fish.size);
      fishObjects[4] = new CollisionObject(fish.x + fish.size * 3.45, fish.y + fish.size, fish.size * .75);
      fishObjects[5] = new CollisionObject(fish.x + fish.size * 3.45, fish.y + fish.size * 2.25, fish.size * .75);
    }
  }

  for(var i = 0; i < playerObjects.length; i++) {
    for(var j = 0; j < fishObjects.length; j++) {
      if(playerObjects[i].collidesWith(fishObjects[j])) {
        return true;
      }
    }
  }

  return false;
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xAcceleration = 0;
    this.yAcceleration = 0;
    this.speed = .04;
    this.speedModifier = 1;
    this.size = 5;
    this.goingRight = true;
  }

  move() {
    if(keyIsDown(37)) {
      if(!this.goingRight) {
        this.goingRight = !this.goingRight;
      }

      if(this.xAcceleration > -5) {
        this.xAcceleration -= (this.xAcceleration > 0) ? this.speed * 3 * this.speedModifier : this.speed* this.speedModifier ;
      }
    }
    if(keyIsDown(39)) {
      if(this.goingRight) {
        this.goingRight = !this.goingRight;
      }
      if(this.xAcceleration < 5) {
        this.xAcceleration += (this.xAcceleration < 0) ? this.speed * 3 * this.speedModifier: this.speed* this.speedModifier ;
      }
    }
    if(keyIsDown(38)) {
      if(this.yAcceleration > -5) {
        this.yAcceleration -= (this.yAcceleration > 0) ? this.speed * 3 * this.speedModifier : this.speed* this.speedModifier ;
      }
    }
    if(keyIsDown(40)) {
      if(this.yAcceleration < 5) {
        this.yAcceleration += (this.yAcceleration < 0) ? this.speed * 3 * this.speedModifier : this.speed* this.speedModifier ;
      }
    }

    if(!keyIsPressed) {
      this.xAcceleration += (this.xAcceleration < 0) ? this.speed : -this.speed;
      this.yAcceleration += (this.yAcceleration < 0) ? this.speed : -this.speed;
    }
    if(this.x > width + this.size * 5) {
      this.x -= (width + this.size * 10);
    }
    else if(this.x < -this.size * 5) {
      this.x += (width + this.size * 5);
    }
    if(this.y > height) {
      this.y -= (height + this.size * 3);
    }
    else if(this.y < -this.size * 3) {
      this.y += (height + this.size * 3);
    }

    this.x += this.xAcceleration;
    this.y += this.yAcceleration;
  }

  display() {
    var img;

    if(this.goingRight) {
      img = (this.speedModifier < 1) ? playerImgs[3] : playerImgs[1];
    }
    else {
      img = (this.speedModifier < 1) ? playerImgs[2] : playerImgs[0];
    }
    
    push();
    translate(this.x, this.y);
    fill(0); stroke(0);
    image(img, 0, 0, this.size * 4, this.size * 3);
    pop();
  }

  grow(fish) {
    var growthAmount = .5, growthFactor = 1;

    if(sfx) {
      fishSound.play();
    }

    growthFactor *= (fish.modifier == 1) ? 3 :
                    (fish.modifier == 2) ? -.25 :
                    1;

    if(fish.modifier == 3) {
      this.speedModifier -= .1;
    }
    else if(this.speedModifier < 1 && fish.modifier != 2) {
      this.speedModifier += .025;
    }

    this.size += (growthAmount * growthFactor);
  }
}

class Fish {
  constructor() {
    this.goingRight = random() < .5;
    this.x = (this.goingRight) ? -50: width + 50;
    this.y = random(0, height - 50);
    this.size = random(minFishSize, maxFishSize);
    this.speed = (this.goingRight) ? random(.5, 2.5) : random(-2.5, -.5);
    this.modifier = (random() < yummyChance) ? 1 : 
                    (random() < poisonChance) ? 2 :
                    (random() < sickChance) ? 3 :
                    0;
  }

  move() {
    this.x += this.speed;
  }

  display() {
    var img;

    if(this.size < maxFishSize/2) {
      if(this.goingRight) {
        img = (this.modifier == 0) ? smallFishImgs[0] :
              (this.modifier == 1) ? smallFishImgs[2] :
              (this.modifier == 2) ? smallFishImgs[4] :
              smallFishImgs[6];
      }
      else {
        img = (this.modifier == 0) ? smallFishImgs[1] :
              (this.modifier == 1) ? smallFishImgs[3] :
              (this.modifier == 2) ? smallFishImgs[5] :
              smallFishImgs[7];
      }
    }
    else {
      if(this.goingRight) {
        img = (this.modifier == 0) ? bigFishImgs[0] :
              (this.modifier == 1) ? bigFishImgs[2] :
              (this.modifier == 2) ? bigFishImgs[4] :
              bigFishImgs[6];
      }
      else {
        img = (this.modifier == 0) ? bigFishImgs[1] :
              (this.modifier == 1) ? bigFishImgs[3] :
              (this.modifier == 2) ? bigFishImgs[5] :
              bigFishImgs[7];
      }
    }

    push();
    translate(this.x, this.y);
    fill(0); stroke(0);
    image(img, 0, 0, this.size*4, this.size*3);
    pop();
  }
}

class CollisionObject {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
  }

  collidesWith(anotherObject) {
    var leg1 = pow(this.x - anotherObject.x, 2), leg2 = pow(this.y - anotherObject.y, 2);
    var distance = sqrt(leg1 + leg2);

    return (distance < (anotherObject.diameter/2 + this.diameter/2)) ? true : false;
  }

}