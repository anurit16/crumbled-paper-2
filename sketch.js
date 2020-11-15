
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;

var dustbin1,dustbin2,dustbin3,dustbinimg,paper,ground;
var box3,box4,box5;


 function preload(){
    dustbinimg = loadImage("dustbingreen.png");

 }
function setup() {
	createCanvas(1000, 400)
	
	myEngine=Engine.create();
	myWorld = myEngine.world;
  


	

	//Create the Bodies Here.

	ground = new Ground(500,350,1000,20);
	dustbin1 = new Dustbin(850,330,200,20);
	dustbin2 = new Dustbin(750,280,20,130);
	dustbin3 = new Dustbin(950,280,20,130);
//	dustbinimg = new DustbinImage(1600,430,300,200);
	
	paper = new Paper(100,310,30);
	
}


function draw() {

  background(200);
  Engine.update(myEngine);
  
  ground.display(); 
  //dustbin1.display(); 
  //dustbin2.display(); 
  //dustbin3.display(); 
  paper.display();
  //dustbinimg.display();
  image(dustbinimg,750,210,200,130);

 
}
 function keyPressed(){
	 if(keyCode===UP_ARROW){
		
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-110});
	 }
 }


