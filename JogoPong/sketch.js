let bolinhaX = 300;
let bolinhaY = 200;
let diametro = 20;
let bolinhaRaio = diametro/2;

let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

let raqueteX = 5;
let raqueteY = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

let raqueteXOponente = 585;
let raqueteYOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

let colidiu1 = false;

let meusPontos = 0;
let pontosOponente = 0;

let raquetadaSom;
let pontoSom;
let trilhaJogo;

function preload(){
  trilhaJogo = loadSound("trilha.mp3");
  pontoSom = loadSound("ponto.mp3");
  raquetadaSom = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilhaJogo.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  mostraRaquete(raqueteX, raqueteY);
  mostraRaquete(raqueteXOponente, raqueteYOponente);
  movimentaRaquete();
  movimentaRaqueteOponente();
  colisaoRaqueteBiblioteca(raqueteX, raqueteY);
  colisaoRaqueteBiblioteca(raqueteXOponente, raqueteYOponente);  
  placarJogo();
  marcaPonto();
}

function mostraBolinha(){
  circle(bolinhaX, bolinhaY, diametro);
}

function movimentaBolinha(){
  bolinhaX += velocidadeXBolinha;
  bolinhaY += velocidadeYBolinha;
  
  if (bolinhaX + bolinhaRaio > width || 
      bolinhaX - bolinhaRaio < 0) {
      velocidadeXBolinha *= -1;
  }
  if (bolinhaY + bolinhaRaio > height ||
     bolinhaY - bolinhaRaio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(X, Y){
  rect(X, Y, larguraRaquete, alturaRaquete);
}


function movimentaRaquete(){
  if (keyIsDown(UP_ARROW) && raqueteY > 0){
    raqueteY -= 5;
  }
  
  if (keyIsDown(DOWN_ARROW) && raqueteY < 400) {
    raqueteY += 5;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = bolinhaY - raqueteYOponente - larguraRaquete /2 - 60;
  raqueteYOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar()

}

function colisaoRaqueteBiblioteca(x, y){
  colidiu1 = collideRectCircle(x, y, larguraRaquete, alturaRaquete, bolinhaX, bolinhaY, bolinhaRaio);
  if (colidiu1) {
    velocidadeXBolinha *= -1;
    raquetadaSom.play();
  }
}

function placarJogo(){
  stroke(255);
  fill(color(255,140,0));
  rect(190, 32, 55, 20);
  rect(300, 32, 55, 20);
  fill(255);
  stroke(0);
  text("Meus Pontos: ", 180, 26);
  text(meusPontos, 215, 46);
  text("Pontos Oponente: ", 280, 26);  
  text(pontosOponente,325, 46);
}

function marcaPonto(){
  if (bolinhaX > 590){
      meusPontos += 1;
    pontoSom.play();
  } else if (bolinhaX < 10) {
    pontosOponente += 1;
    pontoSom.play();
  }
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
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
