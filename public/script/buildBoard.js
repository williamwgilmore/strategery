let boardHtml = '';

for (let i=0; i<10; i++){
	boardHtml += ('<div class="boardRow">');
	for (let j=0; j<10; j++){
		boardHtml += ('<div class="boardSpace row' + i + 'Col' + j + ' desert" data-type="desert" data-row="' + i +'" data-col="' + j + '"></div>');
	}
	boardHtml += ('</div>');
}

$('#board').html(boardHtml);

let water = 20;
let forest = 20;
let mountain = 5;
let grass = 30;

let totalSpaces = water + forest + mountain + grass;

for (let k=0; k < totalSpaces; k++){
	let selectedRow = Math.floor(Math.random() * 10);
	let selectedCol = Math.floor(Math.random() * 10);
	let coord = '.row' + selectedRow + 'Col' + selectedCol;
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
		space.data('type', 'water');
		water --;
	}

	else if (forest > 0){
		space.addClass('forest');
		space.data('type', 'forest');
		forest --;
	}

	else if (mountain > 0){
		space.addClass('mountain');
		space.data('type', 'mountain');
		mountain--;
	}

	else if (grass > 0){
		space.addClass('grass');
		space.data('type', 'grass');
		grass--;
	}
}