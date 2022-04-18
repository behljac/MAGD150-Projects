let bubbles = [];

var words = ["easter", "eggs", "everywhere", "friendly", "in all the right ways"];

var index = 0;

var nums = [100, 25, 46, 72];

var num = 23;

function setup() {
  createCanvas(600, 400);
}

function mouseDragged(){
  let r = random(60, 10);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}


function draw() {
  background(0);
  
  for (var i = 0; i < 4; i++){
    stroke(255);
    fill(51);
    ellipse(i * 100 + 100, 200, nums[i], nums[i]);
  }
  
  //ellipse(100, 200, nums[0], nums[0]);
  //ellipse(200, 200, nums[1], nums[1]);
  //ellipse(300, 200, nums[2], nums[2]);
  //ellipse(400, 200, nums[3], nums[3]);
  
  fill(255);
  textSize(32);
  text(words[index], 12, 200);
  
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

function mousePressed(){
  index = index + 1;
  
  if (index == words.length) {
    index = 0;
  }
}

class Bubble{
  constructor(unicorn, fluffy, rainbow){
    this.x = unicorn;
    this.y = fluffy;
    this.r = rainbow;
  }
  
  move () {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  
  show () {
    stroke(255);
    strokeWeight(4);
    noFill();
  ellipse(this.x, this.y, this.r * 2);
  }
}