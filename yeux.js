class Yeux {
  constructor(sens_) {
    this.sens = sens_;
    this.h = round(random(10, width / 4));
    this.v = round(random(100, width / 2));
    this.rapport = random(0.1, 1);
  }

  display() {
    this.lyeux = sqrt(this.h * this.h + this.v * this.v);
    fill(255);
    ellipse(0, 0, this.h, this.v);

    fill(0);
    if (this.sens === true) {
      ellipse(this.lyeux / 10, this.lyeux / 10, round(this.rapport * this.h), round(this.rapport * this.v));
    } else {
      ellipse(-this.lyeux / 10, this.lyeux / 10, round(this.rapport * this.h), round(this.rapport * this.v));
    }
  }
}
