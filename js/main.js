const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const grid = 16;

let target = {
  x: 160,
  y: 160,
}

function draw() {
  context.fillStyle = 'white';
  context.fillRect(target.x, target.y, grid, grid);
}

function onAppReady() {
  draw()
}

document.addEventListener('DOMContentLoaded', onAppReady);
