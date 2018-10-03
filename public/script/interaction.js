$('.boardSpace').on('click', function(){
	console.log($(this));
	spaceType($(this));
})

function spaceType(space){
	showSpaceInfo(space);

	if (space.hasClass('grass') || space.hasClass('buildable')){
		openBuildMenu();
	}
}

function openBuildMenu(){
	
}

function showSpaceInfo(space){
	let thisSpace = '';

	let row = space.data('row') + 1;
	let col = space.data('col') + 1;
	let type = space.data('type');

	thisSpace = 'Row: ' + row + '</br>Col: ' + col + '</br>Type: ' + type; 
	$('#spaceInfo').html(thisSpace);
}