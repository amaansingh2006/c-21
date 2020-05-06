var movingRect, fixedRect;
var obj1,obj2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect.debug = true;
  obj1 = createSprite(100,200,50,50);
  obj2 = createSprite(100,300,50,50);

}
  

function draw() {
  background(255,255,255);
  console.log("x " + movingRect.x);
  console.log("y " +movingRect.y);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if (isTouching(movingRect, obj2)){
movingRect.shapeColor = "red";
obj2.shapeColor = "red"
  }
  else{
    obj2.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
}
function isTouching(obj1,obj2){
  if(obj1.x - obj2.x < (obj1.width/2)+ (obj2.width/2)
  && obj2.x - obj1.x < (obj1.width/2)+ (obj2.width/2)
  && obj1.y - obj2.y < (obj1.height/2)+ (obj2.height/2)
  && obj2.y - obj1.y < (obj1.height/2)+ (obj2.height/2))
  return true;
  else
  return false;
}