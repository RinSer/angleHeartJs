var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');

ctx.font = "24px Comic Sans MS, Comic Sans, cursive";
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 4;
ctx.lineCap = "round";
//ctx.fillStyle= "#ff0000";

var cWidth, cHeight;
if (canvas.width > canvas.height) {
    var cWidth = canvas.width;
    var cHeight = canvas.height;
} else {
    var cWidth = canvas.height;
    var cHeight = canvas.width;
}

ctx.textAlign = "center";
ctx.fillText("Be my valentine!", cWidth / 2, cHeight - 8);

ctx.translate(cWidth/3, cHeight/5);

setInterval(draw(3), 250);

function draw(start) {
    var numberOfSides = start;
    
    return function() {
        ctx.beginPath();
        ctx.clearRect(-5, -cWidth/12 - 5, cWidth, cHeight - 27);
        ctx.closePath();
        
        var dX = drawHalfPolygon(numberOfSides, cWidth/12, cWidth/12, 0)[0];
        drawHalfPolygonReverse(numberOfSides, cWidth/12, cWidth/4, 0);
        drawLowerAngle(cWidth/3, dX);
        /*numberOfSides = numberOfSides < 8 ? numberOfSides + 6 : numberOfSides - 5;
        if (numberOfSides == 13) numberOfSides = 8;*/
        numberOfSides++;
        if (numberOfSides > 13) numberOfSides = start;
    }
}

function drawLowerAngle(side, dX){
    var h = side * Math.sin(Math.PI/3);
  
    ctx.beginPath();
        
    ctx.moveTo(side - dX, 0);
    ctx.lineTo(side/2, h);
    ctx.lineTo(dX, 0);
    
    ctx.stroke();
    //ctx.fill();
        
    ctx.closePath();
    ctx.save();
}

function drawHalfPolygon(numberOfSides, size, Xcenter, Ycenter) {  
    var x, y;
    var maxSides = numberOfSides / 2 + 1;

    ctx.beginPath();
    ctx.moveTo(Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          
    
    
    for (var i = 1; i < maxSides; i++) {
        x = Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides);
        y = Ycenter - size * Math.sin(i * 2 * Math.PI / numberOfSides);
        if (y > Ycenter) y = Ycenter;
        ctx.lineTo(x, y);
    }
    
    ctx.stroke();
    //ctx.fill();

    ctx.closePath();
    ctx.save();

    return [x, y];
}

function drawHalfPolygonReverse(numberOfSides, size, Xcenter, Ycenter) {  
    var x, y;
    var maxSides = numberOfSides / 2 + 1;

    ctx.beginPath();
    ctx.moveTo(Xcenter -  size * Math.cos(0), Ycenter -  size *  Math.sin(0));          
    
    
    for (var i = 1; i < maxSides; i++) {
        x = Xcenter - size * Math.cos(i * 2 * Math.PI / numberOfSides);
        y = Ycenter - size * Math.sin(i * 2 * Math.PI / numberOfSides);
        if (y > Ycenter) y = Ycenter;
        ctx.lineTo(x, y);
    }
    
    ctx.stroke();
    //ctx.fill();

    ctx.closePath();
    ctx.save();

    return [x, y];
}