function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);  
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();  
  voltaPosicaoOriginal();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

