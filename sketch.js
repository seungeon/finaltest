var loadingImage = 1;


function setup()
{
    createCanvas(1280,908);
    bg = loadImage("bg.png");


    img = loadImage("img1.png");
    img2 = loadImage("img2.png");
}

function draw()
{
    background(bg);
    


    fill(237,112,50);
    noStroke();

    if(loadingImage === 1){
    	image(img,0,0);
    }else if(loadingImage === 2){
    	image(img2,0,0);
    }
}

function mousePressed(){
	if(mouseX > 50 && mouseX <150 && mouseY > 50 && mouseY <150){
		if(loadingImage === 1){
			loadingImage = 2;
		}else if(loadingImage ===2){
			loadingImage =1;
		}
	}
}