//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2 ;

//velocidade da bolinha
let VeloxBolinha = 6;
let VeloyBolinha = 6; 

//variaveis da raquete
let xRaquete = 10;
let yRaquete = 150;
let raqueteComprimento = 10
let raqueteAltura = 100;

//variaveis oponente

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYoponente;

let colidiu = false;


//placar jogo
let meusPontos = 0;
let oponentePontos = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
    fill(color(255, 140, 0));
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  //colisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcaPonto();
}

function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro);
    
}

function movimentaBolinha(){
  xBolinha += VeloxBolinha;
  yBolinha += VeloyBolinha;
}


function verificaColisaoBorda(){
  if (xBolinha + raio > width || 
     xBolinha - raio < 0){
    VeloxBolinha *= -1}
  
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    VeloyBolinha *= -1;}
  
}


function mostraRaquete(x,y){
    rect(x, y, raqueteComprimento, 
         raqueteAltura);
}




function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function colisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento 
&& yBolinha - raio < yRaquete + raqueteAltura &&
   yBolinha + raio > yRaquete){
    VeloxBolinha *= -1;
    raquetada.play()
  }
}

function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    VeloxBolinha *= -1;
    raquetada.play()
  }
}





function movimentaRaqueteOponente(){
  velocidadeYoponente = yBolinha - yRaqueteOponente -
    raqueteComprimento /2 - 30;
  yRaqueteOponente += velocidadeYoponente;
}


function incluirPlacar(){
  stroke(255)
  text(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255)
  text(meusPontos, 165, 26)
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20)
  fill(255)
  text(oponentePontos, 465, 26)
}

function marcaPonto(){
  if (xBolinha > 595){
    meusPontos += 1;
  }
  if(xBolinha < 15){
    oponentePontos += 1;
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {

    createCanvas(600, 400);

    trilha.play();

}

function setup() {

    createCanvas(600, 400);

    trilha.loop();

}






