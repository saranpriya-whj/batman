
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var umbrella;
var drops=[];
var maxDrops=1000;
var canvas;
function preload(){
    
}

function setup(){
    canvas= createCanvas(500,700);
   engine = Engine.create();
   world = engine.world;
  umbrella = new Umbrella(250,650,50);

  if(frameCount % 0.00000000000000000000000025 === 0){

    for(var i=0; i<maxDrops; i=i+10){
        drops.push(new Drops(random(0,400), random(0,400)));
    }

}



}

function draw(){
    Engine.update(engine);
    background("white")
    
 umbrella.display();
 for(var i = 0; i<maxDrops; i=i+1000){
    drops[i].display();
    drops[i].update()
    
}

 drawSprites();
}   