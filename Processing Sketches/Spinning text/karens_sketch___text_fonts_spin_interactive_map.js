function preload() {
  //esure the .ttf or .otf font stored in the assets directory 
  //is loaded before setup() and draw() are called
  font = loadFont('data/thStreet-Regular.otf'); 
  
}
var spin=0;
var letterSize;

function setup() {
  createCanvas (600,400);
  background(220);
  fill(0);
  angleMode(DEGREES);
  //textFont(font, 32);
textAlign(CENTER);
frameRate(5);
}


function draw() {
  fill(0); 
  translate(300,200);
  rotate(spin);
  textSize(letterSize);
  textFont(font);
text ('Hello world', 0,0);
spin+=map(mouseX,0,600,-10,10); 
letterSize=map(mouseY,0,600,8,72);
stroke(0);
fill(220, 30); 

rotate(0);
noStroke();
fill(220,30); 
translate(0,0);
rect(0,0,600,400);
}
