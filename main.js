function preload() {
    
}

function setup(){
 canvas = createCanvas(640,480);
 canvas.position(110, 250);
 video = createCapture(VIDEO);
 video.hide();
}

function draw(){
    image(video,100, 100, 440, 280);
    circle(50, 50, 50)
    circle(590, 50, 50)
    circle(50, 430, 50)
    circle(590, 430, 50)
    rect(25, 75, 50, 330)
    rect(565, 75, 50, 330)
    rect(75, 25, 490, 50)
    rect(75, 405, 490, 50)
}

function take_snapshot(){
    save('student_name.png');
}
