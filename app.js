let numberOfSquare = 25;
let squareWidth = numberOfSquare;
let squreHeight = numberOfSquare;
let canvasWidth = numberOfSquare * numberOfSquare;
let canvasHeight = numberOfSquare;


let container = document.querySelector('.container');
container.style.width = `${canvasWidth}px`;


function generateCanvas() {
	let canvas = document.querySelector('.canvas');

	for(let i = 0; i < numberOfSquare; i++) {
		for(let j = 0; j < numberOfSquare; j++) {
			let canvasSquare = document.createElement("div");
			canvasSquare.style.width = `${squareWidth}px`;
			canvasSquare.style.height = `${squreHeight}px`;
			canvasSquare.style.border = "1px solid #333";

			canvas.append(canvasSquare);
		}
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
	let canvas = document.querySelector('.canvas');

	canvas.addEventListener('mousemove', (element) => {
		console.log(element);
	});
}


generateCanvas();

let btnClear = document.querySelector('.btn-clear');
btnClear.addEventListener('click', resetCanvas);

// this code work filling the div background and works better than filling div with background color and seens like it's faster
document.querySelector('.canvas').addEventListener('mousedown',  fillDivs);

