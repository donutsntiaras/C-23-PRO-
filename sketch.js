const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world; 
var wall;
var pillar, pillar1;
var b,b1,b2;
var g;
var w1,w2,w3,w4,w5,w6;
 
function setup() {
    createCanvas(800, 400);
    
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    wall = new walls(350,275,375,250);
    pillar = new walls(124,238,75,320);
    pillar1 = new walls(575,238,75,320);
    b = new walls(240,125,50,50);
    b1 = new walls(340,125,50,50);
    b2 = new walls(440,125,50,50);
    g = new gate(350,350,75,100);
    w1 = new windows(124,125,50,50);
    w2 = new windows(124,225,50,50);
    w3 = new windows(124,325,50,50);
    w4 = new windows(575,125,50,50);
    w5 = new windows(575,225,50,50);
    w6 = new windows(575,325,50,50);
      
}
    
function draw() {
    Engine.update(engine);
    background(135,206,250);
    
    wall.show();
    pillar.show();
    pillar1.show();
    b.show();
    b1.show();
    b2.show();
    g.show();
    w1.show();
    w2.show();
    w3.show();
    w4.show();
    w5.show();
    w6.show();
    
}
 
