var car,wall,carimg,wallimg,crashimg,speed,weight,signal;

function preload(){

carimg=loadImage("Untitled design.png")
wallimg=loadImage("wall img.png")


}


function setup() {
  createCanvas(1200,300);

speed=random(50,80);
weight=random(400,1500);


  car=createSprite(100, 200, 50, 50);
  car.addImage(carimg);
  car.scale=0.4;

  wall=createSprite(1000,150,50,50);
  wall.addImage(wallimg);
  wall.scale=0.8;

}

function draw() {
  background(220); 
 
  car.velocityX=speed;
  
if(wall.collide(car)){

car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;


if(deformation>180){
signal=createSprite(600,150,50,50);
signal.shapeColor="red"
}
if(deformation<180 && deformation>100){
signal=createSprite(600,150,50,50);
signal.shapeColor="yellow"
  }
 if(deformation<100){
  signal=createSprite(600,150,50,50);
  signal.shapeColor="green";
 }
}


  


  drawSprites();
}