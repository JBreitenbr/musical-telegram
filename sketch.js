let gui;
let recorder=[];
let settings={res:0.0104,alpha:128,nFrames:50};
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  gui = new dat.GUI();
  gui.add(settings,"alpha",5,255);
  gui.add(settings,"res",0.001,0.02);
  gui.add(settings,"nFrames",5,500);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255,settings.alpha);
  strokeWeight(1);
  
 
   let x1=noise(frameCount*settings.res)*width;
   let y1=noise(100+frameCount*settings.res)*height;
   point(x1,y1);  
   let x2=noise(200+frameCount*settings.res)*width;
   let y2=noise(300+frameCount*settings.res)*height;
   let frame={"x1":x1,"y1":y1,"x2":x2,"y2":y2};
   recorder.push(frame);
   while(recorder.length>settings.nFrames) recorder.shift();
   playback();
}
   function playback(){
     for(let frame of  recorder){
        line(frame.x1,frame.y1,frame.x2,frame.y2);
    }
     }
