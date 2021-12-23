var snow;
var bg;

function preload(){
  bg = loadImage("snow2.jpg");
  snow1 = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bg);  

  if (frameCount%30===0){
    snow = createSprite(random(0,800),0)
    snow.addImage(snow1);
    snow.velocityY=3;
    snow.scale=0.2;
  }


  drawSprites();
}