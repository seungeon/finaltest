var loadingImage = 1;
var bubbleY = 800;
var bubbleX = 640;
var bubbleY1 = 500;
var bubbleX1 = 600;
var bgCount = 0;
var sound, bgm;
var trailX = [0,0,0,0,0] ;
var trailY = [0,0,0,0,0] ;


function preload(){
  sound = loadSound("./bgm.mp3");
	bgm = loadSound("./bgm.mp3");
}
function setup()
{
    createCanvas(1280,908);
    bg = loadImage("bg.png");

    mouse = loadImage("mouse.png");


    img = loadImage("img1.png");
    img2 = loadImage("img2.png");
    bgm.loop();
}

function draw()
{
	background(255);
    background(bg);
    
    image(bg,0+bgCount,0);
    image(bg,-bg.width+bgCount,0);
    bgCount = bgCount + 10;
    if(bgCount > bg.width){
    	bgCount =0;
    }

    fill(237,112,50);
    noStroke();
	if(mouseX > 100 && mouseX <100+img.width && mouseY > 100 && mouseY <100+img.height){
		image(img,100,100);
	}
	if(loadingImage === 1){
    	image(img,0,0,50,150);
    }else if(loadingImage === 2){
    	image(img2,0,0);
    }

    var time = (new Date())%1000/1000;
    fill(0);
   	ellipse(sin(time*2*PI)*100+bubbleX, bubbleY,bubbleY/3,bubbleY/3);
   	bubbleY = bubbleY - 10;
   	if(bubbleY < 0){
   		bubbleY = 800;
   	}

    fill(0);
   	ellipse(sin(time*2*PI)*50+bubbleX1, bubbleY1,bubbleY1/2,bubbleY1/2);
   	bubbleY1 = bubbleY1 - 10;
   	if(bubbleY1 < 0){
   		bubbleY1 = 500;
   	}


    image(mouse,mouseX, mouseY);

    trailX[0] = (mouseX + trailX[0] * 9) / 10;
    trailY[0] = (mouseY + trailY[0] * 9) / 10;
    
    image(mouse,trailX[0],trailY[0]);


    for (var i = 1; i < 5; i = i+1)
    {
    trailX[i] = (trailX[i-1] + trailX[i] * 9) / 10;
    trailY[i] = (trailY[i-1] + trailY[i] * 9) / 10;
  
    image(mouse,trailX[i],trailY[i]);
    }

    mouseColor = color(
    mouseX / canvasWidth * 255,
    mouseY / canvasWidth * 255,
    0,
    0);

   fill(mouseColor);


}

function mousePressed(){
	if(mouseX > 50 && mouseX <150 && mouseY > 50 && mouseY <150){
		if(loadingImage === 1){
			loadingImage = 2;
			sound.play();
		}else if(loadingImage ===2){
			loadingImage =1;
			sound.stop();
		}
	}
}