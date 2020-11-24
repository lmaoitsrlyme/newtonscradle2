const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
var world, engine, canvas;
var bob1, bob2, bob3, bob4, bob5;
var string1, string2, string3, string4, string5;

function setup() {
  canvas = createCanvas(850, 500);
  engine = Engine.create();
  world = engine.world;

  bob1 = new Bob(300, 400);
  bob2 = new Bob(350, 400);
  bob3 = new Bob(400, 400);
  bob4 = new Bob(450, 400);
  bob5 = new Bob(500, 400);
  
  string1 = new Strings(bob1.body, {x: 200, y: 50});
  string2 = new Strings(bob2.body, {x: 280, y: 50});
  string3 = new Strings(bob3.body, {x: 380, y: 50});
  string4 = new Strings(bob4.body, {x: 470, y: 50});
  string5 = new Strings(bob5.body, {x: 560, y: 50});
  ground = new Ground();
  Engine.run(engine);

  
}
function draw() {
  rectMode(CENTER);
  
  background(187, 70, 205);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  fill(255, 0, 0)
  ground.display();
 }

 function mouseDragged() {
  Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
}