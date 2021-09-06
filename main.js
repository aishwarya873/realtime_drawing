noseX=0;
noseY=0;
difference=0;
rightWrist=0;
leftWrist=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#00FFFF');
document.getElementById("square_side").innerHTML="width and height of a square will be ="+ difference+"px";
fill("#FFFF00");
stroke("#FFFF00");
square(noseX,noseY,difference)
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX=" + noseX + "noseY=" +noseY);
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(leftWrist-rightWrist );
        console.log("leftWrist= " + leftWrist + "rightWrist="+ rightWrist+"difference="+ difference);
    }
}