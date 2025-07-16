class Mili {
  constructor(p_, l_, c_, a_, b_) {
    this.p = p_;     // pente
    this.l = l_;     // longueur des cheveux
    this.c = c_;     // couleur
    this.a = a_;     // largeur du visage
    this.b = b_;     // hauteur du visage
  }

  display() {
    stroke(this.c);

    // coupe mili sur le dos du visage
    for (let j = 0; j <= 10; j++) {
      let x1 = -this.l * this.a / 5;
      let y1 = round(j * this.b / 10 - this.p * this.l * this.a / 5);
      let x2 = this.l * this.a / 5;
      let y2 = round(j * this.b / 10 + this.p * this.l * this.a / 5);
      line(x1, y1, x2, y2);
    }

    noStroke();
  }
}
