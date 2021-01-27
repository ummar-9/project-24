
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	hammer1 = new hammer(50,50)
    plane1 = new plane(400,700,800,200);
	stone1 = new stone(600,650,50,50);
	rubber1 = new rubber(200,680,50);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  rubber1.display();
  hammer1.display();
  plane1.display();
  stone1.display();
  drawSprites();
 
}



