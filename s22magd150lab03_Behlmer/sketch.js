 var x = 50;
  var y = 50.5;
let a, b, c, d, e, f;

function setup() {
  createCanvas(600, 400);
  background(250, 250, 100);
  fill(0);
 
 // frameRate(50+20);
   a = 20;
   b = 80;
   c = lerp(a, b, 0.2);
   d = lerp(a, b, 0.5);
   e = lerp(a, b, 0.8);
   f = a - b
}

function draw() {
  strokeWeight(5);
  stroke(0); // Draw the original points in black
  point(a, y);
  point(b, y);

  stroke(100); // Draw the lerp points in gray
  point(c, y);
  point(d, y);
  point(e, y);

  print("The value of x is " + x);
  print("The value of y is " + y);
  let value = 25;
let m = map(value, 0, 100, 0, width);
  fill(250, 200, 200, 50);
  ellipse(mouseX, mouseY, 25*2, 25*2);
  print(pmouseX + ' -> ' + mouseX);
  print(pmouseY + ' -> ' + mouseY);
  print(frameCount, width / 2, height / 2);
}
function mousePressed() {
background(250, 250, 100);
}