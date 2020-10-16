var fixedRect, movingRect;

var go1, go2, go3, go4, go5;

var go6, go7;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;

 go1 = createSprite(100,100,50,50);
 go2 = createSprite(200,100,50,50);
 go3 = createSprite(300,100,50,50);
 go4 = createSprite(400,100,50,50);
 go5 = createSprite(500,100,50,50);

  go6 = createSprite(700,100,50,50);
  go7 = createSprite(700,700,50,50);
  
  go6.velocityY = 5;     // -5      5(-1) = -5
  go7.velocityY = -5;   // 5        -5(-1)  = 5
  

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  if(isTouching(movingRect,go1))      
  {
    text("WE WON!" ,300,300);
    go1.shapeColor = "yellow";
  }
  else
  {
    text("WE LOST!" ,300,300);
    go1.shapeColor = "pink";
  } 


  if(isTouching(movingRect,go2))      
  {
    text("WE WON!" ,400,400);
    go2.shapeColor = "yellow";
  }
  else
  {
    text("WE LOST!" ,400,400);
    go2.shapeColor = "pink";
  } 
 
  if(isTouching(movingRect,go3))      
  {
    text("WE WON!" ,400,400);
    go3.shapeColor = "yellow";
  }
  else
  {
    text("WE LOST!" ,400,400);
    go3.shapeColor = "pink";
  } 

  if(isTouching(movingRect,go4))      
  {
    text("WE WON!" ,400,400);
    go4.shapeColor = "yellow";
  }
  else
  {
    text("WE LOST!" ,400,400);
    go4.shapeColor = "pink";
  } 
  if(isTouching(movingRect,go5))      
  {
    text("WE WON!" ,400,400);
    go5.shapeColor = "yellow";
  }
  else
  {
    text("WE LOST!" ,400,400);
    go5.shapeColor = "pink";
  } 

  bounceOff(go6, go7);


  drawSprites();
}


function isTouching(ob1, ob2)
{

  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) 
    {
        return true;
    }
else 
{
    return false;
}

}


function bounceOff(ob1, ob2)
{
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2)
    {
      // bounce Off only on X axis
      ob1.velocityX = ob1.velocityX* (-1);
      ob2.velocityX = ob2.velocityX* (-1);
        

    }

    if( ob1.y - ob2.y < ob2.height/2 + ob1.height/2
      && ob2.y - ob1.y < ob2.height/2 + ob1.height/2)
      {
        // bounce off on Y axis
        ob1.velocityY = ob1.velocityY* (-1);
        ob2.velocityY = ob2.velocityY* (-1);
        
      }



}

