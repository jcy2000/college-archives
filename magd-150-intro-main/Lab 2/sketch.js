function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);

  drawBalloonCart();
  drawPeople();
  drawBirds();
  drawBalloons();
}

function drawBalloonCart() {
  fill(75); stroke(75); strokeWeight(1);
  rect(225,200,125,60);
  circle(240, 265, 10);
  circle(335, 265, 10);

  //Newspaper Outline
  fill(255); stroke(255); strokeWeight(1)
  rect(315, 215, 20, 30)
  noFill(); stroke(0);
  rect(327, 237, 6, 6);
  circle(330,240, 2);
  line(332, 243, 331, 241);
  line(328, 243, 329, 241);

  //Newslines
  line(317, 217, 333, 217);
  line(317, 219, 333, 219);
  line(317, 221, 333, 221);
  line(317, 223, 333, 223);
  line(317, 225, 333, 225);
  line(317, 227, 333, 227);
  line(317, 229, 333, 229);
  line(317, 231, 333, 231);
  line(317, 233, 333, 233);
  line(317, 235, 333, 235);
  line(317, 237, 325, 237);
  line(317, 239, 325, 239);
  line(317, 241, 325, 241);
  line(317, 243, 325, 243);

  //Umbrella
  fill(75); stroke(75); strokeWeight(3);
  line(310, 199, 310, 160);

  strokeWeight(1);
  triangle(350, 160, 310, 120, 270, 160);

  //Ice-cream Icon
  fill(0);
  triangle(265, 245, 272, 230, 258, 230);
  fill(150); stroke(150);
  arc(265, 230, 11, 13, PI, PI*2);
}

function drawPeople() {
  drawAdult();
  drawChild();
}

function drawAdult() {
  //Body & Head
  fill(110);
  ellipse(190,225,40,80);
  ellipse(189,165,30,40);

  //Arm
  beginShape();
  curveVertex(147,230);
  curveVertex(147,230);
  curveVertex(190,200);
  curveVertex(190,220);
  curveVertex(147,230);
  curveVertex(147,230);
  endShape();
}

function drawChild() {
  //Body & Head
  fill(110);
  ellipse(120,240,25,50);
  ellipse(118,200,20,30);

  //Arm
  beginShape();
  curveVertex(153,223);
  curveVertex(153,223);
  curveVertex(120,230);
  curveVertex(123,235);
  curveVertex(153,223);
  curveVertex(153,223);
  endShape();
}

function drawBirds() {
  noFill(); stroke(0); strokeWeight(1);
  point(30,26);
  curve(5,51,15,24,30,25,45,50);
  curve(15,50,30,26,45,26,60,51);
}

function drawBalloons() {
  colorMode(RGB, 255,255,255,.5);
  //Balloon Bubbles
  let c = color(255,0,0,.2);
  fill(c); stroke(c);
  circle(150,160,30);
  circle(250,130,30);

  c = color(0,255,0,.2);
  fill(c); stroke(c);
  circle(240,135,30);

  c = color(0,0,255,.2);
  fill(c); stroke(c);
  circle(260,140,30);

  //Balloon Strings
  noFill(); stroke(0);
  beginShape();
  curveVertex(150,235);
  curveVertex(150,235);
  curveVertex(151,225);
  curveVertex(149,215);
  curveVertex(150,205);
  curveVertex(151,195);
  curveVertex(150,185);
  curveVertex(150,175);
  curveVertex(150,175);
  endShape();

  beginShape();
  curveVertex(250,200);
  curveVertex(250,200);
  curveVertex(251,190);
  curveVertex(249,180);
  curveVertex(250,170);
  curveVertex(251,160);
  curveVertex(250,150);
  curveVertex(250,145);
  curveVertex(250,145);
  endShape();

  beginShape();
  curveVertex(250,200);
  curveVertex(250,200);
  curveVertex(246,190);
  curveVertex(242,180);
  curveVertex(240,170);
  curveVertex(241,160);
  curveVertex(240,150);
  curveVertex(240,150);
  endShape();

  beginShape();
  curveVertex(250,200);
  curveVertex(250,200);
  curveVertex(255,190);
  curveVertex(259,180);
  curveVertex(260,170);
  curveVertex(261,160);
  curveVertex(260,155);
  curveVertex(260,155);
  endShape();
}