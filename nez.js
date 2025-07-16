class Nez {
  constructor(sens_) {
    this.sens = sens_;

    this.a = round(random(40, 100));
    this.n = random(1, 3);
    this.m = random(2, 4);
  }

  display() {
    let a = this.a;
    let n = this.n;
    let m = this.m;

    // Points pour les courbes
    let p0 = createVector(a, a);
    let c1 = createVector(2 * a, 2 * a);
    let c2 = createVector(a + 1, n * a);
    let p1 = createVector(a, n * a);
    let c3 = createVector(a - 0.2 * c2.y, n * a - 0.2 * c2.x);
    let c4 = createVector(a, m * a);
    let p2 = createVector(0, m * a);
    let cl = createVector(0, 0);

    beginShape();
    if (this.sens === true) {
      vertex(p0.x, p0.y);
      bezierVertex(c1.x, c1.y, c2.x, c2.y, p1.x, p1.y);
      bezierVertex(c3.x, c3.y, c4.x, c4.y, p2.x, p2.y);
      vertex(cl.x, cl.y);
    } else {
      vertex(-p0.x, p0.y);
      bezierVertex(-c1.x, c1.y, -c2.x, c2.y, -p1.x, p1.y);
      bezierVertex(-c3.x, c3.y, -c4.x, c4.y, -p2.x, p2.y);
      vertex(-cl.x, cl.y);
    }
    endShape(CLOSE);
  }
}
