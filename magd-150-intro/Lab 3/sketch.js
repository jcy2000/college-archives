function setup() {
  createCanvas(400, 400);
  frameRate(1000);
  background(255);
  colorMode(RGB,255,255,255);
}

let colorR = 0, colorG = 0, colorB = 0;
let userStrokeWeight = 20;

function draw() {
  let y = mouseY, x = mouseX, py = pmouseY, px = pmouseX;
  createMenu();

  if(mouseIsPressed&&mouseX>75) {
    stroke(color(colorR,colorG,colorB));
    strokeWeight(userStrokeWeight);
    point(x,y)
  }
}

function dist(x1,y1,x2,y2) {
  let leg1 = abs(x1 - x2);
  let leg2 = abs(y1 - y2);
  leg1 = pow(leg1, 2);
  leg2 = pow(leg2, 2);
  let distance = sqrt(leg1+leg2);

  return distance;
}

function createMenu() {
  //Menu Frame
  fill(255); stroke(0);
  strokeWeight(1);
  rect(0,0,75,400);

  //Title Patterns
  let c = color(255,0,0);
  fill(c);
  beginShape();
  vertex(0,40);
  vertex(4,40);
  vertex(30,0);
  vertex(0,0);
  endShape();

  c = color(0,255,0);
  fill(c);
  beginShape();
  vertex(4,40);
  vertex(37,40);
  vertex(60,0);
  vertex(30,0);
  endShape();

  c = color(0,0,255);
  fill(c);
  beginShape();
  vertex(37,40);
  vertex(75,40);
  vertex(75,0);
  vertex(60,0);
  endShape();

  //Title
  fill(255); stroke(0);
  textSize(12);
  text("RGB",23,15);
  text("Coloring",14,30);

  //Explanation
  fill(0); stroke(0);
  textSize(8);
  text("Click on a color",10,50);
  text("to use it", 22,60);
  
  //Colors options
  fill(0); stroke(0);
  textSize(12);
  text("Colors",17,90);

  c = color(255,0,0); //Red
  fill(c);
  rect(0,95,75,40);

  c = color(0,255,0); //Green
  fill(c);
  rect(0,135,75,40);

  c = color(0,0,255); //Blue
  fill(c);
  rect(0,175,75,40);

  c = color(255); //White
  fill(c);
  rect(0,215,75,40);

  c = color(0); //Black
  fill(c);
  rect(0,255,75,40);

  //StrokeWeight Display
  fill(0); stroke(0);
  textSize(8);
  text("Current Stroke: " + userStrokeWeight, 5, 305);

  noFill();
  rect(17,315,15,15);
  rect(42,315,15,15);

  strokeWeight(2);
  line(20,322,29,322);
  line(45,322,54,322);
  line(49.5,318,49.5,327);

  strokeWeight(1);
  line(0,338,75,338);

  //Donations? :D
  textSize(8);
  strokeWeight(1);
  text("Enjoying this?",14,350);
  text("Please consider",9,360);
  text("supporting the",12,370);
  text("creator",23,380);
  text("@patreon.com/null",1,395);
}

//Changes color if mouse if over color options and mouse is pressed
function mouseClicked() {
  if(mouseX<75) {
    if(mouseY>95&&mouseY<295) {
      if(mouseY<135) {
        colorR = 255, colorG = 0, colorB = 0;
      }
      else if(mouseY<175) {
        colorR = 0, colorG = 255, colorB = 0;
      }
      else if(mouseY<215) {
        colorR = 0, colorG = 0, colorB = 255;
      }
      else if(mouseY<255) {
        colorR = 255, colorG = 255, colorB = 255;
      }
      else {
        colorR = 0, colorG = 0, colorB = 0;
      }
    }

    if(mouseY>315&&mouseY<330) {
      if(mouseX>17&&mouseX<32)
        if(userStrokeWeight == 5)
          userStrokeWeight = 1;
        else if(userStrokeWeight > 5)
          userStrokeWeight -=5;
      if(mouseX>42&&mouseX<57)
        if(userStrokeWeight == 1)
          userStrokeWeight = 5;
        else if(userStrokeWeight >= 5)
          userStrokeWeight +=5;
    }
  }
}