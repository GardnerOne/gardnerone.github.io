let x_pos = 0;
let y_pos = 0;

let boundary;
let ray;

function setup() {
    createCanvas(windowWidth, windowHeight);

    x_pos = width / 2;
    y_pos = height / 2;

    boundary = new Boundary(random(width), random(height), random(width), random(height));
    ray = new Ray(x_pos, y_pos);
}

function draw() {
    background(dark);

    boundary.show();
    ray.show();

    fill(primary);
    noStroke();
    ellipse(x_pos, y_pos, 20);
}

function mouseMoved() {
    x_pos = mouseX;
    y_pos = mouseY;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
