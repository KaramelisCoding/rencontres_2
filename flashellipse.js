class FlashEllipse {
  constructor() {
    this.tStart = millis() / 1000.0;
    this.maxDuration = 5.0;
    this.isFinished = false;
  }

  update() {
    let t = millis() / 1000.0 - this.tStart;
    if (t > this.maxDuration) {
      this.isFinished = true;
      return;
    }

    let d = pixelDensity(); // pour compenser les distorsions

    push();
    noStroke();
    rectMode(CENTER);
    fill(0, 0, 0, 200);
    rect(width / 2, 8.0 / 9.0 * height, 200 / d, 24 / d);

    fill(120, 100, 100);
    textSize(12 / d); // taille aussi à adapter
    let base = "LOVE FOR EVER...";
    let cursor = (frameCount % 30 < 15) ? "_" : " ";
    text(base + cursor, width / 2 - 80 / d, 8.0 / 9.0 * height + 5 / d);

    let count = int((millis() / 1000.0 - this.tStart) * 100);
    text(nf(count, 3), width - 250 / d, 8.0 / 9.0 * height + 5 / d);
    pop();
  }
}
