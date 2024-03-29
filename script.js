var origBoard;
const player1 = '0'
const player2 = 'X'
const winCombos = [
  [0, 1, 2]
  [3, 4, 5]
  [6, 7, 8]
  [0, 3, 6]
  [1, 4, 7]
  [2, 5, 8]
  [0, 4, 8]
  [6, 4, 2]
]
// ******* selects each element on the page that has  the class spot****
const spots = document.querySelectorAll('.spot');
startGame();

// *** this will run when the game starts and when user hits the replay button***
function startGame() {
  document.querySelector(".endgame").style.display = "none"
   origBoard = Array.from(Array(9).keys());
   // cycle trough the array
   for (var i=0; i < spots.lenght; i++){
     spots[i].innerText = '';
     // *** removes the background color to make lighting up effect***
     spots[i].style.removeProperty('background-color');
     // *** add eventlistener on the click event to call the turnClick function***
     spots[i].addEventListener'click', turnClick, false);

   }
}
