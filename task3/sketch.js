function setup() {
  // create canvas
  createCanvas(710, 650);
  textSize(15),
  noStroke();
  rectMode(BOTTOM);
  

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red", 165, 35);
  text("green", 165, 65);
  text("blue", 165, 95);
  //1: circle
  ellipse(0); //(x, y, width, height)
  fill(168, 18, 18);
  
  
  //2: square
    rect(0);



  ellipse(0);
  
  //2: square, rotated
  fill(0);
  translate(width/2, height/2);
  push()
  rotate(PI/3.0);
  rect(-180, -70, 90, 90);
    rotate(radians(frameCount))
  
  //3: rectangle, wonky
  rotate(PI/0.5)
  rect(-270, -200, 20, 250);
  
  textSize(20);
  textFont("Helvetica")
  text("dont be a square", mouseX, mouseY);
  fill(100);
  
  
  strokeWeight(12.0);
strokeCap(ROUND);
line(20, 30, 80, 30);
}




