alert('loaded successfully');

var board = document.createElement('div');
board.id="board";
board.style.width="440px";
board.style.height="440px";
board.style.top="25%";
board.style.left="25%";
board.style.position = 'fixed';
board.style.background="rgba(150,220,255,0.9)";
document.body.appendChild(board);

//variables & functions
var i = 1;

function land (name, price){
  var square = document.createElement('div');
  square.id = i;
  square.style = squareStyle();
  
  if(price !== null){
    square.innerHTML = name + '\n\n' + price;
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
function squareStyle(){
  var x;
  var y;
  var compensate;
  
  if(i <= 11){
    compensate = i;
    x = 440 - compensate * 40;
    y = 440 - 40;
  }
  else if(i > 11 && i <= 21){
    compensate = i - 11;
    x = 0;
    y = 440 - compensate * 40;
  }
  else if(i > 21 && i <=31){
    compensate = i - 21;
    x = compensate * 40;
    y = 0;
  }
  else{
    compensate = i - 31;
    x = 440 - 40;
    y = compensate * 10;
  }
  
  console.log(x);
  console.log(y);
  
  x = x.toString();
  y = y.toString();
  var stylishSquares = "width:40px; height:40px; border:1px solid black; position:absolute; top:" + y +"; left:" + x + ";";
  
  return stylishSquares;
}

var properties = {
  1  : land('go'),
  2  : land('mediterranian\navenue', 60),
  3  : land('chest'),
  4  : land('baltic\navenue', 60),
  5  : land('income tax'),
  6  : land('reading\nrailroad', 200),
  7  : land('oriental\navenue', 100),
  7  : land('chance'),
  9  : land('vermont\navenue', 100),
  10 : land('conneticut\navenue', 120),
  11 : land('jail'),
  12 : land('st. charles\nplace', 140),
  13 : land('electric', 150),
  14 : land('states\navenue', 140),
  15 : land('virginia\navenue', 160),
  16 : land('pennslyvania\nrailroad', 200),
  17 : land('st. james\nplace', 180),
  18 : land('chest'),
  19 : land('new york\navenue', 200),
  20 : land('parking'),
  21 : land('kentucky\navenue', 220),
  22 : land('chance'),
  23 : land('indiana\navenue', 220),
  24 : land('illinois\navenue', 240),
  25 : land('B.B.O\nrailroad', 200),
  26 : land('atlantic\navenue', 260),
  27 : land('venitor\navenue', 260),
  28 : land('water\nworks', 150),
  29 : land('marvin\ngardens', 280),
  30 : land('go to\njail'),
  31 : land('pacific\navenue', 300),
  32 : land('north\ncarolina\navenue', 300),
  33 : land('chest'),
  34 : land('pennslyvania\navenue', 320),
  35 : land('short\nline\nrailroad', 200),
  36 : land('chance'),
  37 : land('park\nplace', 350),
  38 : land('luxury tax'),
  39 : land('boardwalk', 400)
};

alert('done');
