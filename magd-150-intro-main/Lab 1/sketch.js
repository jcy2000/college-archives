function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  let c = color(75);
  fill(c); stroke(c);

  drawBuildings();
  drawWindows();
  drawMoon();
  drawStars();
  drawRoofObjects();
}

function drawBuildings() {
  noStroke();
  rect(0,   200, 30, 200);
  rect(35,  275, 50, 125);
  rect(90,  225, 50, 175);
  rect(145, 175, 50, 225);
  rect(200, 225, 50, 175);
  rect(255, 200, 50, 200);
  rect(310, 150, 50, 250);
  rect(365, 250, 35, 150);
}

function drawWindows() {
  let c = color(200);
  fill(c); stroke(c);
  strokeWeight(0);

  for(let y = 210; y < 390; y += 35)
    rect(10, y, 10, 20);
  for(let y = 285; y < 390; y += 25) {
    rect(45, y, 10, 15);
    rect(65, y, 10, 15);
  }
  for(let y = 235; y < 390; y += 35) {
    rect(100, y, 10, 20);
    rect(120, y, 10, 20);
  }
  for(let y = 185; y < 390; y += 25) {
    rect(155, y, 10, 15);
    rect(175, y, 10, 15);
  }
  for(let y = 235; y < 390; y += 25) {
    rect(210, y, 10, 15);
    rect(230, y, 10, 15);
  }
  for(let y = 210; y < 390; y += 30) {
    rect(265, y, 10, 20);
    rect(285, y, 10, 20);
  }
  for(let y = 160; y < 390; y += 35) {
    rect(320, y, 10, 20);
    rect(340, y, 10, 20);
  }
  for(let y = 260; y < 390; y += 25)
    rect(375, y, 10, 15);
}

function drawMoon() {
  let c = color(200);
  fill(c); stroke(c);
  ellipse(60, 60, 100, 100);
  
  c = color (50);
  fill(c); stroke(c);
  ellipse(90, 65, 110, 110);
}

function drawStars() {
  let c = color(255);
  fill(c); stroke(c);

  let y = 15;
  while(y < 125) {
    for(let x = 100; x < 400; x += 20) {
      strokeWeight(random(0,2));
      point(x, y);
    }

    for(let x = 100; x < 400; x += 20) {
      strokeWeight(random(0,2));
      point(x + 30, y + 30);
    }

    for(let x = 100; x < 400; x += 20) {
      strokeWeight(random(0,2));
      point(x - 30, y + 15);
    }
    
    for(let x = 100; x < 400; x += 20) {
      strokeWeight(random(0,2));
      point(x - 15, y + 50);
    }
    
    y += 70;
  }

  for(let x = 10; x < 300; x += 25) {
      strokeWeight(random(0,2));
      point(x, y);
    }

  y += 15;
  for(let x = 15; x < 300; x += 25) {
      strokeWeight(random(0,2));
      point(x, y);
    }

  y += 15;
  for(let x = 7; x < 150; x += 25) {
      strokeWeight(random(0,2));
      point(x, y);
    }
}

function drawRoofObjects() {
  let c = color(75);
  fill(c); stroke(c);

  //Draw telescope
  strokeWeight(3);
  line(55, 265, 60, 260);
  strokeWeight(6);
  line(60, 260, 65, 255);

  strokeWeight(1);
  noFill();
  strokeJoin(ROUND); beginShape();
  vertex(58, 275);
  vertex(63, 260);
  vertex(68, 275);
  endShape();
  fill(c);

  //Draw Satellite
  translate(225, 213);
  angleMode(DEGREES);
  rotate(60);
  ellipse(0, 0, 15, 12);
  fill(color(50)); stroke(color(50));
  ellipse(0, -6, 20, 15);
  rotate(-60);

  fill(c); stroke(c);
  strokeWeight(1);
  noFill(); strokeJoin(ROUND); beginShape();
  vertex(5, 17);
  vertex(0, 7);
  vertex(7, -4);
  vertex(-5, -2);
  endShape();
  fill(c);

  ellipse(2, 12, 5, 3);
}