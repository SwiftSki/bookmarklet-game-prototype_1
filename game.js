alert('loaded successfully');

//for scaling, DO NOT CHANGE, it will break
const boardWidth = window.innerWidth;
const boardHeight = window.innerHeight;

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
exit.setAttribute('onclick','document.getElementById("board").remove(); document.getElementById("monopolyScript").remove();');
exit.style.top = boardHeight / 11;
exit.style.left = boardHeight / 11;
exit.style.position = 'absolute';
exit.style.zIndex = 999;
document.getElementById("board").appendChild(exit);

var dice = document.createElement('div');
dice.style.width = '20%';
dice.style.height = '10%';
dice.style.top = "40%";
dice.style.left = "30%";
dice.style.position = 'absolute';
dice.innerHTML = "<div id='d1' style='border: 1px solid black; width:49%; height:99%; text-align:center;'>0</div><div id='d2' style='border: 1px solid black; width:49%; height:99%; text-align:center;'>0</div>";
document.getElementById("board").appendChild(dice);

var rollButton = document.createElement('button');
rollButton.innerHTML = 'roll';
rollButton.setAttribute('onclick', 'rollDice()');
rollButton.id='rollButton';
rollButton.style.position = 'absolute';
rollButton.style.top = '50%';
rollButton.style.left = '40%';
document.getElementById("board").appendChild(rollButton);


//variables & functions
var i = 1;
var playerStat = [
  {
    money: 1480,
    position: 1
  }
];
var players = prompt('how many players?', 1);
var playerTurn = 0;
var turnPart = 0;
var targetPlayer;

function rollDice(){
  document.getElementById('d1').innerHTML = Math.floor((Math.random() * 6) + 1);
  document.getElementById('d2').innerHTML = Math.floor((Math.random() * 6) + 1);
  document.getElementById('rollButton').disabled = true;
  turn();
}
function land (name, price){
  var square = document.createElement('div');
  square.id = i;
  square.style = squareStyle();
  
  if(price !== undefined){
    square.innerHTML = name + '<br><br>' + price;
  }
  else{
    square.innerHTML = name;
  }
  document.getElementById('board').appendChild(square);
//  console.log(i);
//  console.log(name + ' drawn');
  
  i++;
  return [name, price, 0, undefined];
}
function GO (){
  console.log('collect $200');
}
function chest (){
  console.log('community chest!');
}
function chance(){
  console.log('chance!');
}
function tax(type){
  if(type === "income"){
    console.log('income tax');
  }
  else if(type === "luxury"){
    console.log('luxury tax');
  }
}
function jail(){
  console.log('in jail');
}
function parking(){
  console.log('free parking!');
}
function goJail(){
  console.log('go to jail');
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
  
//  console.log(x);
//  console.log(y);
  
  x = x.toString();
  y = y.toString();
  var stylishSquares = "width:" + betterMath(boardWidth / 11) + "px; height:" + betterMath(boardHeight / 11) + "px; border:1px solid black; position:absolute; top:" + y +"; left:" + x + "; zIndex:1;";
  
  return stylishSquares;
}
function turn(){
  console.log(playerTurn);
  targetPlayer = playerStat[playerTurn].position;
  if(turnPart === 0){
    buildings();
    trade();
    turnPart++;
    console.log('turn part 1 done');
    turn();
  }
  else if(turnPart === 1){
    move();
    turnPart++;
    console.log('turn part 2 done');
    turn();
  }
  else if(turnPart === 2){
    switch(targetPlayer){
      case 1:
        playerStat[playerTurn].money += 200;
      break;
      case 3, 18, 34:
        chest();
      break;
      case 5:
        tax("income");
      break;
      case 8, 23, 37:
        chance();
      break;
      case 39:
        tax("luxury");
      break;
      default:
        if(properties[targetPlayer][3] === undefined){
          console.log(buy);
        }
        else{
          console.log('pay');
        }
      break;
    }
  console.log('turn part 3 done');
  turnPart = 0;
  }
  if(document.getElementById('d1').innerHTML === document.getElementById('d2').innerHTML){
    playerTurn = playerTurn;
  }
  else{
    if(playerTurn < playerStat.length){
      playerTurn++;
    }
    else{
      playerTurn = 0;
    }
  }
  document.getElementById('rollButton').disabled = false;
}
function buildings(){
  
}
function trade(){

}
function move(){
  if(document.getElementById('d1').innerHTML + document.getElementById('d2').innerHTML + playerStat[playerTurn].position <= 40){
    playerStat[playerTurn].position += document.getElementById('d1').innerHTML + document.getElementById('d2').innerHTML;
  }
  else{
    playerStat[playerTurn].position += document.getElementById('d1').innerHTML + document.getElementById('d2').innerHTML - 40;
  }
}
function buy(){

}

var properties = [
  land('go'),
  land('mediterranian<br>avenue', 60),
  land('community\nchest'),
  land('baltic<br>avenue', 60),
  land('income tax'),
  land('reading<br>railroad', 200),
  land('oriental<br>avenue', 100),
  land('chance'),
  land('vermont<br>avenue', 100),
  land('conneticu<br>avenue', 120),
  land('jail'),
  land('st. charles<br>place', 140),
  land('electric', 150),
  land('states<br>avenue', 140),
  land('virginia<br>avenue', 160),
  land('pennslyvania<br>railroad', 200),
  land('st. james<br>place', 180),
  land('community\nchest'),
  land('tennessee<br>avenue', 180),
  land('new york<br>avenue', 200),
  land('free\nparking'),
  land('kentucky<br>avenue', 220),
  land('chance'),
  land('indiana<br>avenue', 220),
  land('illinois<br>avenue', 240),
  land('B.B.O<br>railroad', 200),
  land('atlantic<br>avenue', 260),
  land('venitor<br>avenue', 260),
  land('water<br>works'),
  land('marvin<br>gardens', 280),
  land('go to<br>jail'),
  land('pacific<br>avenue', 300),
  land('north carolina<br>avenue', 300),
  land('chest'),
  land('pennslyvania<br>avenue', 320),
  land('short line<br>railroad', 200),
  land('chance'),
  land('park<br>place', 350),
  land('luxury tax'),
  land('boardwalk', 400)
];

//game starts here
while(playerStat.length < players){
  playerStat.push({money: 1480, position: 1});
}

