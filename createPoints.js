console.log(window.innerWidth, window.innerHeight)
var ww = window.innerWidth * 0.8, hh = window.innerHeight * 0.6;
var border = 20
var innerw = ww - 2 * border, innerh = hh - 2 * border
var pointN = 30, uw = 1, uh = 1
var position = []

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.canvas.width = ww;
ctx.canvas.height = hh;


function genPosition() {
    position = []
    for (var i = 0; i < pointN; i++) {
        let x = uw * i + border
        x = x + (Math.random()) * uw
        y = Math.random() * innerh + border
        position.push({
            text: i + 1,
            x, y
        })
    }
    //console.log(position)

}

function drawPoints() {
    pointN = Number(document.getElementById("nn").value);
    uw = innerw / (pointN + 1), uh = innerh / (pointN + 1)
    ctx.clearRect(0, 0, innerw, innerh);

    genPosition()
    //console.log(position)
    ctx.font = "20px Arial";
    ctx.fillStyle = 'black'
    for (var i in position) {
        ctx.fillText(position[i].text, position[i].x, position[i].y)
    }
    $("#bfsbtn").prop('disabled', false);
    $("#create").collapse('hide');
    $("#createbtn").prop('disabled', true);
}

function reload(){
    location.reload();
}

