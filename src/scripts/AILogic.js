export default function AILogic() {
    //calculate the distance between the ball and the center of the paddle
    let paddleCenter = rightPaddle.y + rightPaddle.height / 2;
    let distance = ball.y - paddleCenter;

    //if the ball is above the center of the paddle
    if (distance < -20) {
        rightPaddle.dy = -paddleSpeed + 3.2; // 4 - easy; 3.2 - normal; 3.15 - hard
    }
    //if the ball is below the center of the paddle
    else if (distance > 20) {
        rightPaddle.dy = paddleSpeed - 3.2;
    }
    //if the ball is close to the center of the paddle
    else {
        rightPaddle.dy = 0;
    }
}