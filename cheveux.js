class Cheveux {
  constructor(n_, c_, l_, m_) {
    this.n = n_;
    this.c = c_;
    this.l = l_;
    this.m = m_;
    this.arc = random(0.3, 1.9);

    this.bulles = [];

    // Grande bulle du dessus
    let x = (4 / 3) * this.l;
    let y = (3 / 4) * this.m;
    let w = 2 * this.l;
    let h = this.m / 2;
    this.bulles.push(new Bulle(x, y, w, h, this.c));

    // Bulle arrière
    let x1 = -0.2 * this.l;
    let y1 = this.m / 2;
    let w1 = 2 * this.l;
    let h1 = this.m;
    this.bulles.push(new Bulle(x1, y1, w1, h1, this.c));
  }

  display() {
    for (let b of this.bulles) {
      fill(b.col);
      ellipse(b.x, b.y, b.w, b.h);
    }

    noFill();
    strokeWeight(10);

    let w3 = 2 * this.l;
    let h3 = this.m;

    let x3 = -0.2 * this.l;
    let y3 = this.m / 2;

    for (let i = 0; i < 10; i++) {
      arc(15 * i + 7 * x3, 0 + 2 * y3, w3, h3, -PI / 3, this.arc * PI / 3);
    }

    noStroke();
  }
}

// Classe interne traduite à l’extérieur
class Bulle {
  constructor(x_, y_, w_, h_, col_) {
    this.x = x_;
    this.y = y_;
    this.w = w_;
    this.h = h_;
    this.col = col_;
  }
}
