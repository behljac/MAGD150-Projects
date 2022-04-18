const planets = [];

function setup() {
  createCanvas(400, 400);

  planets.push(new Planet(width * 0.75, height * 0.5));
}

function mousePressed() {
  planets.push(new Planet(mouseX, mouseY));
}

function draw() {
  colorMode(HSB);
  background(255, 86, 50);
  describe('canvas with royal blue background');

  // sun
  fill("#fbff00");
  circle(width / 2, height / 2, 50);
  
  noFill();
  colorMode(RGB);
  stroke(255, 255, 255);
  for (let i = 0; i < 200; i += 20) {
  bezier(
  50 + 2*i / 5.0,
  (250 - i/2 / 2.0) + 150,
  50 + i / 5.0,
  (50 + i / 2.0) + 150,
  250 - i / 3.0,
  (150 + i / 8.0) + 150,
  140,
  (200) + 150
  );
  }
  fill(255, 255, 255);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
describe(
  'white ellipse with top right quarter missing with black outline around the shape'
);
  beginShape(POINTS);
vertex(70, 100);
vertex(120, 20);
vertex(150, 80);
vertex(300, 300);
vertex(250, 250);
vertex(170, 170);
vertex(350, 350);
vertex(20, 350);
vertex(50, 350);
vertex(98, 270);
endShape();
  for (const planet of planets) {
    planet.draw();
  }
}

class Planet {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // random size
    this.size = random(10, 50);

    // random speed
    this.deltaX = random(-10, 10);
    this.deltaY = random(-10, 10);

    // random color
  
describe(
  'Green to red gradient from bottom left to top right with shading from top left'
);
colorMode(RGB)
    this.c = color(random(128, 255), random(128, 255), random(128, 255));
  }

  draw() {
    const sunX = width / 2;
    const sunY = height / 2;
    const distanceFromSun = dist(this.x, this.y, sunX, sunY);

    // planets accelerate faster when they're closer to the sun
    // this simulates gravity pulling them in faster and faster
    this.deltaX += (sunX - this.x) / distanceFromSun;
    this.deltaY += (sunY - this.y) / distanceFromSun;

    this.x += this.deltaX;
    this.y += this.deltaY;

    fill(this.c);
    ellipse(this.x, this.y, this.size);
  }
}
  
