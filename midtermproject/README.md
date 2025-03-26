##Documentation
- To be honest, this assignemnt was one of the easier ones we've done in my opinion.
- First, function setup: `function setup()
	{createCanvas(400, 400);
	}`
- Then I picked some drum samples I liked, uploaded them
- I first looked at the 05functions js file and got the preloading code: `function preload(){
	Kick = loadSound('Rack Kick (essential).wav');
	Clap = loadSound('[Clap] 2012 D. Rich.wav');
	Snare = loadSound('[Hat] Shawty Redd.wav');
	Hat = loadSound('[Snare] Fuckin Witcha.wav');
	}`
- I then got the pressing function `function keyPressed() {
	if (key.toLowerCase() === 'q') {Kick.play();}
    if (key.toLowerCase() === 'w') {Clap.play();}
    if (key.toLowerCase() === 'e') {Snare.play();}
    if (key.toLowerCase() === 'r') {Hat.play();}
	}`
- It works

- link: https://editor.p5js.org/nickreinert/sketches/JoCfFI4tN