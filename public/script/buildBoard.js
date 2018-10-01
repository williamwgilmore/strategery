let boardHtml = '';

for (let i=0; i<10; i++){
	boardHtml += ('<div class="boardRow">');
	for (let j=0; j<10; j++){
		boardHtml += ('<div class="boardSpace desert row' + i + 'Space' + j + '" data-row="' + i +'" data-space="' + j + '">Row: ' + i + '</br>Space: ' + j + '</div>');
	}
	boardHtml += ('</div>');
}

$('#board').html(boardHtml);

let water = 5;
let forest = 10;
let mountain = 4;
let grass = 12;

let totalSpaces = water + forest + mountain + grass;

for (let k=0; k < totalSpaces; k++){
	let selectedRow = Math.floor(Math.random() * 10);
	let selectedSpace = Math.floor(Math.random() * 10);
	let coord = '.row' + selectedRow + 'Space' + selectedSpace;
	let randomSpaceCoord = $('#board').find(coord);

	//Spaces that haven't been selected yet will be desert
	if (randomSpaceCoord.hasClass('desert')){
		randomSpaceCoord.removeClass('desert');
		//Select what the space will be
		chooseSpace(randomSpaceCoord);
	} else {
		//We're not changing the space, so try again with a different space
		k--
	}
}

function chooseSpace(space){
	if (water > 0){
		space.addClass('water');
		water --;
	}

	else if (forest > 0){
		space.addClass('forest');
		forest --;
	}

	else if (mountain > 0){
		space.addClass('mountain');
		mountain--;
	}

	else if (grass > 0){
		space.addClass('grass');
		grass--;
	}
}