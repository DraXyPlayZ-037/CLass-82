canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

mevent = 'empty'
canvas.addEventListener('mousedown', my_mousedown);

function my_mousedown(e) {
    mevent = "mouseDown";
}

canvas.addEventListener('mouseup', my_mouseup);

function my_mouseup(e) {
    mevent = "mouseUp";


}

canvas.addEventListener('mouseleave', my_mouseleave);

function my_mouseleave(e) {
    mevent = "mouseLeave";
}

canvas.addEventListener('mousemove', my_mousemove);

function my_mousemove(e) {
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;

    if (mevent == "mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = document.getElementById("col").value;
        ctx.lineWidth = document.getElementById("lie").value;
        // ctx.shawdowColor = document.getElementById("yeet").value;
        // ctx.shadowBlur = document.getElementById("yeeted").value;
        // ctx.shadowOffsetX = (cpx)
        //ctx.shadowOffsetY = (cpy)
        //ctx.document.getElementById("let").value(cpx, cpy, 40, 0, 360)
        ctx.moveTo(lpx, lpy)
        ctx.lineTo(cpx, cpy)
        ctx.stroke()


    }

    lpx = cpx;
    lpy = cpy;
}

function saywhat() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}