function setup() {
createCanvas (500,500);

background (255,0,0);
stroke(1); //the colour of the stroke
strokeWeight(5); //the line thickness
line (100,100,400,400);
}


function draw() {
 
 strokeWeight(0);
  fill (mouseX/2,(mouseX+mouseY)/4,mouseY/2);
 rect (100,100,300,300); //rect(x1,y1,width, height)
 fill ((mouseX+mouseY)/4,255-mouseX/2,255-mouseY/2);
 ellipse (mouseX,mouseY,100,100); //(centre x, centre y, width, height)


}

function keyPressed () {
  fill(255,0,0);
  rect (0,0,500,500);
  
}
