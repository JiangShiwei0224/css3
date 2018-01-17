var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');

ctx.fillStyle = '#ccc';
ctx.fillRect(0, 0, 300, 300);
ctx.globalCompositeOperation = 'destination-out';


function clear(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();
    // ctx.clearRect(x, y, 30, 30);
}

myCanvas.onmousedown = function(e) {
    var event = e || window.event;
    var disX = event.clientX;
    var disY = event.clientY;
    clear(disX, disY);
    document.onmousemove = function(e) {
        var event = e || window.event;
        var disX = event.clientX;
        var disY = event.clientY;
        clear(disX, disY);
    }
    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
    return false;
}