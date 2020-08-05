import * as p5 from 'p5';

class Blob {
  public m: p5.Vector

  constructor(private readonly p: p5, public pos: p5.Vector = p.createVector(Math.random() * p.width, Math.random() * p.height)) {
    this.m = p.createVector(Math.random() * 10 - 5, Math.random() * 10 - 5);
  }

  update() {
    const p = this.p;
    this.pos.add(this.m);
    if (this.pos.x < 0) { this.pos.x *= -1; this.m.x *= -1; }
    if (this.pos.x > p.width) { this.pos.x = 2*p.width - this.pos.x; this.m.x *= -1; }
    if (this.pos.y < 0) { this.pos.y *= -1; this.m.y *= -1; }
    if (this.pos.y > p.height) { this.pos.y = 2*p.height - this.pos.y; this.m.y *= -1; }
  }

  draw() {
    this.p.ellipse(this.pos.x, this.pos.y, 5, 5);
  }
};

export class Scene {
  private c = 0;
  private readonly points: Array<Blob> = [];

  constructor(private readonly p: p5) {
    for (var i = 0; i < 5; i++) {
      this.points.push(new Blob(this.p));
    }
  }

  private move() {
    const p = this.p;
    this.c++;
    if (this.c > 0xcc) {
      this.c = 0x33;
    }
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].update();
    }

    // Add new points on mouseclick.
    if (p.mouseIsPressed) {
      this.points.push(new Blob(p, p.createVector(p.mouseX, p.mouseY)));
    }
  }

  public draw(p: p5): void {
    this.move();

    p.background(255, 255, 255);
    p.fill(128, 128, 128);
    // p.background(this.c);
    // p.fill(255 - this.c);

    // Draw the points.
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].draw();
    }

    for (var i = 0; i < this.points.length; i++) {
      for (var j = 0; j < this.points.length; j++) {
        if (i == j) continue;
      }
    }
  }
}
