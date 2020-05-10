alert('loaded successfully');
var jq = document.createElement('script');
jq.src="https://code.jquery.com/jquery-3.5.0.js";
document.body.appendChild(jq);
alert('page successfully jQuerified!');

//variables & functions
function land (draw, name, price){
  if(draw === 0){
    alert(name + ' drawn');
  }
  else{
    alert('pay ' + price);
  }
}
function GO (draw){
  if(draw === 0){
    alert('go drawn');
  }
  else{
    alert('collect $200');
  }
}
function chest (draw){
  if(draw === 0){
    alert('community chest drawn');
  }
  else{
    alert('community chest!');
  }
}
function chance(draw){
  if(draw === 0){
    alert('chance drawn');
  }
  else{
    alert('chance!');
  }
}
function tax(draw, type){
  if(type === "income"){
    if(draw === 0){
      alert('tax drawn');
    }
    else{
      alert('income tax');
    }
  }
  else if(type === "luxury"){
    if(draw === 0){
      alert('tax drawn');
    }
    else{
      alert('luxury tax');
    }
  }
}
function jail(draw){
  if(draw === 0){
    alert('jail drawn');
  }
  else{
    alert('in jail');
  }
}
function parking(draw){
  if(draw === 0){
    alert('free parking drawn');
  }
  else{
    alert('free parking!');
  }
}
function goJail(draw){
  if(draw === 0){
    alert('go to jail drawn');
  }
  else{
    alert('go to jail');
  }
}

var properties = {
  0 : GO(0),
  1 : land(0, 'mediterranian\navenue', 60),
  2 : chest(0),
  3 : land(0, 'baltic\navenue', 60),
  4 : tax(0, "income"),
  5 : land(0, 'reading\nrailroad', 200),
  6 : land(0, 'oriental\navenue', 100),
  7 : chance(0),
  8 : land(0, 'vermont\navenue', 100),
  9 : land(0, 'conneticut\navenue', 120),
  10 : jail(0),
  11 : land(0, 'st. charles\nplace', 140),
  12 : land(0,  'electric', 150),
  13 : land(0, 'states\navenue', 140),
  14 : land(0, 'virginia\navenue', 160),
  15 : land(0, 'pennslyvania\nrailroad', 200),
  16 : land(0, 'st. james\nplace', 180),
  17 : chest(0),
  18 : land(0, 'new york\navenue', 200),
  19 : parking(0),
  20 : land(0, 'kentucky\navenue', 220),
  21 : chance(0),
  22 : land(0, 'indiana\navenue', 220),
  23 : land(0, 'illinois\navenue', 240),
  24 : land(0, 'B.B.O\nrailroad', 200),
  25 : land(0, 'atlantic\navenue', 260),
  26 : land(0, 'venitor\navenue', 260),
  27 : land(0, 'water\nworks', 150),
  28 : land(0, 'marvin\ngardens', 280),
  29 : goJail(0),
  30 : land(0, 'pacific\navenue', 300),
  31 : land(0, 'north\ncarolina\navenue', 300),
  32 : chest(0),
  33 : land(0, 'pennslyvania\navenue', 320),
  34 : land(0, 'short\nline\nrailroad', 200),
  35 : chance(0),
  36 : land(0, 'park\nplace', 350),
  37 : tax(0, "luxury"),
  38 : land(0, 'boardwalk', 400)
}

var board = document.createElement('div');
board.id="board";
board.width="50%";
board.height="50%";
board.top="25%";
board.left="25%";
board.background="rgba(250,250,250,0.7)";
document.body.appendChild(board);

