//Create variables here
var dog, happyDog, database;
var foodS, foodStock;
var feed,add;
var foodobject;

function preload() {
  //load images here
  dogImage=loadImage('images/Dog.png');
  dog1Image=loadImage('images/happydog.png');
}

function setup() {
  createCanvas(500, 500);
 dog= createSprite(250,250,10,20);
 dog.addImage(dogImage);
 dog.scale=0.2;
database = firebase.database();
foodStock=database.ref('Food');
foodStock.on("value",readStock);

foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dog1Image)
  dog.scale=0.2



var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
feed = createButton("Feed The Dog")
feed.position(500,50)
feed.mousePressed(FeedDog)
add = createButton("Add Food")
add.position(400,50)
add.mousePressed(AddFood)
  
}


function draw() {  
  background(46, 139, 87);

  
  
  
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog1Image);
  }
  drawSprites();
  //add styles here

  fill("white")
  stroke("white") 
  text("Food Remaining = "+ foodS, 300,100);
}


function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position)
  
  
}

function showError(){
  console.log("Error in writing to the database");
}

function AddFood(){
  position++
  database.ref('/').update({
    Food:position
  })
  }
  
  function FeedDog(){
  dog.addImage(dogImage);
  foodobject.updateFoodStock(foodobject.getFoodStock()-1)
   database.ref('/').update({
     Food:foodobject.getFoodStock(),
     FeedTime:hour ()
   })
  }
  
