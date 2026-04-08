
let gui;
let settings={size:15,res:0.01};
function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = new dat.GUI();
  gui.add(settings,"size",5,200);
  gui.add(settings,"res",0.001,0.1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  noFill();
  translate(0,height/2);
  
  beginShape();
  for(let x=0;x<width;x++)
 {
   let r=noise(x*settings.res);
   let y=map(r,0,1,-settings.size,settings.size);
   vertex(x,y);
} 
   endShape();
}
