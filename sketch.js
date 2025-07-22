let perso1, perso2;
let xoff, moff;
let l1, l2;
let c1, c2;
let i = 0;
let bangs = [];

let anton;

let effetActif = false;
let collisionEnCours = false;
let separationEnCours = false;

let separationOffset = 0;
let separationActive = false;

let cnv;

// Préchargement de la police Anton
function preload() {
  anton = loadFont('assets/Anton-Regular.ttf');
}

function setup() {
  // createCanvas(640, 320);

 cnv = createCanvas(640, 320);
  cnv.parent('container'); // place le canvas dans une div précise
//}


  colorMode(HSB, 360, 100, 100, 255);
  frameRate(60);
  noStroke();
  textFont(anton);
  textSize(32);

  background(220, 100, 100, 255);

  perso1 = new Perso(true);
  perso2 = new Perso(false);

  xoff = random(1);
  moff = random(1);
}

function keyPressed() {
  if (key === ' ') {
    if (i % 2 === 0) {
      perso1 = new Perso(true);
    } else {
      perso2 = new Perso(false);
    }
    i++;
  }

  if (key === 's') {
    separationActive = true;
    separationEnCours = true;
    for (let b of bangs) {
      b.stop();
    }
  }
}

function draw() {
  background(220, 80, 90, 255);

  if (separationActive) {
    separationOffset = width / 2;
    separationActive = false;
  }

  xoff += 0.02;
  moff += 0.02;

  let x1 = width / 10 + Math.round(1.25 * noise(xoff) * width) - Math.round(0.3 * width / 2) - separationOffset;
  let x2 = width / 10 + 2 * width - Math.round(1.25 * noise(moff) * width) + separationOffset;

  let droitePerso1 = (x1 + perso1.l + 2 * perso1.nez.a) / 2.0;
  let gauchePerso2 = (x2 - (2 * perso2.nez.a)) / 2.0;
  let dist = gauchePerso2 - droitePerso1;

  strokeWeight(4);
  if (dist >= 0) {
    stroke(100, 0, 100, 255);
    line(width / 2 + 10, 10, width / 2 + dist, 10);
    line(width / 2 - dist, 10, width / 2 - 10, 10);
  } else {
    stroke(0, 100, 100, 255);
    line(width / 2 + 10, 10, width / 2 - dist, 10);
    line(width / 2 + dist, 10, width / 2 - 10, 10);
  }

  noStroke();

  if (!collisionEnCours && dist <= 0) {
    effetActif = true;
    collisionEnCours = true;
  } else if (dist >= 0) {
    collisionEnCours = false;
  }

  if (collisionEnCours) {
    bangs.push(new Bang(width / 2, height / 2));
    for (let i = bangs.length - 1; i >= 0; i--) {
      let b = bangs[i];
      b.display();
      if (!b.estActif()) {
        bangs.splice(i, 1);
      }
    }
  }

  push();
  scale(0.45);
  translate(x1, Math.round(0.6 * height));
  perso1.display();
  pop();

  push();
  scale(0.45);
  translate(x2, Math.round(0.6 * height));
  perso2.display();
  pop();

  if (separationEnCours) {
    separationOffset -= 5;
    let bangTemp = new Bang(width / 2, height / 2);
    bangTemp.effetTexte();

    if (separationOffset <= 0) {
      separationOffset = 0;
      separationEnCours = false;
    }
  }
}
