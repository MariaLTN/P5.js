//Vaca e Estrada:
let imagemEstrada;
let imagemVaca;

//Carro:
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//Som:
let somTrilha;
let somPontos;
let somColisao;

function preload(){
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemVaca = loadImage("Imagens/ator-1.png");
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagensCarros = [imagemCarro3, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro1, imagemCarro2];
  
  somTrilha = loadSound("Sons/trilha.mp3");
  somPontos = loadSound("Sons/ponto.mp3");
  somColisao =loadSound("Sons/colidiu.mp3");  
}