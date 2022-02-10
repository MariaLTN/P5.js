//Carro
let larguraCarro = 55;
let alturaCarro = 30;

let velocidadeCarros = [4, 3, 5, 4, 6, 7]
let carrosY = [47, 100, 270, 155, 322, 215];
let carrosX = [600, 600, 600, 600, 600, 600]

function mostraCarro(){
  for (var contador = 0; contador < imagensCarros.length; contador++) {
    image(imagensCarros[contador], carrosX[contador], carrosY[contador], larguraCarro, alturaCarro);    
  }
}

function movimentaCarro(){
  for (var contador = 0; contador < imagensCarros.length; contador++) {
    carrosX[contador] -= velocidadeCarros[contador];   
  }
}

function voltaPosicaoOriginal(){  
  for (var cont = 0; cont < 6; cont++) {
    if (passouNaTela(carrosX[cont])) {
      carrosX[cont] = 600;
    }
  }
}

function passouNaTela(xCarro){
  return xCarro < - 60;
}

