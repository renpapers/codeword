var xPosition, yPosition, size, rand, letter; 
var fade;
var fadeAmount = 1 

function setup() {
createCanvas( windowWidth, windowHeight);
textSize(32); 
fade = 0 
}


function draw() {
background(0);
fill(247, 247, 240, fade);
text ('When I write', 400, 600); 
text ('Im kind of like a god,', 600, 600); 
text ('creating everything.', 900, 600);
text ('I create what looks real to me', 600, 700); 
text ('- Haruki Murakami', 1300, 900); 
if (fade<0) fadeAmount=1; 
if (fade>255) fadeAmount=-10;
fade+= fadeAmount;
print(fade); 

}
