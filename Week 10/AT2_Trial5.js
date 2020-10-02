var xPosition, yPosition, size, rand; 
var wigglyStars = []; //group/bag of stars, what stars we have, where they are on the screen and what size they are 
var fade; 
var fadeAmount = 1

function setup() {
createCanvas(windowWidth, windowHeight);
noCursor();
background (0);
textSize(30);
textFont("Times"); //serif font
fade = 0
}


function draw() {
  background(0,0,35,25); //this would redraw the background every loop 
  fill (255, 253, 234);
text ('When I write Im kind of like a god, creating everything. I create what looks real to me.', 400, 600); 
text ('- HM', 410, 800); 
if (fade<0) fadeAmount=1;
if (fade>255) fadeAmount=-10; 
fade+= fadeAmount;
print(fade);
//bg stars
var galaxy ={
  locationX: random(width),
  locationY: random(height),
  size: random(1,5)
}
ellipse(mouseX,mouseY, galaxy.size, galaxy.size);
ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size);

fill (255, 253, 234,);
for (var i=0; i<wigglyStars.length; i++){
  wigglyStars[i].display(); //this displays the stars/letters. for each object in wigglystars, wiggleletters 'i display'.
}

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
  noStroke()
  ellipse (this.x, this.y, this.textSize, this.textSize); 
  textSize(this.textSize);
  text('HARUKI MURAKAMI', this.x, this.y); //an action we add to the 'class'. Will write the stars to the screen. Takes info abt the size, applies it to the font and writes it to the screen. 

}


}
