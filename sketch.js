var gameState='play'
var bone,boneImg
var ball,ballImg
var dog,dogImg
var bg,bgImg
var gameover
var score=0
function preload(){
dogImg=loadImage('dog.png')
ballImg=loadImage('ball.png')
boneImg=loadImage('bone.png')
bgImg=loadImage('background.jpeg')
gameoverImg=loadImage('gameover.jpeg')
}

function setup() {
createCanvas(600,600)
 bg=createSprite(0,0,600,600)
bg.addImage(bgImg)
bg.scale=2.8
  
ballGroup=new Group()
  
ground=createSprite(300,530,600,10)
ground.visible=false
  
dog=createSprite(80,470)
dog.addImage(dogImg)
dog.scale=0.3
  
gameover=createSprite(300,250)
gameover.addImage(gameoverImg)
gameover.scale=0.15
gameover.visible=false
  
bg.velocityX=-3



bone=createSprite( 350,435 )
bone.addImage(boneImg)
bone.scale=0.10

}



function draw() {
 background('white')
if(gameState==='play'){

if(bg.x<0){
bg.x=300
}
dog.collide(ground)
score=score+5

if (keyDown('space')&&dog.y>=430)
  {
  dog.velocityY=-18
  }
  dog.velocityY=dog.velocityY+0.8
Spawnball()
if(ballGroup.isTouching(dog)){
gameState='end'
}

}
else if(gameState==='end'){
gameover.visible=true
ballGroup.setVelocityXEach(0)
bg.velocityX=0
dog.velocityY=0
}
drawSprites()
text('score:'+score,500,100)
}

function Spawnball (){
if(frameCount%200===0)
{
ball=createSprite(600,Math.round(random(450,480)) )
ball.addImage(ballImg)
ball.scale=0.1
ball.velocityX=-7
ball.lifetime=300
ball.depth=dog.depth
dog.depth=dog.depth+1
ballGroup.add(ball)
}
}

