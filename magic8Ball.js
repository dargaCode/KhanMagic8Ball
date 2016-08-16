var ballX = 200;
var ballY = 200;
var ballH = 375;
var xSpeed = 0;
var ySpeed = 0;
var timesToMove = 0;
var moveCount = 0;
var triAnim = 0.44;
var answerNum;
var answerText = "CLICK\nTO\nSHAKE";

var makeBall = function(){
    var windowH = ballH*0.50;
    var bevelH = windowH*1.1;
    var fluidRGB = color(22, 17, 89);
    //behind triangle
    var windowColor = color(fluidRGB); 
    //in front of triangle
    var fluidAlpha = 255-255/(timesToMove-moveCount);
    var fluidColor = color(fluidRGB,fluidAlpha);
    //shrink while shaking
    var triAnim = 0.40-(0.08*(timesToMove-moveCount));    
    var triR = windowH*triAnim;
    var triW = (3*triR)/sqrt(3);
    var triH = sqrt(sq(triW) - sq(triW/2));
    var triHMinusR = triH - triR;
    var textH = triH*0.14;

    background(125, 125, 125);
    //draw ball
    fill(0, 0, 0);
    ellipse(ballX, ballY, ballH, ballH);
    //draw bezel
    fill(38, 38, 38);
    ellipse(ballX,ballY,bevelH,bevelH);
    //draw window
    fill(22, 17, 89);
    ellipse(ballX, ballY, windowH, windowH);
    //draw triangle
    fill(22, 49, 184);
    triangle(ballX, ballY-triR,
             ballX-triW/2, ballY+triH-triR,
             ballX+triW/2, ballY+triH-triR);
    //draw text
    fill(159, 168, 191);
    textSize(textH);
    textAlign(CENTER);
    text(answerText,ballX,ballY-(0.5*textH));
    //draw "fluid"
    fill(fluidColor);
    ellipse(ballX, ballY, windowH, windowH);
};

var moveBall = function(x,y,totalMoves){
    ballX += x;
    ballY += y;

    //stop shaking
    if(moveCount >= totalMoves){
        if(ballX === 200 || ballX === 200){
            xSpeed = 0;
            ySpeed = 0;
        }
    } else if(ballX >= 240 || ballX <= 160){
        xSpeed *= -1;
        ySpeed *= -1;
        moveCount++;
    }
};
    
var decide = function(){
    answerNum = round(random(1,10));

    if(answerNum === 1){
        answerText = "IT IS\nCERTAIN";
    } else if(answerNum === 2){
        answerText = "NO\nDOUBT";
    } else if(answerNum === 3){
        answerText = "YOU\nCAN\nBET ON IT";
    } else if(answerNum === 4){
        answerText = "SIGNS\nPOINT\nTO YES";
    } else if(answerNum === 5){
        answerText = "ASK\nAGAIN\nLATER";
    } else if(answerNum === 6){
        answerText = "IT IS\nCERTAIN";
    } else if(answerNum === 7){
        answerText = "NO\nWAY\nTO KNOW";
    } else if(answerNum === 8){
        answerText = "DON’T\nCOUNT\nON IT";
    } else if(answerNum === 9){
        answerText = "MY\nSOURCES\nSAY NO";
    } else if(answerNum === 10){
        answerText = "VERY\nDUBIOUS";
    }
};

var shakeBall = function(){
    moveCount = 0;
    xSpeed = 12;
    ySpeed = 6;
    timesToMove = 6;
};

//on program start
shakeBall();

var mouseClicked = function(){
    shakeBall();
    decide();
};

var draw = function() {
    makeBall();
    moveBall(xSpeed,ySpeed,timesToMove);
};