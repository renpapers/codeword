function setup() {
  createCanvas(800, 800);


}
function draw() {
  background('#FF9717');
  if (mouseX < 400) {
    noStroke();
      fill('#FF55A5');
    rect(0, 0, 400, 800); // Left


    noFill();
    stroke(0);
    strokeWeight(5);
    rect(100,400,200,100,50);
    noFill();
    stroke(0);
    strokeWeight(5);
    rect(100,200,100,200,50);
    
    

  }

  else {
    noStroke();
      fill('#FF55A5');
    rect(400, 0, 400, 800); // Right
    stroke(0);

    
   
  }
  
  
}
