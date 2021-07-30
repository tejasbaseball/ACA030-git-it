var player;
var target;
var edges;
var snakeGroup;
function preload()
{
  bg=loadImage("bg.png");
  carrot=loadImage("carrot.png");
  bunnyImg=loadImage("bunnyImg.png");
  snakeImage=loadImage("snake.png");
}
function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
  snakeGroup=new Group();
  player=createSprite(40,560);
  player.addImage(bunnyImg);
  player.scale=0.15;
  target=createSprite(560,40);
  target.scale=0.2;
  target.addImage(carrot);
  player.shapeColor="white";
  target.shapeColor="pink";
  obs1=createSprite(300,250,150,20);
  obs2=createSprite(300,400,150,20);
  obs3=createSprite(500,400,150,20);
  obs4=createSprite(500,250,150,20);
  obs5=createSprite(100,400,150,20);
  obs6=createSprite(100,250,150,20);
  obs1.shapeColor="red";
  obs2.shapeColor="red";
  obs3.shapeColor="red";
  obs4.shapeColor="red";
  obs5.shapeColor="red";
  obs6.shapeColor="red";
}

function draw() {
  background(bg);  
  stroke("blue");
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  if(keyDown("up"))
  {
    player.y-=5;
  }
  if(keyDown("down"))
  {
    player.y+=5;
  }
  if(keyDown("right"))
  {
    player.x+=5;
  }
  if(keyDown("left"))
  {
    player.x-=5;
  }
  if(player.isTouching(target))
  {
    textSize(20);
    text("YOU WIN!", 300,300);
  }
  if(player.isTouching(obs1))
  {
    player.x=40;
    player.y=560;
  }
  if(player.isTouching(obs2))
  {
    player.x=40;
    player.y=560;
  }
  if(player.isTouching(obs3))
  {
    player.x=40;
    player.y=560;
  }
  if(player.isTouching(obs4))
  {
    player.x=40;
    player.y=560;
  }
  if(player.isTouching(obs5))
  {
    player.x=40;
    player.y=560;
  }
  if(player.isTouching(obs6))
  {
    player.x=40;
    player.y=560;
  }
  generateSnakes();
  for(var i=0;i<(snakeGroup).length;i++)
  {
    var temp=snakeGroup.get(i);
    if(player.isTouching(temp))
    {
      player.x=40;
      player.y=560;
    }
    if(temp.isTouching(edges[0])||temp.isTouching(edges[1])||temp.isTouching(edges[2])||temp.isTouching(edges[3]))
    {
      temp.destroy();
    }
  }
  drawSprites();
}
function generateSnakes()
{
  if(frameCount%30===0)
  {
    var snake=createSprite(random(50,500),random(50,500),random(30,80),5);
    snake.scale=random(0.1,0.3);
    snake.addImage(snakeImage);
    snake.shapeColor="yellow";
    snake.velocityX=random(-5,5);
    snakeGroup.add(snake);
  }
}
