var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
WidthOfLine = document.getElementById("Width_of_line").value;
var mouseevent = "empty"
var lastPositionX,lastPositionY;
Color = document.getElementById("color").value;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
    mouseevent = "mouseDown";

    color = document.getElementById("color").value;
    WidthOfLine.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {
    mouseevent = "mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
    mouseevent = "mouseUp";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;

    if(mouseevent == "mouseDown") {
        console.log("current Position of x and y coordinates =");
        console.log("x = " + current_position_of_mouse_x + "y = " + currentPositionOfMouseY)

        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.linewidth = WidthOfLine;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY,40 ,0, 2 * Math.PI);

        
        ctx.stroke();
    }
    lastPositionX = currentPositionOfMouseX;
    lastPositionY = currentPositionOfMouseY;
}
lastPositionY = currentPositionOfMouseY;

function Clear_drawing() {
ctx.clearRect(0,0,canvas.width,canvas.height);
}