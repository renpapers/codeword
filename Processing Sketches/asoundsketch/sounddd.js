var song; //initiating our variable
var analyzer;

function setup() {
song = loadSound ('data/beat.mp3'); //associate our sound to the variable ;song' 
createCanvas (windowWidth, windowHeight); //create full window canvas
background(0);
analyzer = new p5.Amplitude();
analyzer.setInput(song);
fill (120);
textSize(72);
textAlign (CENTER, CENTER);
}

function draw(){
  background (0,10);
  fill(120);
  var volume = analyzer.getLevel();
  volume*=400;
  //ellipse(width/2,height/2,volume,volume);
  fill(255, 167, 3);
  text(int(volume), width/2, height/2);
  textSize(volume*2);
 // text('MAYBE YOU ARE THE REASON', width/2, height/2);

}

function mousePressed(){
if (song.isPlaying()) {
  background(255);
song.stop(); //if song is playing, stop it 
song.noLoop();

}
else{
  background(0);
  song.play();
  song.loop();
}
}
//song.play();

  
