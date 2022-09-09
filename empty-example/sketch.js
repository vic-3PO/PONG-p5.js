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

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
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

function movimentaRaqueteOponente() {
  velocidadeYOponente = Ybolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, Xbolinha, Ybolinha, raio);
  if (colidiu){
      velocidadeXBolinha *= -1;
  }
}

function incluiPlacar() {
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}

function marcaPonto() {
  if (Xbolinha > 590) {
      meusPontos += 1;
  }
  if (Xbolinha < 10) {
      pontosDoOponente += 1;
  }
}