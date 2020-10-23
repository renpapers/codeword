# WEEK 11 - INTERESTING THINGS

And when I say interesting, I mean more visually interesting too! During this class Andy suggested (as I too was thinking) to have a different effect when using the mousePressed function in my code. The idea of having each click produce a spark of small letters or stars, bursting into space seemed like a more fluid, dynamic way of representing my concept (wishing realities aka galaxies into existence). I considered creating this beforehand in an intial note I jotted down, but didn't think I had time to create it, or thought it'd be too difficult. Once Andy raised the idea back into my mind, I decided to scrap the hyperlinking idea (considering it's week 11, I don't believe this idea will be achievable within our time limits) and try this one instead!

This led to a lot of enjoyable trialling and messing around with some sketches, I found a great tutorial from https://js6450.github.io/ about how to creat multiple objects with a single click under the mousePressed function. I trialled this out with a sketch from scratch first to understand the process fully (and not make my head spin by combining it with my original sketch straight off the bat). By utilising a new class, similarly to how I split individual a sentence into letters from my previous sketch, I used the code ```for(var i = 0; i < 30; i++){``` - meaning with every click, 30 circles would be created - setting them to spurse out at a certain speed. I also utilised the keyPressed function, where when you press spacebar, these stars being created from mousePressed furthermore spread out amongst the page - creating a true sky full of stars. I ensured that they would bounce off the edges instead of falling off the screen, so they're captured in their own little home/space (aka the screen). My first initial trial I had a bit of fun with random colours for the ellipses; although they only moved in a horizontal line, rather than sparking out in all directions (managed to fix this in the 2nd trial, I think a word was misplaced). 

For all of these sketches, there was a slow halt to the stars when they stopped moving - a gravitational kind of effect, where rather than suddenly stopping, they slowed to a halt (done using 'speed' syntax). Although it's a small detail, I loved how this created a more fluid effect to the animation, giving it more of an organic appearance when moving. 

Last week, Karen advised that I make get rid of the alpha in my background, as this caused my text to become slightly fuzzy and less clean appearing than they could be. This was originally done so the twinkling stars in the background could have more of a fading effect, rather than blinking/flashing. Although I was about to change this, I noticed that the alpha also caused my new stars I've been playing around with to create sorts of patterns in the background as they continued to move. The sense of permanence in this I thought added a poetic value to my piece - as I thought it was similar to what the text mentions: "Four Horses Cannot Draw It In" - A Chinese quote reminding us that something said cannot be unsaid, and by extension, once a reality is created, it cannot be uncreated. It raises the risk of something being written or said aloud becoming real, and therefore ceasing to be within the speakers (or in this case, writers) power to control anymore. This was a note I took in the earlier stages of analysing my text, and found it a happy accident that this code reminded me of it under a visual light - with the light reminder of the stars movement and journey, a visual memory of the movement from each star is created for the viewer. Because of this notion, I decided to leave the alpha in my background. I also figured, instead of using circles (aka stars) that spursed out by clicking the mouse, the quote "Four Horses Cannot Draw It In" could perhaps be used. Below are my initial trials. 



<img src="galaxy tests.JPG">

After following a couple tutorials (sources in code!) and altering it accordingly to what I wanted to create, this is what I came up with! 
View my first trial [here](https://renpapers.github.io/codeword/Processing%20Sketches/galaxy_trials/)

<img src="galax trials 2.JPG">

Altering and changing some more, so the dots burst out in random directions rather than horizontally (some debugging was done, and I realised it was due to a few spelling errors... woops) I made the circles white with a transparency added, automatically creating a glow-like effect (an objective I aimed for in the beginning when drawing out my concept). As they layer over one another, further depth is added to the piece as well making it seem more dimensional and 'wispy' (is that the right word?). 
[Here's my second trial](https://renpapers.github.io/codeword/Processing%20Sketches/galaxytrials2/)

<img src="galaxy test 2.JPG">

Here's me now, attempting to replace the ellipses with letters - it kind of worked? For some reason, when I used random letters instead of specific ones, squares/rectangles started popping up (I may have included too many characters under the random syntax). Below is what they look like sized down - more of what I was going for!

[Here's my third trial](https://renpapers.github.io/codeword/Processing%20Sketches/galaxytrials1.5/)

[Here's' my fourth trial](https://renpapers.github.io/codeword/Processing%20Sketches/galaxytrials3/)

<img src="galaxt test 3.JPG">


## What I need to add this week onto my code:
- add sound/music
- change typeface
- use quote "Four Horses Cannot Draw It In" for mousePressed function (spursing stars/galaxies). 


If I have extra time: 
- hyperlink circles/realities to another page 
- Get more stars to spark whenever using mousepressed function 
-
