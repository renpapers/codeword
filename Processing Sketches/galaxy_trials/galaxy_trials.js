var maxGalaxy=1000;
var galaxies = []



function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
noStroke();
}


function draw() {
background(0, 50);
for(var i=0; i< galaxies.length; i++){
  galaxies[i].checkBoundary();
  galaxies[i].update();
  galaxies[i].display();
}
}

function mouseClicked(){
  if(galaxies.length < maxGalaxy) {
    for(var i=0; i < 10; i++){
      galaxies.push(new Galaxies(mouseX, mouseY));
    }
  }
}

function keyPressed(){
  if(key == " "){
    for(var i= 0; i < galaxies.length; i++){
      galaxies[i].speedX = random(-5, 5) * 2;
      galaxies[i].speedY = random(-5, 5) * 2;
    }
  }
}

function Galaxies(x, y){
  this.x = x;
  this.y = y;
  this.speedX = random(-5, 5);
  this.speedY = random(-5, 5);
  this.size = random(2,20);
  this.color = color(random(255), random(255), random(255), 100);
  
  this.checkBoundary = function(){
    if(this.x < 0){
      this.x = 0;
      this.speedX *= -1;
    }
    if(this.x > width){
      this.x = width;
      this.speedX *= -1;
    }
    if(this.y < 0){
      this.y = 0;
      this.speedY *= -1;
    }
    if(this.y > height){
      this.y = height;
      this.speedY *= -1;
    }
  }
  
  this.update = function(){
    this.speedX *= 0.98;
    this.speedY *= 0,98;
    this.x += this.speedX;
    this.y += this.speedY;
  }
  
  this.display = function(){
    push();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
}
