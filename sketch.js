var bullet,sound,weight;
var wall,thickness;
function setup() {
  createCanvas(1000,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  wall=createSprite(800,200, thickness, height/2);
  bullet= createSprite(50,200,10,70)
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
   if(bullet.x-wall.x < (wall.width=bullet.width)/2)
   {
     //bullet.velocityX=0;
     var damage=0.5  *weight* speed* speed/(thickness *thickness *thickness);
     if(damage>10)
     {
       wall.shapeColor=color(255,0,0);
     }
     if(damage<10)
     {
       wall.shapeColor=color(0,255,0);
     }
   }
  drawSprites();
}





