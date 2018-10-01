let boardHtml = '';

for (let i=0; i<10; i++){
	boardHtml += ('<div class="boardRow">');
	for (let j=0; j<10; j++){
		boardHtml += ('<div class="boardSpace"></div>');
	}
	boardHtml += ('</div>');
}

$('.board').html(boardHtml);