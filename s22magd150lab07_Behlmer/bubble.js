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
  fill(255, 0, 100, 50);
  ellipse(this.x, this.y, this.r * 2);
  }
}