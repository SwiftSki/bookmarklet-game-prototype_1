alert('loaded successfully');

//for the purpose of scaling....
const boardWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const boardHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

var board = document.createElement('div');
board.id="board";
board.style.width=boardWidth;
board.style.height=boardHeight;
board.style.top="0px";
board.style.left="0px";
board.style.position = 'fixed';
board.style.background="rgba(150,220,255,0.9)";
document.body.appendChild(board);


var exit = document.createElement('button');
exit.innerHTML = 'close';
exit.setAttribute('onclick','document.getElementById("board").remove()');
exit.style.top = '0px';
exit.style.left = '0px';
exit.style.position = 'fixed';
document.body.appendChild(exit);


//variables & functions
var i = 1;

function land (name, price){
  var square = document.createElement('div');
  square.id = i;
  square.style = squareStyle();
  
  if(price !== null){
    square.innerHTML = name + '<br><br>' + price;
  }
  else{
    square.innerHTML = name;
  }
  document.getElementById('board').appendChild(square);
//  console.log(i);
//  console.log(name + ' drawn');
  
  i++;
  return [name, price];
}
function GO (){
  alert('collect $200');
}
function chest (){
  alert('community chest!');
}
function chance(){
  alert('chance!');
}
function tax(type){
  if(type === "income"){
    alert('income tax');
  }
  else if(type === "luxury"){
    alert('luxury tax');
  }
}
function jail(){
  alert('in jail');
}
function parking(){
  alert('free parking!');
}
function goJail(){
  alert('go to jail');
}
function betterMath(x){
  return x;
}
function squareStyle(){
  var x;
  var y;
  var compensate;
  
  if(i <= 11){
    compensate = i;
    x = boardWidth - compensate * betterMath(boardWidth / 11);
    y = boardHeight - boardHeight / 11;
  }
  else if(i > 11 && i <= 21){
    compensate = i - 11;
    x = 0;
    y = boardHeight - betterMath(boardHeight / 11) - compensate * betterMath(boardHeight / 11);
  }
  else if(i > 21 && i <=31){
    compensate = i - 21;
    x = compensate * boardWidth / 11;
    y = 0;
  }
  else{
    compensate = i - 31;
    x = boardWidth - boardWidth / 11;
    y = compensate * betterMath(boardHeight / 11);
  }
  
  console.log(x);
  console.log(y);
  
  x = x.toString();
  y = y.toString();
  var stylishSquares = "width:" + betterMath(boardWidth / 11) + "px; height:" + betterMath(boardHeight / 11) + "px; border:1px solid black; position:absolute; top:" + y +"; left:" + x + ";";
  
  return stylishSquares;
}

var properties = {
  1  : land('go'),
  2  : land('mediterranian<br>avenue', 60),
  3  : land('chest'),
  4  : land('baltic>br>avenue', 60),
  5  : land('income tax'),
  6  : land('reading<br>railroad', 200),
  7  : land('oriental<br>avenue', 100),
  7  : land('chance'),
  9  : land('vermont<br>avenue', 100),
  10 : land('conneticu<br>avenue', 120),
  11 : land('jail'),
  12 : land('st. charles<br>place', 140),
  13 : land('electric', 150),
  14 : land('states<br>avenue', 140),
  15 : land('virginia<br>avenue', 160),
  16 : land('pennslyvania<br>railroad', 200),
  17 : land('st. james<br>place', 180),
  18 : land('chest'),
  19 : land('tennessee<br>avenue', 180),
  20 : land('new york<br>avenue', 200),
  21 : land('parking'),
  22 : land('kentucky<br>avenue', 220),
  23 : land('chance'),
  24 : land('indiana<br>avenue', 220),
  25 : land('illinois<br>avenue', 240),
  26 : land('B.B.O<br>railroad', 200),
  27 : land('atlantic<br>avenue', 260),
  28 : land('venitor<br>avenue', 260),
  29 : land('water<br>works'),
  30 : land('marvin<br>gardens', 280),
  31 : land('go to<br>jail'),
  32 : land('pacific<br>avenue', 300),
  33 : land('north<br>carolina<br>avenue', 300),
  34 : land('chest'),
  35 : land('pennslyvania<br>avenue', 320),
  36 : land('short<br>line<br>railroad', 200),
  37 : land('chance'),
  38 : land('park<br>place', 350),
  39 : land('luxury tax'),
  40 : land('boardwalk', 400)
};

alert('done');
