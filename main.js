//-----------------------------------------------------------setup
//-----------------------------------------------------------------
//global variables
var canvas = document.querySelector('canvas');//grab canvas
var ctx = canvas.getContext('2d');
var mouseX = 0;
var mouseY = 0;

//functions
function resizeCanvas(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

function updateMouseXY(e){
  mouseX = e.x;
  mouseY = e.y;
}
function ranColor(){
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  // return 'rgb('+r+','+g+','+b+')';
  return `rgb(${r},${g},${b})`;
}
//events
window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', updateMouseXY);
resizeCanvas();

//---------------------------------------------------------draw
//-----------------------------------------------------------------
function draw(){
  ctx.fillStyle = ranColor();
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.font = '80px Gza';
  ctx.strokeStyle = ranColor();
  ctx.lineWidth = 4;
  ctx.strokeText('*____*', mouseX, mouseY); //text, left, right

  setInterval(draw, 1000/30);
  requestAnimationFrame(draw);
}
// ctx.strokeText();
// setInterval(draw, 1000/30);
draw();
