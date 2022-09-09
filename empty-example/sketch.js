//variáveis da bolinha
let Xbolinha=300;
let Ybolinha=200;
let diametro=15;
let raio = diametro/2;

let velocidadeXBolinha=6;
let velocidadeYBolinha=6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha()
  verificaColisaoBorda()
  mostraRaquete();
  movimentaMinhaRaquete()
  verificaColisaoRaquete()
}

function mostraBolinha() {
  circle(Xbolinha,Ybolinha,diametro)
}

function movimentaBolinha() {
  Xbolinha += velocidadeXBolinha;
  Ybolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (Xbolinha + raio > width || Xbolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (Ybolinha + raio > height || Ybolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (Xbolinha - raio < xRaquete + raqueteComprimento
      && Ybolinha - raio < yRaquete + raqueteAltura
      && Ybolinha + raio > yRaquete) {
      velocidadeXBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, Xbolinha, Ybolinha, raio);
  if (colidiu) {
      velocidadeXBolinha *= -1;
  }
}