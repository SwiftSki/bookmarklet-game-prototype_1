alert('loaded successfully');
var jq = document.createElement('script');
jq.src="https://code.jquery.com/jquery-3.5.0.js";
document.body.appendChild(jq);
alert('page successfully jQuerified!');

var board = document.createElement('div');
board.id="board";
board.width="50%";
board.height="50%";
board.top="25%";
board.left="25%";
board.background="rgba(250,250,250,0.7)";
document.body.appendChild(board);
