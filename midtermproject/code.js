function setup(){
   createCanvas(400, 400);
}

function preload() {
  Kick = loadSound('Rack Kick (essential).wav');
  Clap = loadSound('[Clap] 2012 D. Rich.wav');
  Snare = loadSound('[Hat] Shawty Redd.wav');
  Hat = loadSound('[Snare] Fuckin Witcha.wav');
  
}

function keyPressed() {
  if (key.toLowerCase() === 'q') {
    Kick.play();
  }
    if (key.toLowerCase() === 'w') {
    Clap.play();
  }
    if (key.toLowerCase() === 'e') {
    Snare.play();
  }
    if (key.toLowerCase() === 'r') {
    Hat.play();
  }
}