var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var point,pointimg;
var x;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
	pointimg = loadImage("buid.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2
	

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6;
	helicopterSprite.depth = 3;
	packageSprite.depth = helicopterSprite.depth - 6;

	x = random(0, 750);

	point = createSprite(width/2, 630, 20, 20);
	point.addImage(pointimg);
	point.scale = 0.1;
	point.depth = 1;
	packageSprite.depth = point.depth+1

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.4, isStatic: true });
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	fill("red");
	textSize(20)
	text("press down arrow to deliver",120,40)

	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

if(packageSprite.isTouching(point)){
	
 text("delivered sucesfully",100,200);
}
	
	drawSprites();

}

function keyPressed() {

	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y


	if (keyCode === DOWN_ARROW) {

		Body.setStatic(packageBody, false);
		
	 

	}
}



