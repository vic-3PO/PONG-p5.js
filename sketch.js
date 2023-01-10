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

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let chanceDeErrar = 0;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("../Pong - Sons/trilha.mp3");
  ponto = loadSound("../Pong - Sons/ponto.mp3");
  raquetada = loadSound("../Pong - Sons/raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  //bolinha
  mostraBolinha()
  movimentaBolinha()
  verificaColisaoBorda()
  //minha raquete
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete()
  verificaColisaoRaquete(xRaquete,yRaquete)
  //raquete oponente
  mostraRaquete(xRaqueteOponente,yRaqueteOponente)
  movimentaRaqueteOponente()
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente)
  //placar
  incluiPlacar()
  marcaPonto()

  //bolinhaNaoFicaPresa()

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

function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}


function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = Ybolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos ) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, Xbolinha, Ybolinha, raio);
  if (colidiu){
      velocidadeXBolinha *= -1;
      raquetada.play();
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  if (Xbolinha > 590) {
      meusPontos += 1;
      ponto.play();
  }
  if (Xbolinha < 10) {
      pontosDoOponente += 1;
      ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
  if (XBolinha - raio < 0){
  XBolinha = 23
  }
}