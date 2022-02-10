//Vaca
let alturaVaca = 25;
let larguraVaca = 25;
let atorY = 370;
let atorX = 50;

let pontuacao = 0;
let colisao = false;

function mostraAtor(){
  image(imagemVaca, atorX, atorY, larguraVaca, alturaVaca);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    atorY -= 3;
  } else if (keyIsDown(DOWN_ARROW) && atorY < 370){
    atorY += 3;
  } else if (keyIsDown(LEFT_ARROW) && atorX > 0){
    atorX -= 3;
  } else if (keyIsDown(RIGHT_ARROW) && atorX < 470){
    atorX += 3;
  } 
}

function verificaColisao(){
  for (var i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectCircle(carrosX[i], carrosY[i], larguraCarro, alturaCarro, atorX, atorY, 25);
    if (colisao == true) {
      somColisao.play();
      marcaPonto();
      posicaoOriginal();
    }
  } 
}

function posicaoOriginal(){
  atorY = 370;
}

function incluiPontos(){  
  textSize(20);
  text(pontuacao, width/2, 24);
}

function marcaPonto(){
  if (atorY < 10) {
    pontuacao++;
    somPontos.play();
    posicaoOriginal();
  } else if ((colisao==true) && (pontuacao>0)){
    pontuacao--;
  }
}

