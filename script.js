var points = 0;

function showPoints(points){
    var aux = document.getElementById("point")

    var attPoints = "Points: " + points

    aux.innerHTML = attPoints
}

function addBall(){
    //Creating a div
    var ball = document.createElement("div")

    //setting attribute class ball to div
    ball.setAttribute("class", "ball")

    //calculating random positions for the ball
    var x = Math.floor(Math.random() * 1000)
    var y = Math.floor(Math.random() * 600)

    //setting position on ball 
    ball.setAttribute("style", "left:" + x + "px; top:" + y + "px;")

    //Creating click action for remove ball
    ball.setAttribute("onclick", "explode(this)")

    //Putting ball on screen
    document.body.appendChild(ball);

}

function countPoints(point){
    points++
    showPoints(points)
}

function explode(elemtent){
    document.body.removeChild(elemtent)
    countPoints(points)
}

// 
function init(){
    setInterval(addBall, 1000)
}