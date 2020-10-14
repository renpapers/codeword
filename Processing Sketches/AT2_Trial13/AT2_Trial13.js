//star bg resource: https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ

var xPosition, yPosition, size, rand, letter; 
var wigglyStars = []; 
var sentences = ["When I write", "I am kind of like a god", "creating everything.", "I create what looks real to me - HM", "Is the reality that exists outside our minds", "and our consciousness", "truly there?", "does it exist?", "If so, how does it exist?", "How do we comprehend its existence?"]; 
var sentenceCount = 0;
var maxGalaxies = 1084; //1Q84 by Haruki Murakami reference
var galaxies = [];
var letterCount = 0;
var letters = 'Four Horses Cannot Draw it in'; //Translated: Yi Hua Ji Chu Si Nan Zhui 
var song;
var analyzer;



function preload(){
  font = loadFont('data/Atami-Regular.otf');
  song = loadSound ('data/Beat.mp3');
}
function setup() {
createCanvas(windowWidth, windowHeight);
noCursor();
background (0); 
  textFont(font); 
}

//Original from Sam Ng 
function windowResized() {
resizeCanvas(windowWidth, windowHeight);

}
function draw() {
  background(0,0,35,25);
  fill (255, 253, 234);
  textSize(30);
text (sentences[sentenceCount], windowWidth/4, windowHeight/2);
textSize(14);
fill (255, 253, 234);
text('spacebar = moving galaxies', windowWidth/56, windowHeight/26);
text('left click = creating galaxies', windowWidth/56, windowHeight/20);


var bg ={
  locationX: random(width),
  locationY: random(height),
  starsize: random(1,5)
}
ellipse(mouseX,mouseY, bg.starsize, bg.starsize);
ellipse(bg.locationX, bg.locationY, bg.starsize, bg.starsize);

fill (255, 253, 234);
for (var i=0; i<wigglyStars.length; i++){
  wigglyStars[i].display(); 
}

for(var i = 0; i < galaxies.length; i++){
  galaxies[i].checkBoundary();
  galaxies[i].update();
  galaxies[i].display();
}

}




function mouseClicked(){
  size = int(random(10, 15));
  letter = letters[letterCount];
  if(galaxies.length < maxGalaxies){
    for(var i = 0; i < 38; i++){
      galaxies.push(new Galaxy(mouseX, mouseY, letter));
    }
  }
  if(letterCount < letters.length){
    letterCount++;
  } else {
    letterCount = 0;
  }
}

function keyPressed(){
  if(key == " "){
    for(var i = 0; i < galaxies.length; i++){
      galaxies[i].speedX = random(-5, 5) * 2;
      galaxies[i].speedY = random(-5, 5) * 2;
    }
  }
} 
  
function mousePressed(){
  size = int(random(5,15)); 
  wigglyStars.push(new Wiggle (mouseX, mouseY, size));
if (sentenceCount<sentences.length){
  sentenceCount++;
} else {
  sentenceCount =0;
} 
}
function Galaxy(x, y){
  this.x = x;
  this.y = y;
  this.speedX = random(-5, 5);
  this.speedY = random(-5, 5);
  this.textSize = size;
  this.color = color(255, 255, 255, 100);
  this.letter = letter;
  
  this.checkBoundary = function(){
    if(this.x <0){
      this.x = 0;
      this.speedX *= -1;
    }
    if(this.x > width){
      this.x = width;
      this.speedX *= -1;
    }
    if(this.x < 0){
      this.y = 0;
      this.speedY *= -1;
    }
  }
  
  this.update = function(){
    this.speedX *= 0.98;
    this.speedY *= 0.98;
    this.x += this.speedX;
    this.y += this.speedY;
  }
  
     this.display = function(){
      push();
      fill(this.color);
      textSize(this.textSize);
      text(this.letter, this.x, this.y, this.size, this.size );
      pop();
    }
}
class Wiggle {  //note: classes generally start with a capital letter. Class instantiates and move/wiggle the stars
constructor (x, y, size, brightness) { //wishes wiggle into existence. 'x, y and size' are var's you created
  this.x = x;
  this.y = y;
  this.textSize = size;  
  this.glow =2;
  if (this.glow<100) {
    this.glow+=3;
  }

}


display() {
  push(); 
  noStroke();
  ellipse (this.x, this.y, this.textSize, this.textSize); 
  fill(255, 253, 234,); 
  pop(); 
 
}


}
