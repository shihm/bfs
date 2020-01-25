console.log(window.innerWidth, window.innerHeight)
var ww = window.innerWidth * 0.8, hh = window.innerHeight * 0.8;
var border = 20
var innerw = ww - 2 * border, innerh = hh - 2 * border
var pointN = 30, uw = 1, uh = 1
var position = []

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.canvas.width = ww;
ctx.canvas.height = hh;

var boundary=[]
var notused=[]

var dist=0


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
}

function findConnect(point) {

    /*let t1=pointIndex-10
    if(t1<0) low=0
    let t2=pointIndex+10
    if(t2>pointN) t2=pointN*/
    
    let connection = []
    for (var i in notused) {
        if (isConnected(notused[i], point)) {
            connection.push(notused[i])
            drawConnection(point,notused[i])
        }
    }
    
    return connection
}

function isConnected(point1, point2) {
    let dx = (Number(position[point1 - 1].x) - Number(position[point2 - 1].x)) / uw
    let dy = (Number(position[point1 - 1].y) - Number(position[point2 - 1].y)) / uh
    let dist2 = dx * dx + dy * dy
    //console.log(point1,point2,dist2)
    if (dist2 < 100) {
        console.log(point1,point2,'is connected')
        return true
    }
    else {
        return false
    }
}

function drawConnection(point1, point2) {
    let x1=Number(position[point1 - 1].x),y1=Number(position[point1 - 1].y),
    x2=Number(position[point2 - 1].x),y2=Number(position[point2 - 1].y)

    ctx.strokeStyle = "red";

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}


function bfs() {
    let start0 = Number(document.getElementById("start").value);
    boundary=[]
    boundary.push(start0)
    notused=[]
    for (var i = 1; i <= pointN; i++) { notused.push(i) }
    
    next()
}

function next(){
    
    notused = notused.filter(value => !boundary.includes(value))
    let boundary2 = []
    for (var i in boundary) {
        let temp=findConnect(boundary[i])

        if(temp.length>0){
            notused = notused.filter(value => !temp.includes(value))
            boundary2=boundary2.concat(temp)
        }
        
    }
    dist=dist+1
    //console.log(dist,'boundary2',boundary2,'notused',notused)

    if(boundary2.length>0){
        boundary=boundary2
    }
    else{
        console.log('no more connections!')
    }
}
/*function bfs(){
    let start0 = Number(document.getElementById("start").value);
    let queue=[]
    queue.push(start0)
    let notused=position.map((x) => x)
    //seen.push(start0)
    //let distance=0
    while(queue.length>0){
        let temp=queue.shift()
        console.log(temp)
        connection= findConnect(temp)

        console.log('seen',seen)
        console.log(temp,'all connection',connection)
        if(connection.length>0){
            for(var i in connection){
                if(seen.indexOf(connection[i])>=0){
                    console.log('duplicate',connection[i])
                    connection.splice(i,1)
                }
                else{
                    queue.push(connection[i])
                    seen.push(connection[i])
                }
            }

            console.log(temp,connection)
            drawConnection(temp,connection)
        }
    }
}*/
/*function resolve1() {
    return new Promise(resolve => {
        setTimeout(() => {
            testing1()
            resolve('resolved');
        }, 2000);
    });
}
function resolve2() {
    return new Promise(resolve => {
        setTimeout(() => {
            testing2()
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall() {
    await resolve1();
    await resolve2()
}



function testing1() {
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}


function testing2() {
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}*/
