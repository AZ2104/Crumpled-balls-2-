const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,side1,side2,side3,paper1

function preload()
{
	boximage = loadImage('dustbin.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	side1 = new Dustbin(1100,470,150,15);
	side2 = new Dustbin(1185,420,15,170);
	side3 = new Dustbin(1015,420,15,170);
	
	ground1 = new Ground(700,550,1400,30);

	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background("lightpink");
	Engine.update(engine);
	
	
	paper1.display();
	ground1.display();
	side3.display();
	side1.display();
	side2.display();

	image(boximage,1000,330,200,200);
	
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



