console.log(window.innerWidth, window.innerHeight)
var ww = window.innerWidth*0.8, hh= window.innerHeight * 0.8;
var border=20
var innerw=ww-2*border,innerh=hh-2*border
var pointN=30, uw=1, uh=1
var position=[]

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.canvas.width = ww;
ctx.canvas.height = hh;



function genPosition(){
    position=[]
    for(var i=0;i<pointN;i++){
        let x= uw*i+border
        x=x+(Math.random())*uw
        y= Math.random()*innerh+border
        position.push({
            text: i+1,
            x,y
        })
    }
    //console.log(position)
    
}

function drawPoints(){
    pointN = Number(document.getElementById("nn").value);
    uw=innerw/(pointN+1),uh=innerh/(pointN+1)
    ctx.clearRect(0, 0, innerw, innerh);

    genPosition()
    //console.log(position)
    ctx.font = "20px Arial";
    for(var i in position){
        ctx.fillText(position[i].text, position[i].x, position[i].y)
    }
}

function findConnect(pointIndex){
    pointIndex=Number(pointIndex)
    let t1=pointIndex-10
    if(t1<0) low=0
    let t2=pointIndex+10
    if(t2>PointN) t2=PointN
    for(var i=t1; i<pointIndex;i++){
        if(position[i-1]){

        }
    }

}
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
