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
	
	
	$('#spaceInfo').html(thisSpace);
}