class Perso {
  constructor(sens_) {
    this.sens = sens_;

    // Couleur du visage et cheveux
    let m;
    if (random(1) < 0.5) {
      m = random(340, 360);
    } else {
      m = random(0, 60);
    }
    this.c = color(round(m), 90, 90, 255);

    // Taille du visage
    this.l = 2 * round(random(30, 80));
    this.h = round(random((2 / 3) * height, height));

    // Paramètres cheveux mili
    if (random(1) < 0.5) {
      this.p = random(-1.8, 0.8);
    } else {
      this.p = random(0.8, 1.8);
    }
    this.lo = random(2.0, 5.0);

    // Composants du visage
    this.nez = new Nez(this.sens);
    this.yeux = new Yeux(this.sens);
    this.cheveux = new Cheveux(25, this.c, this.l, this.h);
    this.mili = new Mili(this.p, this.lo, this.c, this.l, this.h);
  }

  display() {
    fill(this.c);
    stroke(this.c);

    this.visage = new Visage(this.l, this.h);
    this.visage.display();

    if (this.sens === true) {
      this.cheveux.display();

      push();
      translate(this.l, height / 2);
      fill(this.c);
      this.nez.display();
      pop();

      push();
      translate((this.l * 4) / 5, height / 4);
      fill(this.c);
      this.yeux.display();
      pop();
    } else {
      push();
      translate(this.l, 0);
      strokeWeight(10);
      this.mili.display();
      noStroke();
      pop();

      push();
      translate(0, height / 2);
      fill(this.c);
      this.nez.display();
      pop();

      push();
      translate((this.l * 1) / 5, height / 4);
      fill(this.c);
      this.yeux.display();
      pop();
    }
  }
}
