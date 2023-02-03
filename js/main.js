const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 640;
const GRID_SIZE = 16;
let coordinates = { x: 0, y: 0 }
let score = 0


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

function removeTarget(coordinates){
  context.clearRect(coordinates.x, coordinates.y, GRID_SIZE, GRID_SIZE)
}

const onClickTarget = ( event ) => {
  let checkResult = checkHit(coordinates, {x: event.offsetX, y: event.offsetY})
  if (checkResult){
    score ++
    document.querySelector('#counter').innerHTML = score
    renderTarget()
  }
}

function renderTarget(){
  removeTarget(coordinates)
  coordinates = getCooradinates()
  draw(coordinates)
}

function gameProcess(){
  renderTarget()
}

function checkHit (target, click){
  let x = click.x;
  let y = click.y;
  const checkHitX = x >= target.x && x <= target.x + GRID_SIZE
  const checkHitY = y >= target.y && y <= target.y + GRID_SIZE
  if(checkHitX && checkHitY){
    return true 
  } else{
    return false
  }
}

function onAppReady() {
  const gameField = document.getElementById('game')
  gameField.addEventListener('click', onClickTarget)
  gameProcess()
}

document.addEventListener('DOMContentLoaded', onAppReady);
