var fr = 3000000000;
function setup() {
  resizeCanvas(500,500);
  background(219, 216,192);
  rectMode(BOTTOM);
  

}

function draw() {
  
  //1: circle
  ellipse(90,300,100,100); //(x, y, width, height)
  fill(168, 18, 18);
  
  
  //2: square
    rect(100, 60, 100, 100);



  ellipse(90,300,100,100);
  
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
  
  frameRate(fr);
  
  strokeWeight(12.0);
strokeCap(ROUND);
line(20, 30, 80, 30);
}