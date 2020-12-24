'use strict';

const SPRITE_DIM = 8;
const SCALE = 4;
const SPRITE_DIM_SCALE = SPRITE_DIM * SCALE;

var sprites;
var canvas;
var context;
var map = [
	[1,1,2,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,3,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,0,0,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1]
];

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	let height = map.length;
	let width = map[0].length;
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			drawSprite(i, j, map[i][j]);
		}
	}
}

function drawSprite(i, j, sprite) {
	context.drawImage(sprites,
			// sprite x, y, h, w
			sprite * SPRITE_DIM, 0, SPRITE_DIM, SPRITE_DIM,
			// canvas x, y, h, w
			j * SPRITE_DIM_SCALE, i * SPRITE_DIM_SCALE, SPRITE_DIM_SCALE, SPRITE_DIM_SCALE);
}

function key(event) {
	switch(event.key) {
		case 'ArrowLeft': 
		case 'a':
			left();
			break;
		case 'ArrowRight':
		case 'd':
			right();
			break;
		case 'ArrowUp':
		case 'w':
			up();
			break;
		case 'ArrowDown':
		case 's':
			down();
			break;
		default:
			return;
	}
	draw();
}

function left() {			

}

function right() {

}

function up() {

}

function down() {
	
}

window.onload = function() {
	canvas = document.getElementById('screen');
	context = canvas.getContext('2d');
	context.imageSmoothingEnabled = false;
	sprites = new Image();
	sprites.addEventListener('load', function() {
		draw();
	}, false);
	sprites.src = 'sprites.png';
};
