const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,world;
var ground,ground2,ball;

function setup(){
var canvas = createCanvas(600,600);

  myEngine = Engine.create();
  world = myEngine.world;

  var fix ={
    isStatic: true
  }

  ground = Bodies.rectangle(150,300,300,10,{isStatic: true});
  World.add(world,ground);

  var fix2 ={
    isStatic: true
  }

  ground2 = Bodies.rectangle(300,590,600,10,{isStatic: true});
  World.add(world,ground2);

  var bounciness ={
    restitution: 1.0
  }

  ball = Bodies.circle(305,25,25,{restitution: 1.0});
  World.add(world,ball);
}

function draw(){
  background("lightblue");
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,300,10);

  rectMode(CENTER);
  rect(ground2.position.x,ground2.position.y,600,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25);
}