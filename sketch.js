//Create variables here
var doggy,HAPPYdoggy,foodR,foodS,dog,food;
var database;
var Rstock;




function preload()
{
	//load images here
   doggy=loadImage("images/dogImg.png");
   HAPPYdoggy=loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 600);


  database=firebase.database();

  dog=createSprite(250,400);
  dog.addImage(doggy);
 // dog.addImage(HAPPYdoggy);
  dog.scale=0.3;

  foodS=database.ref('food');
  foodS.on("value",readStock);
}


function draw() {  

background(46, 139, 87)


if(keyDown(UP_ARROW)){

  writeStock(foodR);
  dog.addImage(HAPPYdoggy);
}

  drawSprites();

  fill("white")
 textSize(20)
  text("PRESS UP ARROW TO FEED SPEKY",50,50);

  text("Food REMAINING : "+ foodR,100,200)
  //add styles here

}


function readStock(data){
  foodR=data.val();
  
}

function writeStock(x){

if(x<=0){
  x=0;
} else{
  x=x-1;
}
database.ref('/').update({
  food:x
})

}





