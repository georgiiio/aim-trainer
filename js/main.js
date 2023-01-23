function draw() {
  var canvas = document.getElementById("square");
  var ctx = canvas.getContext("2d");
  ctx.rect(10, 10, 100, 100);
  ctx.fill();
}

function onAppReady() {
  console.log('document ready')
  draw()
}

document.addEventListener('DOMContentLoaded', onAppReady);
