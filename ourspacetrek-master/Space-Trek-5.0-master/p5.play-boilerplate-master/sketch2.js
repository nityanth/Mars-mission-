var bg;
var bgImage;
var bgImage1;
var flag=0;
var rover,mars_front,mars_side;
var sunImg;
var heatprobe;
var water;
var waterimg,x,y;
var vis=255;
var  laserimg;
var laserGroup;
var score=0;
var energyStatus=10;
var gameOver;
function preload()
{
    bgImage = loadImage("finalmars.png");
    bgImageA = loadImage("mars_surface.png");
    bgImageB = loadImage("marssurface2.jpeg");
    bgImage1 = loadImage("images.jpeg");
    mars_front=loadImage("mars-front.png")
    mars_front=loadImage("mars-front.png")
    mars_side=loadImage("mars_rover_img.png")
    energy1=loadImage("ENERGYBAR6.png")
    energy2=loadImage("ENERGYBAR5.png")
    energy3=loadImage("ENERGYBAR4.png")
    energy4=loadImage("ENERGYBAR3.png")
    energy5=loadImage("ENERGYBAR2.png")
    energy6=loadImage("ENERGYBAR1.png")
    sunImg=loadImage("sun.png")
    heatprobe=loadImage("heatprobe.png")
    waterimg=loadImage("water.png")
   laserimg=loadImage("laser.png")
   gameOverImg=loadImage("download.png");

}
function setup(){
    createCanvas(displayWidth,800);
   bg = createSprite(displayWidth/2,700,displayWidth,350);
    bg.addImage("bg1",bgImage)
    bg.addImage("bg2",bgImageA)
    bg.addImage("bg3",bgImageB)
    
  
    bg.scale=5;
    rover=createSprite(50,750);
    rover.addImage("rover1",mars_front);
    rover.addImage("rover2",mars_side);
    rover.addImage("rover3",heatprobe);
    rover.scale=0.5;

    energ=createSprite(800,70);
   
    energ.addImage("energy1",energy1)
    energ.addImage("energy2",energy2)
    energ.addImage("energy3",energy3)
    energ.addImage("energy4",energy4)
    energ.addImage("energy5",energy5)
    energ.addImage("energy6",energy6)
    energ.scale=0.5;

     sun=createSprite(displayWidth/2,100)
     sun.visible=false;
      invisibleGround=createSprite(displayWidth/2,600)
      invisibleGround.visible=false;

      water=createSprite(displayWidth/2,100)
      water.visible=false;
      water.addImage(waterimg);
      water.scale=0.5
      x= 600
      y=200;

      gameOver=createSprite(800,400);
      gameOver.addImage(gameOverImg);
      gameOver.visible=false;
      laserGroup=new Group();
     
      
}
function draw(){
    background(bgImage1);
    //bg.velocityX = -3;
    push ();
    fill("red");
    textSize(40);
    text("score"+score,1000,100)
    pop ();
    bg.scale = 3;
   
    if(energyStatus===0)
    {
      gameOver.visible=true;
      rover.destroy();
      alert("game end");
      energyStatus=-1;
    }
    if(score>600)
    {
      alert("you win!!!");
    }

   if( rover.x > displayWidth && flag===0){
  

  bg.changeImage("bg2")
    rover.x = 10;
   bg.scale=3;
    bg.width=displayWidth;
    flag=1;
   }
   if(rover.x > displayWidth  && flag===1)
      
    {
  
     
      bg.changeImage("bg3")
      rover.x = 10;
      bg.scale=4;
      bg.width=displayWidth;
      flag=2;
    }


    if( keyWentDown (RIGHT_ARROW)){
       rover.velocityX =10;
        rover.changeImage("rover2");
      
      }
      if( keyWentUp (RIGHT_ARROW)){
        rover.velocityX =0;
       
       }

       if( keyWentDown (LEFT_ARROW)){
        rover.velocityX =-10;
         rover.changeImage("rover2");
       
       }
       if( keyWentUp (LEFT_ARROW)){
         rover.velocityX =0;
        
        }
        if( keyWentDown (UP_ARROW) && energyStatus>0){
          laser=createSprite(rover.x,rover.y,5,80);
          laser.velocityY =-2;
          laser.shapeColor="red";
          laserGroup.add(laser);
          if(energyStatus>0)
          {
          energyStatus=energyStatus-10;
          }
          
          
         }
         push();
         fill("BLUE")
         textSize(20);
        text("HURRY,CLICK  C  TO COLLECT ENERGY BEFORE SUN  FADES AWAY AND MAKE A SCORE OF 600  TO WIN ENERGY"+energyStatus,40,30)
        
        pop();
         spawnSun();
        
    spawnWater();
    if (laserGroup.isTouching(water))
    {
      console.log("hello")
      water.visible=false;
      score++;
    }
 if(energyStatus>0 && energyStatus<50)
 {
  energ.changeImage("energy2")
  energ.scale=0.5;
 }
 else if(energyStatus>=50 && energyStatus<100)
 {
  energ.changeImage("energy3")
  energ.scale=0.5;
 }
 else if(energyStatus>=100 && energyStatus<150)
 {
  energ.changeImage("energy4")
  energ.scale=0.5;
 }
 else if(energyStatus>=200 && energyStatus<250)
 {
  energ.changeImage("energy5")
  energ.scale=0.5;
 }
 else if(energyStatus>=250 && energyStatus<300)
 {
  energ.changeImage("energy6")
  energ.scale=0.5;
 }





    drawSprites();

if( keyWentDown ("C")){
  if(vis>0){
  rover.velocityX =0;
  rover.changeImage("rover3");
 rover.scale = 3;
 if(energyStatus<350)
 energyStatus=energyStatus+50;

  }
 }
 if( keyWentUp ("C")){
  rover.velocityX =0;
  rover.changeImage("rover1");
  
  rover.scale=0.5;
 }
}


function spawnSun()
{

  if(vis>0 && flag===0)
  {
    push();
    vis-=0.5;
    tint (255,vis);
    image (sunImg,300,100,500,500)
    pop();
  }
 
  
 
}
function spawnWater()
{
  if(frameCount%100===0 && flag===1)
  {
   
    if(vis>0)
  {
    
    vis-=0.25;
    water.visible=true; 
    water.x= random(50,900)
    water.y=random(490,700);
   /* if()
    {

    }*/
    
  }
  else{
    water.visible=false;
  vis=255;
  x= random(50,900)
  y=random(490,800)
  }
  }
  
  

 
}
