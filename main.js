rightWrist = "";
leftWrist = "";
leftWristSong = "";
rightWristSong = "";

function preload(){
    leftWristSong = loadSound('The Search.mp3');
    rightWristSong = loadSound('alone.mp3');
}

function setup(){
    canvas = createCanvas(470,370);
    canvas.position(520,300);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log('pose net works');
}

function draw(){
    image(video , 0 , 0 , 470 , 370);


}

function gotPoses(results){
    if(results.length > 0){
        rightWrist = results[0].pose.rightWrist.x;
        lefttWrist = results[0].pose.rightWrist.y;
        console.log('left wrist: ' + leftWrist + " and right wrist : " + rightWrist);


        if( leftWrist> 0){
            leftWristSong.play();
        }

        if( rightWrist > 0){
            rightWristSong.play();
        }
    }
}