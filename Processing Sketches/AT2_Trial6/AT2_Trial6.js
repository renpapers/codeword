//resource: https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ

var xPosition, yPosition, size, rand, letter; 
var wigglyStars = []; //group/bag of stars, what stars we have, where they are on the screen and what size they are 
var fade; 
var letterCount =0;
var author = 'HARUKI MURAKAMI'; 
var fadeAmount = 1



function setup() {
createCanvas(windowWidth, windowHeight);
noCursor();
background (0);
textSize(30);
textFont("Times"); //serif font
//fade = 0
}


function draw() {
  background(0,0,35,25); //this would redraw the background every loop 
  fill (255, 253, 234);
  textSize(30); 
text ('When I write I am kind of like a god, creating everything. I create what looks real to me.', 400, 600); 
text ('- HM', 410, 800); 
//if (fade<0) fadeAmount=1;
//if (fade>255) fadeAmount=-10; 
//fade+= fadeAmount;
//print(fade);
//bg stars
var galaxy ={
  locationX: random(width),
  locationY: random(height),
  starsize: random(1,5)
}
ellipse(mouseX,mouseY, galaxy.starsize, galaxy.starsize);
ellipse(galaxy.locationX, galaxy.locationY, galaxy.starsize, galaxy.starsize);

fill (255, 253, 234,);
for (var i=0; i<wigglyStars.length; i++){
  wigglyStars[i].display(); //this displays the stars/letters. for each object in wigglystars, wiggleletters 'i display'.
}

}


function mousePressed(){
  size = int(random(6,100)); //int = integer. Randomising size from 6-100. 
  letter = author[letterCount];
  wigglyStars.push(new Wiggle (mouseX, mouseY, size, letter)); //new wiggle = new character
  if (letterCount<author.length){
    letterCount++;
  } else {
    letterCount =0;
  }
}

class Wiggle {  //note: classes generally start with a capital letter. Class instantiates and move/wiggle the stars
constructor (x, y, size, letter) { //wishes wiggle into existence. 'x, y and size' are var's you created
  this.x = x;
  this.y = y;
  this.textSize = size; //all of this sets up the new object (aka star) with a new x, y and size value. 
  this.letter = letter; 
}
display() {
  push(); 
  textAlign(CENTER, CENTER); 
  noStroke();
  ellipse (this.x, this.y, this.textSize, this.textSize); 
  fill(0); 
  textSize(this.textSize);
  text(this.letter, this.x, this.y); //an action we add to the 'class'. Will write the stars to the screen. Takes info abt the size, applies it to the font and writes it to the screen. 
  pop(); 
 
}



}
