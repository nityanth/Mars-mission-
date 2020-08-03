var space_img;
var mars_img;
var spacecraft_img,spacecraft_img
var vehicle_img;
var vehicle;
var airballoon ;
var button;
var flag1=0;
var human;
var buttonText="first step";
function preload(){
  space_img = loadImage("space.jpg");
  mars_img = loadImage("mars_image.png");
  spacecraft_img = loadImage("spacecraft1.png");
 gif_earth = createImg("earth1.gif");
  vehicle_img = loadImage("launchvehicle.png");
  vehicle_img1 = loadImage("stage1.png");
  vehicle_img2 = loadImage("stage2.png");
  vehicle_img3 = loadImage("airballoon.png");
 himg = loadImage("human.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  mars = createSprite(displayWidth/2,500);
  mars.addImage(mars_img);
  mars.scale=2.8;
  //mars.debug=true;
  mars.setCollider("rectangle",0,0,500,50);
  ground = createSprite(displayWidth/2,650,displayWidth,10);
  ground.visible = false;
  //ground.debug=true;
 gif_earth.position(900,0);
  //gif_earth.debug = true;
  
  vehicle= createSprite(890,10);
  vehicle.addImage("stage1",vehicle_img);  
  vehicle.addImage("stage2",vehicle_img1);
  vehicle.addImage("stage3",vehicle_img2);
  //vehicle.addImage("stage4",vehicle_img3);
  vehicle.visible=false;
  
 

  spacecraft= createSprite(800,100);
  spacecraft.addImage("sp1",spacecraft_img);
  //spacecraft.addImage("sp2",vehicle_img3);

  spacecraft.scale = 0.5;
  spacecraft.visible = false;
  airballoon = createSprite(10,10,10,10);
  airballoon.visible = false;

 button =  createButton("start mission");
 button.position(displayWidth/2,300);
 button.size(100,20);

  button.style("font-family", "Bodoni");
  button.style("font-size", "10px");
  button.style("color", "red");
  button.style("background-color", "yellow");

  button1 =  createButton("Try Again");
 button1.position(displayWidth/2,400);
 button1.size(100,20);

  button1.style("font-family", "Bodoni");
  button1.style("font-size", "10px");
  button1.style("color", "red");
  button1.style("background-color", "yellow");
  
}

function draw() {
  background(space_img);
  //spacecraft.x=mouseX;
  //spacecraft.y=mouseY;
  mars.velocityX = -2;
  
  if(mars.x<550){
    mars.x = displayWidth/2;
  }
  if( keyWentDown ("d")){
    if(flag1===2)
    {
    vehicle.velocityX = 0;
    vehicle.changeImage("stage2");
    vehicle.scale = 2;
    flag1=4;
    }
    else{
      alert("wrong code,you needed to click start mission,please try again");
    }
  }
  if( keyWentDown ("s")){

    if(flag1===4)
    {
    vehicle.changeImage("stage3");
    vehicle.scale = 2;
    spacecraft.visible = true;
    spacecraft.x = vehicle.x-50;
    spacecraft.velocityY = 1;
    flag1=5;
    }
    else{
      alert("wrong code");
    }

  }

  if( keyWentDown ("r")){
    if(flag1===5)
    {
    spacecraft.visible = false;
    //spacecraft.changeImage("sp2");
   
    airballoon.x=spacecraft.x;
    airballoon.y=spacecraft.y;
    airballoon.addImage(vehicle_img3);
    airballoon.visible = true;
    airballoon.velocityY = 1;
    airballoon.scale = 0.5;
    flag1=6;
    alert("WE ARE GOING TO MARS")
    location.replace("screen.html");
    }
    else{
      alert("wrong code");
    }

  }
  if(airballoon.y>650){
   
     airballoon.velocityY = -5;
   }
   airballoon.velocityY+= 0.5;

   button.mousePressed(()=>{
     if(flag1===0)
     {
      human=createSprite(200,500)
     human.addImage(himg);
     alert("ATTENTION!HELP ASTRONAUT TO LAUNCH THE ROVER BY READING HIS STORY ")

      flag1=1;
     }
     else if(flag1===1)
     {
       human.visible=false;
       vehicle.visible=true;
     vehicle.scale = 0.4;
     vehicle.velocityX = -2;
     flag1=2;
     

    
     
     }
     else if(flag1===6)
     {
      
       //human.visible=false;
     location.replace("screen.html");
     
     }
   })

   button1.mousePressed(()=>{
     location.reload();
   })
  
  drawSprites();
}