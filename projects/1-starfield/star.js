const SIZE = 6;
const SPEED = 10;

class Star {
    constructor() {
        this.x = random((-width / 2), (width / 2));
        this.y = random((-height / 2), (height / 2));
        this.z = random(1000);
    }

    update() {
        if (this.z < 1) {
            this.z = width
        }
        else {
            this.z -= SPEED
        }
    }

    show() {
        fill(...light, 200);
        noStroke();

        let dx = map(this.x / this.z, 0, 1, 0, width);
        let dy = map(this.y / this.z, 0, 1, 0, height);
        let dz = map(this.z, width, 1, 0, SIZE);

        ellipse(dx, dy, dz);
    }
}
