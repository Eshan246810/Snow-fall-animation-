//creating the engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//cratiiong variables
var snow1,snow2,snow3,snow4,snow5; 
var box; 

  function preload(){
  //loading images
  bg = loadImage("snow2.png")
}

function setup() {
 var canvas = createCanvas(800,400);
 engine = Engine.create();
 world = engien.world

 //creating Snow objects
  snow1 = new Snow(160,350,20,20);
  snow2 = new Snow(320,350,20,20);
  snow3 = new Snow(480,350,20,20);
  snow4 = new Snow(620,350,20,20);
  snow5 = new Snow(780,350,20,20);
  //creating the box
  fill("orange");
  box = createSprite(200,200,20,20);
  World.add(world,box.body);
}

function draw() {
   background(bg);
  // to display all the snow objects 
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(
    box.body, { x: mouseX, y: mouseY }
    );
}


