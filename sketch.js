var fixedrect,movingrect;


function setup() {
  createCanvas(1000,1000);
  fixedrect=createSprite(500, 500, 50, 50);
  movingrect=createSprite(500,500,50,50);
  fixedrect.shapeColor="red";
  movingrect.shapeColor="yellow";

  movingrect.debug=true;
 fixedrect.debug=true;
}

function draw() {
  background(0);  

movingrect.x=World.mouseX;
movingrect.y=World.mouseY;

console.log(movingrect.x-fixedrect.x);


  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && 
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 && 
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
fixedrect.shapeColor="blue";
movingrect.shapeColor="blue";

  }
  else {
    fixedrect.shapeColor="red";
    movingrect.shapeColor="yellow";

  }



  drawSprites();
}