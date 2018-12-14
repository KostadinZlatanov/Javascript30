const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
let hue = 0;
ctx.strokeStyle = 'red';
ctx.lineWidth = 70;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let x = 0;
let y = 0;
let isDrawing = false;
let direction = true;

function Draw(e)
{
    if(!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [x,y] = [e.offsetX,e.offsetY];
    hue++;
    hue%=360;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    if(ctx.lineWidth == 100 || ctx.lineWidth == 1) direction = !direction;
    if(direction) ctx.lineWidth++;
    else ctx.lineWidth--;

}

canvas.addEventListener('mousemove',Draw)
canvas.addEventListener('mousedown', (e) => {
    [x,y] = [e.offsetX, e.offsetY];
    isDrawing = true;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);