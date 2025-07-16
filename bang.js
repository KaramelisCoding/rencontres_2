class Bang {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.age = 0;
    this.duree = 60;
    this.actif = true;
  }

  display() {
    if (!this.actif) return;

    this.effetZigzag();
    this.effetExplosion();

    this.age++;
    if (this.age > this.duree) {
      this.actif = false;
    }
  }

  effetZigzag() {
    colorMode(HSB, 360, 100, 100, 255);
    push();
    translate(this.position.x, this.position.y);
    rotate(frameCount * PI / 100);
    stroke(round(random(40, 80)), 100, 90, 255);
    strokeWeight(6);
    noFill();

    let nbCourbes = 6;
    for (let j = 0; j < nbCourbes; j++) {
      push();
      rotate(TWO_PI * j / nbCourbes);
      let a1 = 40;
      this.drawHeart(exp(height / 2 / a1) * 0.5, -height / 2, 30);
      pop();
    }

    pop();
  }

  drawHeart(a, b, size) {
    let s = size / 30.0;

    beginShape();
    vertex(a, b + 5 * s);
    bezierVertex(a - 15 * s, b - 15 * s, a - 30 * s, b + 10 * s, a, b + 30 * s);
    bezierVertex(a + 30 * s, b + 10 * s, a + 15 * s, b - 15 * s, a, b + 5 * s);
    endShape(CLOSE);
  }

  effetExplosion() {
    push();
    translate(this.position.x, this.position.y);
    noStroke();
    for (let i = 0; i < 20; i++) {
      let angle = random(TWO_PI);
      let r = random(20, 40) * sin(PI * this.age / this.duree);
      let x = cos(angle) * r * 10;
      let y = sin(angle) * r * 10;
      fill(0, 100, 100, 200 - this.age * 4);
      ellipse(x, y, 4, 4);
    }
    pop();
  }

  effetTexte() {
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0, 0, 100, 230);
    text("Hooooo..!!", width / 2, height / 2);
    pop();
  }

  estActif() {
    return this.actif;
  }

  stop() {
    this.actif = false;
  }
}
