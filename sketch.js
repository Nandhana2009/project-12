
var boy;
var path;
var leftBoundary,rightBoundary;
var boyImg;
var pathImg;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadImage("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  //creating path
  path = createSprite(200,200,)
  path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;
  
//creating boy
boy = createSprite(200,300)
boy.addImage(boyImg)
boy.scale = 0.5

//creating invisible boundaries
leftBoundary = createSprite(350,200,100,400)
leftBoundary.visible=false;

rightBoundary = createSprite(40,200,100,400)
rightBoundary.visible=false;


}

function draw() {
  background(0);
//making the boy move with the mouse
boy.x=mouseX

//making the boy collide with the boundaries
boy.collide(leftBoundary);
boy.collide(rightBoundary);

if(path.y >400){
  path.y = height/2;
} 
drawSprites();
}


