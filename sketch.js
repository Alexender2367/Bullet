var bullet,sound,weight;
var wall,thickness;
function setup() {
  createCanvas(1600,400);
  bullet= createSprite(50,50)
  wall=createSprite(800,200,60,height/2)
  speed=random(55,90);
  weight=random(400,1500);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
   if(wall.x-bullet.x < (bullet.width=wall.width)/2)
   {
     bullet.velocityX=0;
     var deformation=0.5  *weight* speed* speed/22509;
     if(deformation>180)
     {
       bullet.shapeColor=color(255,0,0);
     }
     if(deformation<180 && deformation>100)
     {
       bullet.shapeColor=color(230,230,0);
     }
     if(deformation<100)
     {
       bullet.shapeColor=color(0,255,0);
     }
   }
  drawSprites();
}