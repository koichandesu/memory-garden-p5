function setup() {
  createCanvas(600, 400, WEBGL);
  background(200);
}

function draw() {
  rotateY(frameCount * 0.01);
  normalMaterial();
  box(100);
}
