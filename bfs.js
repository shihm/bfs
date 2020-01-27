
var boundary=[]
var notused=[]
var step=0
var txt='Input node to start search: '

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
function enableStart(){
    if(document.getElementById("start").value){
        $("#startbtn").prop('disabled', false)
    }
}

function bfs() {
    let start0 = Number(document.getElementById("start").value);
    typeconsol(start0)
    boundary=[]
    boundary.push(start0)
    notused=[]
    for (var i = 1; i <= pointN; i++) { notused.push(i) }
    
    next()
    $("#startbtn").prop('disabled', true)
}

function next(){
    notused = notused.filter(value => !boundary.includes(value))
    let boundary2 = []
    for (var i in boundary) {
        let temp=findConnect(boundary[i])

        if(temp.length>0){
            notused = notused.filter(value => !temp.includes(value))
            if(notused.length==0){
                endsearch()
            }
            else{
                boundary2=boundary2.concat(temp)
            }
            
        }
    }
    step=step+1
    typeconsol('<p>Step: '+step+'</p>')
    typeconsol('<p>Boundary: '+boundary2+'</p>')
    typeconsol('<p>Not visited: '+notused+'</p>')
    //console.log(dist,'boundary2',boundary2,'notused',notused)

    if(boundary2.length>0){
        boundary=boundary2
    }
    else{
        endsearch()
    }
}
function endsearch(){
    typeconsol('<p style="color: red;">End')
    $("#nextbtn").prop('disabled', true)
}

function typeconsol(content){
    txt+=content
    console.log(txt)
    let scrl= document.getElementById("bfsconsole")
    scrl.innerHTML = txt
    scrl.scrollTop = scrl.scrollHeight;
}