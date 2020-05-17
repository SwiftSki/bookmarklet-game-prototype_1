alert('loaded successfully');

//variables & functions
var i = 1;
var j = 0;
var boardWidth = window.innerWidth;
var boardHeight = window.innerHeight;
var playerStat = [
  {
    money: 1480,
    position: 0,
    color: '#000000'
  }
];
var players = prompt('how many players?', 1);
var playerTurn = 0;
var turnPart = 0;
var targetPlayer;
var d1;
var d2;
var output = [];
var out1 = document.createElement('p');
var wantToPay;
var character = document.createElement('circle');

function drawPlayer(){
  character.cx = boardWidth / 22;
  character.cy = boardHeight / 22;
  character.r = '10';
  character.stroke = playerStat[playerTurn].color;
  character.stroke-width = 1;
  character.fill = playerStat[playerTurn].color;
  document.getElementById('svg' + playerStat[playerTurn].position).appendChild(character);
}
function drawBoard(){
  var board = document.createElement('div');
  board.id="board";
  board.style.width=boardWidth;
  board.style.height=boardHeight;
  board.style.top="0px";
  board.style.left="0px";
  board.style.position = 'fixed';
  board.style.background="rgba(150,220,255,0.9)";
  document.body.appendChild(board);

  var control = document.createElement('div');
  control.id = 'control';
  control.style.width = '30%';
  control.style.height = '30%';
  control.style.top = '20%';
  control.style.left = '50%';
  control.style.position = 'absolute';
  document.getElementById('board').appendChild(control);

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
}
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
    square.innerHTML = name + '<br>' + price + '<svg style="width:100%; height:100%; position:absolute; top:0px; left:0px;" id="svg' + i + '"></svg>';
  }
  else{
    square.innerHTML = name + '<svg style="width:100%; height:100%; position:absolute; top:0px; left:0px;" id="svg' + i + '"></svg>';
  }
  document.getElementById('board').appendChild(square);
//  console.log(i);
//  console.log(name + ' drawn');
  
  i++;
  return [name, price, 0, undefined, betterMath(price / 10) - 4];
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
  if(playerTurn > playerStat.length - 1){
    playerTurn = 0;
  }
  
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
          console.log('buy');
          buy();
        }
        else{
          console.log('pay');
          switch(properties[playerStat[playerTurn].position][2]){
                 case 0:
                  playerStat[playerTurn].money -= properties[playerStat[playerTurn].position][4];
                  playerStat[properties[playerStat[playerTurn].position][3]].money += properties[playerStat[playerTurn].position][4];
                 break;
                 case 1:
                  playerStat[playerTurn].money -= properties[playerStat[playerTurn].position][4] * 5;
                  playerStat[properties[playerStat[playerTurn].position][3]].money += properties[playerStat[playerTurn].position][4] * 5;
                 break;
                 case 2:
                  playerStat[playerTurn].money -= properties[playerStat[playerTurn].position][4] * 12.5;
                  playerStat[properties[playerStat[playerTurn].position][3]].money += properties[playerStat[playerTurn].position][4] * 12.5;
                 break;
                 case 3:
                  playerStat[playerTurn].money -= properties[playerStat[playerTurn].position][4] * 37.5;
                  playerStat[properties[playerStat[playerTurn].position][3]].money += properties[playerStat[playerTurn].position][4] * 37.5;
                 break;
                 case 4:
                  playerStat[playerTurn].money -= properties[playerStat[playerTurn].position][4] * 56.25;
                  playerStat[properties[playerStat[playerTurn].position][3]].money += properties[playerStat[playerTurn].position][4] * 56.25;
                 break;
                 case 5:
                  playerStat[playerTurn].money -= properties[playerStat[playerTurn].position][4] * 75;
                  playerStat[properties[playerStat[playerTurn].position][3]].money += properties[playerStat[playerTurn].position][4] * 75;
                 break;
                 default:
                  throw('NOT A VALID NUMBERR OF HOUSES');
                 break;
          }
        }
      break;
    }
    turnPart = 0;
  
    if(d1 === d2){
      playerTurn = playerTurn;
      console.log('doubles!');
    }
    else{
      if(playerTurn < playerStat.length + 1){
        playerTurn++;
      }
      else{
        playerTurn = 0;
      }
      console.log(playerTurn);

      while(output.length < playerStat.length){
        output.push('player ' + j + ': $' + playerStat[j].money + ', position: ' + properties[playerStat[j].position][0] + '<br>');
        j++;
      }
      output = output.toString();
      out1.innerHTML = output;
      document.getElementById('control').appendChild(out1);
      output = "";
      output = output.split("");
      j = 0;

      console.log('turn part 3 done');
    }
  }
  document.getElementById('rollButton').disabled = false;
  console.log(playerTurn);
}
function buildings(){
  
}
function trade(){

}
function move(){
  
  d1 = +document.getElementById('d1').innerHTML;
  d2 = +document.getElementById('d2').innerHTML;
  
  if(d1 + d2 + playerStat[playerTurn].position <= 39){
    playerStat[playerTurn].position += d1 + d2;
  }
  else{
    playerStat[playerTurn].position += d1 + d2 - 39;
    playerStat[playerTurn].money += 200;
  }
  drawPlayer();
}
function buy(){
  if(playerStat[playerTurn].money >= properties[playerStat[playerTurn].position][1]){
    wantToPay = confirm('would you like to buy ' + properties[playerStat[playerTurn].position][0]);
  }
  else{
    wantToPay = false;
  }
  
  if(wantToPay === true){
    playerStat[playerTurn].money -= properties[playerStat[playerTurn].position][1];
    properties[playerStat[playerTurn].position][3] = playerTurn;
  }
  wantToPay = undefined;
}

drawBoard();
var properties = [
  land('go'),
  land('mediterranian avenue', 60),
  land('community chest'),
  land('baltic avenue', 60),
  land('income tax'),
  land('reading railroad', 200),
  land('oriental avenue', 100),
  land('chance'),
  land('vermont avenue', 100),
  land('conneticu avenue', 120),
  land('jail'),
  land('st. charles place', 140),
  land('electric', 150),
  land('states avenue', 140),
  land('virginia avenue', 160),
  land('pennslyvania railroad', 200),
  land('st. james place', 180),
  land('community chest'),
  land('tennessee avenue', 180),
  land('new york avenue', 200),
  land('free parking'),
  land('kentucky avenue', 220),
  land('chance'),
  land('indiana avenue', 220),
  land('illinois avenue', 240),
  land('B.B.O railroad', 200),
  land('atlantic avenue', 260),
  land('venitor avenue', 260),
  land('water works', 150),
  land('marvin gardens', 280),
  land('go to jail'),
  land('pacific avenue', 300),
  land('north carolina avenue', 300),
  land('chest'),
  land('pennslyvania avenue', 320),
  land('short line railroad', 200),
  land('chance'),
  land('park place', 350),
  land('luxury tax'),
  land('boardwalk', 400)
];

//game starts here
while(playerStat.length < players){
  playerStat.push({money: 1480, position: 0, color: prompt('please insert color', '#0000ff')});
}

