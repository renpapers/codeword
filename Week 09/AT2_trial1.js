//24/09.20 - First trial for AT2 project: the landing page. Very basic, still a WIP that i'm not 100% happy with 
var xPosition, yPosition, size, rand; 
var wigglyStars = []; //group/bag of stars, what stars we have, where they are on the screen and what size they are 


function setup() {
createCanvas(windowWidth, windowHeight);
background (0);
textSize(30);
textFont("Times"); //serif font
frameRate(5);
}


function draw() {
  background(0); //this would redraw the background every loop 
fill (255, 253, 234,);
text (frameCount, mouseX, mouseY);
for (var i=0; i<wigglyStars.length; i++){
  wigglyStars[i].display(); //this displays the stars/letters. for each object in wigglystars, wiggleletters 'i display'.
}

var sparkle = {
  locationX: random(windowWidth),
  locationY: random (windowHeight),
  size: random(1,8)
}
fill (255, 253, 234,);
noStroke();
ellipse (sparkle.locationX, sparkle.locationY, sparkle.size, sparkle.size);
}


function mousePressed(){
  size = int(random(6,100)); //int = integer. Randomising size from 6-100. 
  wigglyStars.push(new Wiggle (mouseX, mouseY, size)); //new wiggle = new character
}
class Wiggle {  //note: classes generally start with a capital letter. Class instantiates and move/wiggle the stars
constructor (x, y, size) { //wishes wiggle into existence. 'x, y and size' are var's you created
  this.x = x;
  this.y = y;
  this.textSize = size; //all of this sets up the new object (aka star) with a new x, y and size value. 
}
display() {
  ellipse (this.x, this.y, this.textSize, this.textSize); 
  textSize(this.textSize);
  text('HARUKI MURAKAMI', this.x, this.y); //an action we add to the 'class'. Will write the stars to the screen. Takes info abt the size, applies it to the font and writes it to the screen. 

}
}
