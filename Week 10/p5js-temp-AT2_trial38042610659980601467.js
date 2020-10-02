var fade;
var fadeAmount = 1 



function setup() {
createCanvas( windowWidth, windowHeight);
background(0); 
textSize(32); 
textFont("Times");  
fade = 0 
}


function draw() {
background(0);
fill(247, 247, 240, fade);
text ('When I write, Im kind of like a god, creating everything. I create what looks real to me', 400, 600); 
text ('- Haruki Murakami', 1300, 900); 
if (fade<0) fadeAmount=1; 
if (fade>255) fadeAmount=-10;
fade+= fadeAmount;
print(fade); 



}
