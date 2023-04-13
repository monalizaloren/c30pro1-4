const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var balls = [];


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);

  

  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

 

  Engine.update(engine);
  ground.display();

 

  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);
  }

  cannon.display();
  tower.display();

  
}

function keyPressed() {
  /*Nesse momento você precisa programar que...
  se a tecla para baixo for pressionada, irão aparecer várias bolinhas de canhão
  Para fazer isso, você tem acesso a alguns códigos:
  if = se
  keyCode = tecla
  DOWN_ARROW = seta para baixo */
  ???
  /*Utilize 'new CannonBall' um novo obeto da classe cannonBall*/
    var cannonBall = ???(cannon.x, cannon.y);
    /*Utilize o código 'push' para adicionar as bolas de canhão na lista 'balls' */
    balls.push(cannonBall);
  }
}

//função para exibir a bala
function showCannonBalls(ball, index) {
  /*Utilize o código 'display()', pois ele mostra as bolinhas de canhao na tela */
  ball.display();
  /*Seu prróximo passo é remover as bolas que atingem os limites da tela. 
  Elas precisam ser removidas do mundo. Para fazer isso, utilize ' Matter.World.remove'*/

  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    ???(world, ball.body);
    /*Essas bolas também precisam ser deletadas da lista'balls'.
    Faça isso utilizando 'splice'*/
    balls.???(index, 1);
  }
}



function keyReleased() {
  /* programe que...
  se a tecla pressiona for a seta para baixo*/
 ???
 /*Utilize um função que se chama 'shoot'*/
    balls[balls.length - 1].???();
  }
}


