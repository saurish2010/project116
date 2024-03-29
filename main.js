noseX=0;
noseY=0;
function preload(){
    img=loadImage('https://i.postimg.cc/SKFQwnXh/download-removebg-preview.png');

}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet Is Initialized");
}
function draw(){
    image(video,0,0,300,300);
    
    image(img,noseX,noseY,70,70);
    
}
function takesnapshot(){
    save('myFilterImage.png');
}
function gotPoses(results){
    if(results.length >0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-30;
        noseY=results[0].pose.nose.y-25;
        console.log("nose x ="+noseX);
        console.log("nose y ="+noseY);
        

    }
}