let pavilions = [];

function preload() {
  for (let i = 6; i <= 9; i++) {
    pavilions.push(loadModel(
      "https://koichandesu.github.io/memory-garden-p5/pavilion_" + i + ".obj",
      true
    ));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(240);
  orbitControl();

  ambientLight(150);
  directionalLight(255, 255, 255, -1, -1, -1);
  ambientMaterial(80, 100, 80);

  for (let i = 0; i < pavilions.length; i++) {
    push();
    scale(1.5);
    rotateY(180);
    model(pavilions[i]);
    pop();
  }
}
