alert('loaded successfully');
var jq = document.createElement('script');
jq.src="https://code.jquery.com/jquery-3.5.0.js";
document.body.appendChild(jq);
alert('page successfully jQuerified!');

//variables & functions
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
  go : GO(0),
  mediterranian_avenue : 60,
  community_chest : chest(0),
  baltic_avenue : 60,
  INCOME_TAX : tax(0, "income"),
  reading_railroad : 200,
  oriental_avenue : 100,
  chance : chance(0),
  vermont_avenue : 100,
  conneticut_avenue : 120,
  jail : jail(0),
  st_charles_place : 140,
  eletric : 150,
  states_avenue : 140,
  virginia_avenue : 160,
  pennslyvania_railroad : 200,
  st_james_place : 180,
  community_chest : chest(0),
  new_york_avenue : 200,
  free_parking : parking(0),
  kentucky_avenue : 220,
  chance : chance(0),
  indiana_avenue : 220,
  illinois_avenue : 240,
  BBO_railroad : 200,
  atlantic_avenue : 260,
  venitor_avenue : 260,
  water : 150,
  marvin_gardens : 280,
  go_to_jail : goJail(0),
  pacific_avenue : 300,
  north_carolina_avenue : 300,
  community_chest : chest(0),
  pennslyvania_avenue : 320,
  short_line_railroad : 200,
  chance : chance(0),
  park_place : 350,
  luxury_tax : tax(0, "luxury"),
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

