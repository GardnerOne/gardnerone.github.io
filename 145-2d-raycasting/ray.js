class Ray {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.dir = createVector(random(), random())
    }

    show() {
        stroke(white);
        strokeWeight(1);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.dir.x * 50, this.dir.y * 50);
        pop();
    }
}
