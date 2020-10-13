//resource: https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ

var xPosition, yPosition, size, rand; 
var wigglyStars = []; //group/bag of stars, what stars we have, where they are on the screen and what size they are 
var fade; 
var sentences = ["When I write I am kind of like a god, creating everything. I create what looks real to me - HM", "Is the reality that exists outside our minds", "and our consciousness", "truly there?", "does it exist?", "If so, how does it exist?", "How do we comprehend its existence?"]; 
var sentenceCount = 0
var fadeAmount = 1
var brightness 


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
text (sentences[sentenceCount], 400, windowHeight/2);
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
  wigglyStars[i].update();
}

}


function mousePressed(){
  size = int(random(6,100)); 
  wigglyStars.push(new Wiggle (mouseX, mouseY, size));
if (sentenceCount<sentences.length){
  sentenceCount++;
} else {
  sentenceCount =0;
} 
}

class Wiggle {  //note: classes generally start with a capital letter. Class instantiates and move/wiggle the stars
constructor (x, y, size) { //wishes wiggle into existence. 'x, y and size' are var's you created
  this.x = x;
  this.y = y;
  this.textSize = size;  
  this.brightness =255;
  if (this.brightness<100) {
    this.brightness+=1;
  }

}
display() {
  push(); 
  noStroke();
  ellipse (this.x, this.y, this.textSize, this.textSize); 
  fill(this.brightness); 
  pop(); 
 
}
update(){
}

}
