const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 640;
const GRID_SIZE = 16;


function getRandomInt(min, max){
  const includesMax = max + 1
  return Math.floor(Math.random() * (includesMax - min) + min)
}

function getCooradinates(){
  const x = getRandomInt(0, CANVAS_WIDTH - GRID_SIZE)
  const y = getRandomInt(0, CANVAS_HEIGHT - GRID_SIZE)
  return {
    x: x,
    y: y,
  }
}

function draw(coordinates) {
  context.fillStyle = 'white';
  context.fillRect(coordinates.x, coordinates.y, GRID_SIZE, GRID_SIZE);
}

function onAppReady() {
  const coordinates = getCooradinates()
  draw(coordinates)
}

document.addEventListener('DOMContentLoaded', onAppReady);
