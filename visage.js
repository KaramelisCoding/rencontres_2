class Visage {
  constructor(a_, b_) {
    this.a = a_;
    this.b = b_;
  }

  display() {
    rect(0, 0, this.a, this.b, 40);
  }
}
