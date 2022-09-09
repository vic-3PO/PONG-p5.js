let Xbolinha=300;
let Ybolinha=200;
let diametro=15;
let raio = diametro/2;

let velocidadeXBolinha=6;
let velocidadeYBolinha=6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha()
  verificaColisaoBorda()
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