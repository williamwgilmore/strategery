//Clicking on board space always deselects the last space and closes the build menu.
//It can also open a build menu if a grass space is clicked
$('.boardSpace').on('click', function(){
	deselectSpace();
	closeBuildMenu();
	spaceType($(this));
});

//All functions called when clicking on a board space
function deselectSpace(){ 
	$('#board').find('.selectedSpace').removeClass('selectedSpace');
}

function closeBuildMenu(){ 
	$('#buildMenu').html('');
}

function selectSpace(space){ 
	$(space).addClass('selectedSpace');
}

function showSpaceInfo(space){
	let thisSpace = '';

	let row = space.data('row') + 1;
	let col = space.data('col') + 1;
	let type = space.data('type');

	thisSpace = 'Row: ' + row + '</br>Col: ' + col + '</br>Type: ' + type; 
	$('#spaceInfo').html(thisSpace);
}

function spaceType(space){
	selectSpace(space);
	showSpaceInfo(space);

	if (space.hasClass('grass') || space.hasClass('buildable')){
		openBuildMenu();
	}
}

//Build functions
function openBuildMenu(){
	$('#buildMenu').html('<button class="buildTown" data-build="town">Build Town</button>');
}

function checkBuildCost(item){
	switch (item){
		case 'town':
			return true;
			break;
		default:
			return false;
			break;
	}
}

$('#buildMenu').on('click', '.buildTown', function() {
	let space = $('#board').find('.selectedSpace');
	let buildItem = $(this);
	if (checkBuildCost(buildItem.data('build'))){
		space.removeClass('grass').addClass('town');
	}
});