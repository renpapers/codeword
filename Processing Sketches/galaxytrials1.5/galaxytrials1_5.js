// learnt tutorial from https://js6450.github.io/, has been altered and changed accordingly 
  var maxGalaxies = 1000;
  var galaxies= [];
  var letter;

  function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    noStroke();
    textSize(32);
    textFont("Times");
  }

  function draw(){
    background(0, 50);

    for(var i = 0; i < galaxies.length; i++){
      galaxies[i].checkBoundary();
      galaxies[i].update();
      galaxies[i].display();
    }
  }

  function mouseClicked(){
    size = int(random(600,100));
    letter = char(int(random(60,160)));
    if(galaxies.length < maxGalaxies){
      for(var i = 0; i < 30; i++){
        galaxies.push(new Galaxy(mouseX, mouseY, letter));
      }  
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

  function Galaxy(x, y){
    this.x = x;
    this.y = y;
    this.speedX = random(-5, 5);
    this.speedY = random(-5, 5);
    //this.size = random(1,10);
    this.textSize = size; 
    this.color = color(255, 255, 255, 100);
    this.letter = letter;

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
      this.speedY *= 0.98;
      this.x += this.speedX;
      this.y += this.speedY;
    }

    this.display = function(){
      push();
      fill(this.color);
      textSize(this.textSize);
      text(this.letter, this.x, this.y, this.size, this.size ); 
     // ellipse(this.x, this.y, this.size, this.size);
      pop();
    }
  }
