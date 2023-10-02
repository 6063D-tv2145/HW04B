function setup() {
  createCanvas(windowWidth, windowHeight);
  background(253, 249, 245)
}

function draw() {
}

function mouseClicked() {
  fill(random(0,255), random(0,255), random(0,255));
    strokeWeight(random(1,10));
    stroke(random(0,255), random(0,255), random(0,255));
    rect(mouseX, mouseY, random(5,250), random(5,250), random(5,20));
}