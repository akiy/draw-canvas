let squareDimension = 20
let numberOfSquare = 30;
let squareWidth = squareDimension;
let squreHeight = squareDimension;
let canvasWidth = squareDimension * numberOfSquare;
let canvasHeight = squareDimension * numberOfSquare;


let container = document.querySelector('.container');
container.style.width = `${canvasWidth}px`;
container.style.height = `${canvasHeight}px`;


function generateCanvas() {
	let canvas = document.querySelector('.canvas');

	for(let i = 0; i < numberOfSquare * numberOfSquare; i++) {
		let canvasSquare = document.createElement("div");
		canvasSquare.style.width = `${squareWidth}px`;
		canvasSquare.style.height = `${squreHeight}px`;
		canvasSquare.style.border = "1px solid #457b9d";

		canvas.append(canvasSquare);
	}
}

function resetCanvas() {
	let divs = document.querySelectorAll('div');

	divs.forEach( (div) => {
		
		if (div.style.backgroundColor) {
			div.style.removeProperty('background-color');
		}
	});
}

function fillDivs(element) {

	if (!element.target.style.backgroundColor) {
		element.target.style.backgroundColor = "#963D5A";
	}

	// else  {
	// 	element.target.style.removeProperty('background-color');
	// }
}

function drawWhilstMoving(target, whileMove) {
	let endMove = function(){
		this.removeEventListener('mousemove', whileMove);
	}

	target.addEventListener('mousedown', function(element) {
		element.stopPropagation();
		target.addEventListener('mousemove', whileMove);
		target.addEventListener('mouseup', endMove);
	});
}

generateCanvas();

let btnClear = document.querySelector('.btn-clear');
btnClear.addEventListener('click', resetCanvas);

drawWhilstMoving(document.querySelector('.canvas'), fillDivs);