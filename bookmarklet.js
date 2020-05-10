alert('loaded successfully');
var jq = document.createElement('script');
jq.src="https://code.jquery.com/jquery-3.5.0.js";
document.body.appendChild(jq);
alert('page successfully jQuerified!');

//variables & functions
function GO (){
  alert('collect $200');
}
function chest (){
  alert('community chest!');
}
function chance(){
  alert('chance');
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
  alert('jail');
}
function parking(){
  alert('free parking');
}
function goJail(){
  alert('go to jail');
}

var properties = {
  go : GO(),
  mediterranian_avenue : 60,
  community_chest : chest(),
  baltic_avenue : 60,
  INCOME_TAX : tax("income"),
  reading_railroad : 200,
  oriental_avenue : 100,
  chance : chance(),
  vermont_avenue : 100,
  conneticut_avenue : 120,
  jail : jail(),
  st_charles_place : 140,
  eletric : 150,
  states_avenue : 140,
  virginia_avenue : 160,
  pennslyvania_railroad : 200,
  st_james_place : 180,
  community_chest : chest(),
  new_york_avenue : 200,
  free_parking : parking(),
  kentucky_avenue : 220,
  chance : chance(),
  indiana_avenue : 220,
  illinois_avenue : 240,
  BBO_railroad : 200,
  atlantic_avenue : 260,
  venitor_avenue : 260,
  water : 150,
  marvin_gardens : 280,
  go_to_jail : goJail(),
  pacific_avenue : 300,
  north_carolina_avenue : 300,
  community_chest : chest(),
  pennslyvania_avenue : 320,
  short_line_railroad : 200,
  chance : chance(),
  park_place : 350,
  luxury_tax : tax("luxury"),
  boardwalk : 400
}

var board = document.createElement('div');
board.id="board";
board.width="50%";
board.height="50%";
board.top="25%";
board.left="25%";
board.background="rgba(250,250,250,0.7)";
document.body.appendChild(board);

