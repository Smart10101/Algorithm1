var ball1, ball2

function setup() {
  createCanvas(800,800);
  ball1 = createSprite(200, 300, 50, 50);
  ball2 = createSprite(350, 300, 50, 50);
  ball1.velocityX = 2;
  ball1.shapeColor = "red";
  ball2.velocityX = -2;
  ball2.shapeColor = "green";
}

function draw() {
  background(0);  
  drawSprites();
  checkBounce(ball2, ball1);
}

function checkBounce(object1, object2){
  if(object2.x - object1.x < object2.width/2 + object1.width/2 && 
    object1.x - object2.x < object1.width/2 + object2.width/2){
      object2.velocityX = object2.velocityX * (-1);
      object1.vleocityX = object1.velocityX * (-1);
  }
}