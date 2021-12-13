var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
line_width = 1;
radius = 10;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) 
{
    color = document.getElementById("color").value;
    line_width = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius_of_circle").value;

    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) 
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) 
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mouseumove);
function my_mouseumove(e) 
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") 
    {
        console.log("Last position of the X and Y coordinates - ");
        console.log("X = " + last_position_of_x + " Y = " + last_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc = (current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearArea() 
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}