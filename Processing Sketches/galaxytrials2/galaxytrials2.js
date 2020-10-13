// learnt tutorial from https://js6450.github.io/, has been altered and changed accordingly 
  var maxGalaxies = 1000;
  var galaxies= [];

  function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);

    noStroke();
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
    if(galaxies.length < maxGalaxies){
      for(var i = 0; i < 30; i++){
        galaxies.push(new Galaxy(mouseX, mouseY));
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
    this.size = random(1,10);
    this.color = color(255, 255, 255, 100);

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
      //restitution
      this.speedX *= 0.98;
      this.speedY *= 0.98;
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
