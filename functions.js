function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
var computerMove;
computerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

var playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else {
  playerMove = 'nieznany ruch';
}
if (playerInput == '2') {
  playerMove = 'papier';
} else {
}
if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
}
printMessage('Twój ruch: ' + playerMove);