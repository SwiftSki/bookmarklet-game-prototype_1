alert('loaded successfully');

var board = document.createElement('div');
board.id="board";
board.style.width="440px";
board.style.height="440px";
board.style.top="25%";
board.style.left="25%";
board.style.position = 'fixed';
board.style.background="rgba(250,250,250,0.7)";
document.body.appendChild(board);

//variables & functions
var i = 0;

function land (name, price){
  var square = document.createElement('div');
  square.id = i;
  square.style = squareStyle();
  
  if(price != null){
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
  if(i <= 10){
    var x = 440 - i * 40;
    var y = 440 - 40;
  }
  else if(i > 10 && i <= 20){
    var x = 0;
    var y = 440 - i * 40;
  }
  else if(i > 20 && i <=30){
    var x = i * 40;
    var y = 0;
  }
  else{
    var x = 440 - 40;
    var y = i * 10;
  }
  
  console.log(x);
  console.log(y);
  
  x = x.toString();
  y = y.toString();
  var stylishSquares = "width:40px; height:40px; border:1px solid black; position:absolute; top:" + y +"; left:" + x + ";";
  
  return stylishSquares;
}

var properties = {
  0  : land('go'),
  1  : land('mediterranian\navenue', 60),
  2  : land('chest'),
  3  : land('baltic\navenue', 60),
  4  : land('income tax'),
  5  : land('reading\nrailroad', 200),
  6  : land('oriental\navenue', 100),
  7  : land('chance'),
  8  : land('vermont\navenue', 100),
  9  : land('conneticut\navenue', 120),
  10 : land('jail'),
  11 : land('st. charles\nplace', 140),
  12 : land('electric', 150),
  13 : land('states\navenue', 140),
  14 : land('virginia\navenue', 160),
  15 : land('pennslyvania\nrailroad', 200),
  16 : land('st. james\nplace', 180),
  17 : land('chest'),
  18 : land('new york\navenue', 200),
  19 : land('parking'),
  20 : land('kentucky\navenue', 220),
  21 : land('chance'),
  22 : land('indiana\navenue', 220),
  23 : land('illinois\navenue', 240),
  24 : land('B.B.O\nrailroad', 200),
  25 : land('atlantic\navenue', 260),
  26 : land('venitor\navenue', 260),
  27 : land('water\nworks', 150),
  28 : land('marvin\ngardens', 280),
  29 : land('go to\njail'),
  30 : land('pacific\navenue', 300),
  31 : land('north\ncarolina\navenue', 300),
  32 : land('chest'),
  33 : land('pennslyvania\navenue', 320),
  34 : land('short\nline\nrailroad', 200),
  35 : land('chance'),
  36 : land('park\nplace', 350),
  37 : land('luxury tax'),
  38 : land('boardwalk', 400)
};

for(var i = 0; i<39; i++){
//  properties.i;
}
alert('done');
