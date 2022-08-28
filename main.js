function preload(){ 
img=loadImage("google2.0.0.jpg");        
}

function setup(){
canvas = createCanvas(650,650);    
}

function draw(){
fill(0,0,255);
stroke(0,0,255);     
circle(100,100,70);
rect(100,100,10,500);
circle(100,600,70);
rect(100,100,500,10);
circle(600,100,70);
rect(600,100,10,500);
circle(600,600,70);
rect(100,600,500,10);
}