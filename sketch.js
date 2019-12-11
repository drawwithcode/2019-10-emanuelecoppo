var w, h;
var r2 = 4;
var detail = 100;
var valX, valY;
var colX, colY;
var ballColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  w = width;
  h = height;
  valX = map(mouseX, 0, w, .1, 1);
  valY = map(mouseY, 0, h, .1, 1);
  colX = map(mouseX, 0, w, 0, 255);
  colY = map(mouseY, 0, h, 0, 255);

  background(colX, 0, 255-colX);
  noFill();
  noStroke();
  smooth();

  // CAMERA, LIGHTS, MATERIALS
  camera(mouseX - w/2, mouseY - h/2, 400, 0, 0, 0, 0, 1, 0);

  ambientLight(255-colX, 0, colX);
  pointLight(255-colX, 0, colX, mouseX - h/2, mouseY - w/2, 0);
  normalMaterial();
  specularMaterial(100);

  // SHAPES
  push();
    fill(ballColor);
    sphere(50, detail);
  pop();

  push();
    rotateX(-30 + valX * frameCount);
    rotateY(30 - valY * frameCount);
    torus(300, r2, detail);
    translate(-300, 0, 0);
    push();
      fill(ballColor);
      sphere(20, detail);
      push();
        translate(300, 300, 0);
        sphere(20, detail);
      pop();
    pop();
  pop();

  push();
    rotateX(valX * frameCount);
    rotateY(valY * frameCount);
    torus(250, r2, detail);
    push();
      fill(ballColor);
      translate(-250, 0, 0);
      sphere(20, detail);
    pop();
  pop();

  push();
    rotateX(90 - valX * frameCount);
    rotateY(45 + valY * frameCount);
    torus(200, r2, detail);
    push();
      fill(ballColor)
      translate(-200, 0, 0);
      sphere(20, detail);
    pop();
  pop();

  push();
    rotateX(30 - valX * frameCount);
    rotateY(60 + valY * frameCount);
    torus(150, r2, detail);
  pop();

  push();
    rotateX(60 + valX * frameCount);
    rotateY(30 + valY * frameCount);
    torus(100, r2, detail);
    push();
      fill(ballColor);
      translate(100, 0, 0);
      sphere(20, detail);
    pop();
  pop();

  push();
    rotateX(45 - valX * frameCount);
    rotateY(90 - valY * frameCount);
    torus(75, r2, detail);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
